import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Ban,
  Check,
  CircleDollarSign,
  Eye,
  FileText,
  LockKeyhole,
  ScanFace,
  Scissors,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { PLAY_URL, SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const blueprintFeatures = [
  "Your visual archetype and north star",
  "Three signature features in plain language",
  "Face measurements with useful context",
  "Your personal Visual Impact Profile",
  "A prioritized three-move improvement plan",
  "Hair, eyebrow and face-framing direction",
  "A brief you can take to your stylist or barber",
  "Six shareable Blueprint sheets",
];

const faqs = [
  [
    "Does Visual.Life upload my face photo?",
    "No. Your selected photo and facial measurements are processed for the analysis on your Android device. The source photo is not uploaded to Visual.Life and is not stored by the app after the session.",
  ],
  [
    "Is this an attractiveness score?",
    "No. Visual.Life does not rank beauty or attractiveness. It explains visible proportions and turns them into practical, gender-neutral styling direction.",
  ],
  [
    "What is free and what is paid?",
    "The initial private face scan and one signature insight are free. Each complete Visual Blueprint is a separate one-time in-app purchase. There is no subscription.",
  ],
  [
    "Will I keep a purchased Blueprint?",
    "A purchased Blueprint is stored locally in the app and can be reopened unless you delete it, clear the app data or uninstall the app. You can also save its six infographic sheets to your Photos library.",
  ],
  [
    "Is the result medical or biometric identification?",
    "No. Visual.Life is an informational styling tool. It does not diagnose health conditions, verify identity or perform facial recognition against a database.",
  ],
  [
    "Which phones are supported?",
    "Visual.Life is designed for compatible 64-bit Android devices running Android 11 or later. Device availability is shown directly on Google Play.",
  ],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />

      <section className="site-shell grid min-h-[calc(100vh-6rem)] items-center gap-16 pb-24 pt-10 lg:grid-cols-[1.02fr_.98fr] lg:pb-32 lg:pt-16">
        <div className="relative z-10">
          <div className="eyebrow mb-7"><Sparkles /> Built around your features—not trends</div>
          <h1 className="max-w-3xl text-[clamp(4rem,10vw,8.5rem)] font-black leading-[.78] tracking-[-.085em]">
            Your face.<br /><span className="text-lime-stroke">Decoded.</span>
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-relaxed text-soft md:text-xl">
            Map 400+ facial points privately on your Android phone, then turn your proportions into a clear haircut and grooming strategy.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PlayButton label="Find my Blueprint" />
            <a
              href="#how-it-works"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 rounded-full border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10")}
            >
              See how it works
            </a>
          </div>
          <p className="mt-5 text-sm text-white/60">Free face scan · One-time Blueprint purchase · No subscription</p>
        </div>

        <div className="relative mx-auto w-full max-w-[640px] lg:mx-0">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="relative rotate-[2deg] overflow-hidden rounded-[2.2rem] border border-lime/25 bg-lime p-3 shadow-[0_40px_120px_rgba(0,0,0,.45)] transition-transform duration-500 hover:rotate-0">
            <Image
              src="/visual-life-feature.png"
              width={1024}
              height={500}
              alt="Visual.Life — Your face decoded. Your private styling blueprint."
              className="h-auto w-full rounded-[1.55rem]"
              priority
            />
          </div>
          <div className="absolute -bottom-8 -left-4 grid w-[min(94%,430px)] grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-center shadow-2xl backdrop-blur-xl sm:-left-10">
            <TrustStat icon={<ScanFace />} value="400+" label="face points" />
            <TrustStat icon={<LockKeyhole />} value="On-device" label="private analysis" />
            <TrustStat icon={<Sparkles />} value="Personal" label="style strategy" />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-cream py-24 text-ink sm:py-32">
        <div className="site-shell">
          <SectionIntro eyebrow="Simple by design" title="One photo. Three steps. A clearer direction." copy="No account setup, no profile-building and no endless questionnaire. Visual.Life turns one suitable photo into useful styling context." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <StepCard number="01" icon={<Eye />} title="Choose a photo" copy="Select a clear, front-facing photo with neutral lighting. Android’s system picker gives access only to the image you choose." />
            <StepCard number="02" icon={<ScanFace />} title="Map your proportions" copy="Bundled models examine facial landmarks and visible proportions directly on your phone." />
            <StepCard number="03" icon={<WandSparkles />} title="Get your strategy" copy="Receive a free scan summary, then choose whether to unlock your complete personal Blueprint." />
          </div>
        </div>
      </section>

      <section id="blueprint" className="relative py-24 sm:py-32">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="site-shell relative grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <SectionIntro eyebrow="The complete Blueprint" title="Advice you can actually use." copy="Not a list of raw numbers. Your Blueprint connects the measurements, explains why each recommendation fits and tells you what to do first." dark />
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {blueprintFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed text-white/75">
                  <Check className="mt-0.5 size-5 shrink-0 text-lime" /> {feature}
                </li>
              ))}
            </ul>
            <div className="mt-9"><PlayButton label="Build my Blueprint" /></div>
          </div>
          <BlueprintPreview />
        </div>
      </section>

      <section id="privacy" className="bg-lime py-24 text-ink sm:py-32">
        <div className="site-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="eyebrow border-forest/20 bg-forest/10 text-forest"><ShieldCheck /> Private by design</div>
            <h2 className="mt-7 max-w-4xl text-[clamp(3.25rem,7vw,6.75rem)] font-black leading-[.86] tracking-[-.075em]">Your face is not our data.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-forest-deep/75">
              The analysis happens on your phone. Visual.Life does not operate a face database, does not create an account and does not use your result for advertising or behavioral profiling.
            </p>
            <Link href="/privacy" className="mt-7 inline-flex items-center gap-2 font-extrabold text-forest underline decoration-2 underline-offset-4">
              Read the full privacy policy <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="privacy-stack">
            <PrivacyRow icon={<LockKeyhole />} title="Photo stays on-device" copy="Your selected source photo is not uploaded to Visual.Life." />
            <PrivacyRow icon={<Ban />} title="No account or ad profile" copy="No names, sign-in, advertising ID or face database." />
            <PrivacyRow icon={<FileText />} title="You control saved results" copy="Blueprint text stays locally in the app until you delete it or remove the app data." />
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 text-ink sm:py-32">
        <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <SectionIntro eyebrow="Made for real decisions" title="Walk into your next appointment prepared." copy="Use the Blueprint as a decision tool—not a command. Show the stylist brief, discuss what suits your hair and maintenance routine, and leave with a shared direction." />
          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard icon={<Scissors />} title="Stylist-ready brief" copy="Translate the recommendation into clear language your barber or stylist can adapt." />
            <FeatureCard icon={<Sparkles />} title="Gender-neutral guidance" copy="Advice follows visible proportions and your preferences, not stereotypes." />
            <FeatureCard icon={<CircleDollarSign />} title="No subscription" copy="Your free scan stays free. Each complete Blueprint is one clearly priced purchase." />
            <FeatureCard icon={<ShieldCheck />} title="No beauty ranking" copy="Visual.Life explains proportion and framing. It never scores attractiveness." />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b1d00] py-24 sm:py-32">
        <div className="site-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <SectionIntro eyebrow="Before you ask" title="Straight answers. No fine-print surprises." copy="The important details about privacy, purchases and what Visual.Life is—and is not." dark />
          <Accordion className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.04] px-5 sm:px-8">
            {faqs.map(([question, answer]) => (
              <AccordionItem key={question} value={question} className="border-white/10">
                <AccordionTrigger className="py-6 text-base font-extrabold text-white hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-sm leading-relaxed text-white/65">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden bg-coral py-24 text-ink sm:py-32">
        <div className="cta-ring" aria-hidden="true" />
        <div className="site-shell relative text-center">
          <p className="text-xs font-black uppercase tracking-[.18em] text-forest">Your look. Your logic.</p>
          <h2 className="mx-auto mt-5 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[.82] tracking-[-.08em]">Stop guessing.<br />Start with your face.</h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-forest-deep/75">Download Visual.Life on Android and turn one private scan into a styling strategy you can use today.</p>
          <div className="mt-9 flex justify-center"><PlayButton label="Get Visual.Life" dark /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PlayButton({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <a href={PLAY_URL} className={cn(buttonVariants({ size: "lg" }), "h-14 rounded-full px-7 text-base font-extrabold", dark ? "play-button-dark" : "play-button-lime shadow-[0_10px_30px_rgba(223,255,63,.20)]")}>
      {label} <ArrowUpRight />
    </a>
  );
}

function TrustStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return <div className="bg-forest-deep/75 px-2 py-4"><span className="mx-auto mb-2 block w-fit text-lime">{icon}</span><strong className="block text-xs text-white sm:text-sm">{value}</strong><span className="text-[10px] text-white/55 sm:text-xs">{label}</span></div>;
}

function SectionIntro({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy: string; dark?: boolean }) {
  return <div><p className={cn("text-xs font-black uppercase tracking-[.18em]", dark ? "text-lime" : "text-leaf")}>{eyebrow}</p><h2 className="mt-4 max-w-4xl text-[clamp(2.8rem,6vw,5.75rem)] font-black leading-[.9] tracking-[-.07em]">{title}</h2><p className={cn("mt-6 max-w-2xl text-lg leading-relaxed", dark ? "text-white/60" : "text-[#526b38]")}>{copy}</p></div>;
}

function StepCard({ number, icon, title, copy }: { number: string; icon: React.ReactNode; title: string; copy: string }) {
  return <div className="group rounded-[1.75rem] border border-[#dce8b8] bg-white p-7 transition-transform duration-300 hover:-translate-y-1"><div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-lime text-forest">{icon}</span><span className="text-4xl font-black tracking-[-.08em] text-[#dce8b8]">{number}</span></div><h3 className="mt-10 text-2xl font-black tracking-[-.04em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#5b7043]">{copy}</p></div>;
}

function FeatureCard({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return <div className="rounded-[1.75rem] border border-[#dce8b8] bg-[#f4f9e8] p-7"><span className="text-leaf">{icon}</span><h3 className="mt-9 text-xl font-black tracking-[-.035em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#5b7043]">{copy}</p></div>;
}

function PrivacyRow({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return <div className="flex gap-5 rounded-[1.5rem] border border-forest/10 bg-cream/85 p-6 shadow-[0_16px_50px_rgba(40,85,0,.08)]"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-forest text-lime">{icon}</span><div><h3 className="font-black tracking-[-.03em]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-forest-deep/65">{copy}</p></div></div>;
}

function BlueprintPreview() {
  return (
    <div className="mx-auto w-full max-w-[560px] rounded-[2.5rem] border border-lime/20 bg-[#f7ffd4] p-4 text-ink shadow-[0_45px_120px_rgba(0,0,0,.35)] sm:p-7">
      <div className="flex items-center justify-between border-b border-forest/10 pb-5"><div><p className="text-[10px] font-black uppercase tracking-[.16em] text-leaf">Visual Blueprint</p><h3 className="mt-1 text-2xl font-black tracking-[-.05em]">Balanced Face Shape</h3></div><span className="rounded-full bg-lime px-3 py-1 text-xs font-black">Private scan</span></div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <PreviewTile label="North star" value="Create controlled direction above the forehead." accent />
        <PreviewTile label="Signature feature" value="Jaw and cheekbones are well matched." />
        <PreviewTile label="Priority 01" value="Keep both sides visually neat." />
        <PreviewTile label="Stylist brief" value="A practical direction you can copy and share." />
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-forest-deep p-4 text-white"><Scissors className="size-5 text-lime" /><p className="text-xs leading-relaxed text-white/70"><strong className="text-white">Built for action.</strong> Every recommendation includes the reason behind it.</p></div>
    </div>
  );
}

function PreviewTile({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div className={cn("min-h-36 rounded-2xl p-5", accent ? "bg-lime" : "border border-forest/10 bg-white")}><p className="text-[10px] font-black uppercase tracking-[.14em] text-leaf">{label}</p><p className="mt-7 text-sm font-bold leading-snug">{value}</p></div>;
}
