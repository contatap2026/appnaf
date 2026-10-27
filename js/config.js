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
  SUPABASE_ANON_KEY: "sb_publishable_2CyTqZ4iYUEE3tLBL1erDA_Wh2krp6k" // clave pública (publishable)
};
