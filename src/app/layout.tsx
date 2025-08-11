import "./globals.css";
import "../styles/tokens.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nutrikit",
  description: "Nutrition plans that don’t waste your time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--nk-bg)] text-[var(--nk-text)] antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <footer className="mx-auto max-w-6xl border-t p-4 text-sm text-[var(--nk-muted)]">
          © {new Date().getFullYear()} Nutrikit
        </footer>
      </body>
    </html>
  );
}
