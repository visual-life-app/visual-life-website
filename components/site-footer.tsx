import Image from "next/image";
import Link from "next/link";

const links = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Legal", "/legal"],
  ["Accessibility", "/accessibility"],
  ["Support", "/support"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1d00]">
      <div className="site-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Visual.Life home">
            <Image src="/visual-life-icon.png" width={38} height={38} alt="" className="rounded-xl" />
            <span className="text-xl font-black tracking-[-0.04em]">Visual.Life</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
            Private on-device face analysis for a more intentional haircut and grooming strategy.
          </p>
          <p className="mt-5 text-xs text-white/40">© {new Date().getFullYear()} mareke solutions s.r.o. All rights reserved.</p>
        </div>
        <nav className="flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-sm text-white/65" aria-label="Legal and support">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-lime">{label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
