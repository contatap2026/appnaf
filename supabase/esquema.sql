-- =========================================================
-- NAF Aprende — esquema de Supabase
-- Pega TODO este archivo en Supabase → SQL Editor → Run.
-- Se puede ejecutar más de una vez sin romper nada.
-- =========================================================

-- ---------- Perfiles: datos de registro de cada usuario ----------
create table if not exists public.perfiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  nombre      text not null,
  tipo        text not null default 'otro'
              check (tipo in ('estudiante', 'emprendedor', 'docente', 'otro')),
  acepta_datos boolean not null default false,  -- consentimiento de tratamiento de datos (Ley 29733)
  creado      timestamptz not null default now()
);
-- Administradores del NAF: ven el Panel NAF y descargan el reporte. Se activa con supabase/admin.sql
alter table public.perfiles add column if not exists es_admin boolean not null default false;

-- ---------- Progreso: avance de cada usuario ----------
create table if not exists public.progreso (
  usuario_id  uuid primary key references auth.users (id) on delete cascade,
  datos       jsonb not null default '{}'::jsonb,  -- estado completo de la app (XP, lecciones, racha…)
  xp          integer not null default 0,          -- copias para consultar fácil desde Supabase
  lecciones   integer not null default 0,
  racha       integer not null default 0,
  actualizado timestamptz not null default now()
);

-- ---------- Seguridad: cada persona solo ve y edita lo suyo ----------
alter table public.perfiles enable row level security;
alter table public.progreso enable row level security;

drop policy if exists "perfil propio: ver"      on public.perfiles;
drop policy if exists "perfil propio: editar"   on public.perfiles;
drop policy if exists "progreso propio: ver"    on public.progreso;
drop policy if exists "progreso propio: crear"  on public.progreso;
drop policy if exists "progreso propio: editar" on public.progreso;

create policy "perfil propio: ver"      on public.perfiles for select using (auth.uid() = id);
create policy "progreso propio: ver"    on public.progreso for select using (auth.uid() = usuario_id);
create policy "progreso propio: crear"  on public.progreso for insert with check (auth.uid() = usuario_id);
create policy "progreso propio: editar" on public.progreso for update using (auth.uid() = usuario_id) with check (auth.uid() = usuario_id);

-- Nadie puede editar perfiles desde la app (así nadie puede marcarse como administrador)
revoke insert, update, delete on public.perfiles from anon, authenticated;

-- ---------- Al registrarse, crear su perfil y su fila de progreso ----------
-- Los datos del formulario llegan en raw_user_meta_data (nombre, tipo, acepta_datos).
create or replace function public.crear_perfil_nuevo()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.perfiles (id, nombre, tipo, acepta_datos)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data ->> 'nombre', ''), split_part(new.email, '@', 1)),
    case when new.raw_user_meta_data ->> 'tipo' in ('estudiante', 'emprendedor', 'docente', 'otro')
         then new.raw_user_meta_data ->> 'tipo' else 'otro' end,
    coalesce((new.raw_user_meta_data ->> 'acepta_datos')::boolean, false)
  )
  on conflict (id) do nothing;

  insert into public.progreso (usuario_id) values (new.id) on conflict (usuario_id) do nothing;
  return new;
end;
$$;

drop trigger if exists al_crear_usuario on auth.users;
create trigger al_crear_usuario
  after insert on auth.users
  for each row execute function public.crear_perfil_nuevo();

-- ---------- Vista para docentes del NAF (solo visible desde el panel de Supabase) ----------
-- «usuario» es lo que la persona escribe para entrar (la app arma un correo interno con él)
drop view if exists public.resumen_estudiantes;
create view public.resumen_estudiantes
with (security_invoker = true) as
select p.nombre, split_part(u.email, '@', 1) as usuario, g.xp, g.lecciones, g.racha, g.actualizado, p.creado
from public.perfiles p
join auth.users u on u.id = p.id
left join public.progreso g on g.usuario_id = p.id
order by g.xp desc nulls last;

revoke all on public.resumen_estudiantes from anon, authenticated;

-- ---------- Reporte para administradores del NAF (Panel NAF en la app) ----------
-- Devuelve a todos los participantes, pero solo si quien lo pide es administrador.
create or replace function public.reporte_participantes()
returns table (
  nombre text, usuario text, xp integer, lecciones integer, racha integer,
  completadas jsonb, creado timestamptz, actualizado timestamptz, es_admin boolean
)
language plpgsql
stable
security definer set search_path = public
as $$
begin
  if not exists (select 1 from public.perfiles where id = auth.uid() and perfiles.es_admin) then
    raise exception 'Solo los administradores del NAF pueden ver el reporte' using errcode = '42501';
  end if;
  return query
    select p.nombre,
           split_part(u.email, '@', 1)::text,
           coalesce(g.xp, 0),
           coalesce(g.lecciones, 0),
           coalesce(g.racha, 0),
           coalesce(g.datos -> 'completadas', '{}'::jsonb),
           p.creado,
           g.actualizado,
           p.es_admin
    from public.perfiles p
    join auth.users u on u.id = p.id
    left join public.progreso g on g.usuario_id = p.id
    order by coalesce(g.lecciones, 0) desc, coalesce(g.xp, 0) desc;
end;
$$;

revoke all on function public.reporte_participantes() from public, anon;
grant execute on function public.reporte_participantes() to authenticated;

-- ---------- Modo administrador con clave ----------
-- La clave se guarda CIFRADA en el esquema «privado», que la app no puede leer.
-- Para fijarla o cambiarla usa supabase/clave-admin.sql (no guardes la clave real en el repositorio).
create schema if not exists privado;
revoke all on schema privado from public, anon, authenticated;

create table if not exists privado.ajustes (
  id          integer primary key default 1 check (id = 1),
  clave_admin text                         -- hash bcrypt de la clave
);
create table if not exists privado.intentos_admin (
  usuario_id uuid primary key references auth.users (id) on delete cascade,
  fallidos   integer not null default 0,
  ultimo     timestamptz
);

-- Activa el modo administrador para quien la llama, si la clave es correcta.
-- Tras 5 intentos fallidos, esa cuenta queda bloqueada para este modo.
create or replace function public.activar_admin(clave text)
returns boolean
language plpgsql
security definer set search_path = public, extensions
as $$
declare
  h text;
  f integer;
begin
  if auth.uid() is null then
    raise exception 'Inicia sesión primero' using errcode = '42501';
  end if;
  select fallidos into f from privado.intentos_admin where usuario_id = auth.uid();
  if coalesce(f, 0) >= 5 then
    raise exception 'Demasiados intentos fallidos. Pide a otro administrador que te active.' using errcode = '42501';
  end if;

  select clave_admin into h from privado.ajustes where id = 1;
  if h is null or extensions.crypt(clave, h) <> h then
    insert into privado.intentos_admin (usuario_id, fallidos, ultimo) values (auth.uid(), 1, now())
    on conflict (usuario_id) do update set fallidos = privado.intentos_admin.fallidos + 1, ultimo = now();
    return false;
  end if;

  update public.perfiles set es_admin = true where id = auth.uid();
  delete from privado.intentos_admin where usuario_id = auth.uid();
  return true;
end;
$$;

-- Quita el modo administrador a quien la llama
create or replace function public.dejar_admin()
returns void
language sql
security definer set search_path = public
as $$
  update public.perfiles set es_admin = false where id = auth.uid();
$$;

revoke all on function public.activar_admin(text) from public, anon;
revoke all on function public.dejar_admin() from public, anon;
grant execute on function public.activar_admin(text) to authenticated;
grant execute on function public.dejar_admin() to authenticated;
