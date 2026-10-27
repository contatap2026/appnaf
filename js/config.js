/* =========================================================
   CONFIGURACIÓN — conexión con Supabase
   Copia estos dos valores de: Supabase → Project Settings → API
     - Project URL           → SUPABASE_URL
     - Publishable key (o la «anon» de Legacy API keys) → SUPABASE_ANON_KEY
   La clave «anon» es pública por diseño: la seguridad la dan las
   reglas (RLS) de supabase/esquema.sql. NUNCA pongas aquí la
   clave «service_role».
   Si se dejan vacíos, la app funciona sin registro y guarda el
   avance solo en el celular.
   ========================================================= */
window.NAF = window.NAF || {};

NAF.CONFIG = {
  SUPABASE_URL: "https://nzuplictqcodgnjddzai.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_2CyTqZ4iYUEE3tLBL1erDA_Wh2krp6k", // clave pública (publishable)

  // Las cuentas usan solo usuario y contraseña. Supabase necesita un correo, así que la app
  // arma uno interno: «Rosa Cruz» → rosa.cruz@<DOMINIO_USUARIOS>. No se envía ningún correo
  // (en Supabase debe estar DESACTIVADO «Confirm email»). No cambies este valor después de
  // que haya cuentas creadas: dejarían de poder entrar.
  DOMINIO_USUARIOS: "contatap2026.github.io"
};
