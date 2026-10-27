/* =========================================================
   CONFIGURACIÓN — conexión con Supabase
   Copia estos dos valores de: Supabase → Project Settings → API
     - Project URL           → SUPABASE_URL
     - anon / public key     → SUPABASE_ANON_KEY
   La clave «anon» es pública por diseño: la seguridad la dan las
   reglas (RLS) de supabase/esquema.sql. NUNCA pongas aquí la
   clave «service_role».
   Si se dejan vacíos, la app funciona sin registro y guarda el
   avance solo en el celular.
   ========================================================= */
window.NAF = window.NAF || {};

NAF.CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: ""
};
