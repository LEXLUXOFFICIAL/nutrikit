"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => { supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null)); }, []);

  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="font-semibold tracking-tight">Nutrikit</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/features" className="hover:underline">Features</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          {email ? (
            <>
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <button
                className="rounded-md border px-3 py-1.5"
                onClick={async () => { await supabase.auth.signOut(); window.location.href = "/"; }}
              >Sign out</button>
            </>
          ) : (
            <Link href="/login" className="rounded-md border px-3 py-1.5">Log in</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
