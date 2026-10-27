-- =========================================================
-- NAF Aprende — restablecer la contraseña de un participante
-- Las cuentas no tienen correo, así que la contraseña olvidada
-- la cambia el docente desde Supabase → SQL Editor.
--
-- 1. Cambia 'rosa.cruz' por el usuario (como aparece en la vista
--    resumen_estudiantes: minúsculas, sin tildes, con puntos).
-- 2. Cambia 'NuevaClave123' por la contraseña nueva (mínimo 6).
-- 3. Run. Debe decir «1 row affected».
-- =========================================================
update auth.users
set encrypted_password = extensions.crypt('NuevaClave123', extensions.gen_salt('bf')),
    updated_at = now()
where split_part(email, '@', 1) = 'rosa.cruz';
