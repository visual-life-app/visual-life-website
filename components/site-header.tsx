import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=life.visual.app";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={cn("site-shell flex items-center justify-between gap-4", compact ? "h-20" : "h-20 lg:h-24")}>
      <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Visual.Life home">
        <Image
          src="/visual-life-icon.png"
          width={42}
          height={42}
          alt=""
          className="rounded-[13px]"
          priority
        />
        <span className="text-xl font-black tracking-[-0.04em]">Visual.Life</span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Primary navigation">
        <Link href="/#how-it-works" className="nav-link">How it works</Link>
        <Link href="/#blueprint" className="nav-link">Blueprint</Link>
        <Link href="/#privacy" className="nav-link">Privacy</Link>
        <Link href="/support" className="nav-link">Support</Link>
      </nav>
      <a
        href={PLAY_URL}
        className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full bg-lime px-4 font-extrabold text-ink hover:bg-lime/90 sm:px-5")}
      >
        <span className="hidden sm:inline">Get the app</span>
        <span className="sm:hidden">Get app</span>
        <ArrowUpRight />
      </a>
    </header>
  );
}
