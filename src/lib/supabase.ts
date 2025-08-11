// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!url) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
if (!key) throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY");

export const supabase = createClient(url, key, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
