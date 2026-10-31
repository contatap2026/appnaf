-- =========================================================
-- NAF Aprende — dar (o quitar) el rol de administrador
-- El administrador ve la pestaña «Panel NAF» en la app con la
-- lista de participantes y puede descargar el reporte en Excel.
--
-- 1. Primero esa persona debe haber creado su cuenta en la app.
-- 2. Cambia 'rosacruz' por su usuario (el que usa para entrar).
-- 3. Run. Debe decir «1 row affected».
-- 4. En la app: cerrar sesión y volver a entrar.
-- =========================================================
update public.perfiles
set es_admin = true                    -- pon false para quitar el rol
where id = (select id from auth.users where split_part(email, '@', 1) = 'rosacruz');

-- Ver quiénes son administradores:
-- select p.nombre, split_part(u.email, '@', 1) as usuario
-- from public.perfiles p join auth.users u on u.id = p.id where p.es_admin;
