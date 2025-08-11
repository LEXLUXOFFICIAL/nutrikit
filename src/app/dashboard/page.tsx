"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [email, setEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const user = data.user;
      if (!user) window.location.href = "/login";
      else setEmail(user.email ?? null);
      setChecking(false);
    });
  }, []);

  if (checking) return <p className="py-10">Checking session…</p>;
  if (!email) return null;

  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-[var(--nk-muted)]">Signed in as {email}</p>
    </section>
  );
}
