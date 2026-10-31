-- =========================================================
-- NAF Aprende — fijar o cambiar la clave del modo administrador
-- 1. Cambia CAMBIA_ESTA_CLAVE por la clave real (solo al pegarlo
--    en Supabase; NO la guardes en este archivo: el repositorio es público).
-- 2. Supabase → SQL Editor → Run.
-- La clave queda guardada cifrada; nadie puede leerla desde la app.
-- =========================================================
insert into privado.ajustes (id, clave_admin)
values (1, extensions.crypt('CAMBIA_ESTA_CLAVE', extensions.gen_salt('bf')))
on conflict (id) do update set clave_admin = excluded.clave_admin;

-- Desbloquear a alguien que falló 5 veces (cambia 'rosacruz'):
-- delete from privado.intentos_admin
-- where usuario_id = (select id from auth.users where split_part(email, '@', 1) = 'rosacruz');
