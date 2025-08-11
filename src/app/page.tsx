import Link from "next/link";

export default function Page() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold tracking-tight">Nutrition plans that actually ship results.</h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--nk-muted)]">
        Plan meals, swap foods, generate grocery lists, and track adherence. Built for coaches and their clients.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/login" className="button-primary">Get started</Link>
        <Link href="/features" className="button-outline">See features</Link>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Coach → Client workflow</h3>
          <p className="mt-2 text-[var(--nk-muted)]">Onboarding, programs, meal plans, habits, check-ins, messaging.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold">AI Nutrition Copilot</h3>
          <p className="mt-2 text-[var(--nk-muted)]">Fast planning, food swaps, smart grocery lists, Q&A.</p>
        </div>
      </div>
    </section>
  );
}
