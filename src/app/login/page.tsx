// src/app/login/page.tsx
"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="mb-6 text-2xl font-semibold">Log in / Sign up</h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        view="magic_link"                 // 👈 force email magic link only
        providers={[]}                    // no OAuth yet
        redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`}
      />
    </div>
  );
}
