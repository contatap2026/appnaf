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
create policy "perfil propio: editar"   on public.perfiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "progreso propio: ver"    on public.progreso for select using (auth.uid() = usuario_id);
create policy "progreso propio: crear"  on public.progreso for insert with check (auth.uid() = usuario_id);
create policy "progreso propio: editar" on public.progreso for update using (auth.uid() = usuario_id) with check (auth.uid() = usuario_id);

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
create or replace view public.resumen_estudiantes
with (security_invoker = true) as
select p.nombre, p.tipo, u.email, g.xp, g.lecciones, g.racha, g.actualizado, p.creado
from public.perfiles p
join auth.users u on u.id = p.id
left join public.progreso g on g.usuario_id = p.id
order by g.xp desc nulls last;

revoke all on public.resumen_estudiantes from anon, authenticated;
