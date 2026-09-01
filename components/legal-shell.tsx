import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function LegalShell({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="bg-forest-deep text-white"><SiteHeader compact /></div>
      <section className="legal-hero">
        <div className="site-shell py-16 sm:py-24">
          <p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-forest">{eyebrow}</p>
          <h1 className="max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-black leading-[.88] tracking-[-.07em]">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#48642d]">{intro}</p>
          <p className="mt-5 text-sm font-bold text-forest">Last updated {updated}</p>
        </div>
      </section>
      <article className="legal-copy site-shell py-14 sm:py-20">{children}</article>
      <SiteFooter />
    </main>
  );
}
