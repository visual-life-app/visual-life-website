import type { Metadata } from "next";
import Link from "next/link";
import { CircleHelp, CreditCard, ImageIcon, LockKeyhole, Mail, RotateCcw } from "lucide-react";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Support",
  description: "Help with Visual.Life scans, purchases, saved Blueprints, privacy and sharing.",
};

const topics = [
  { icon: <ImageIcon />, title: "Improve a scan", copy: "Use a sharp, front-facing photo with even lighting, a neutral expression and one clearly visible face." },
  { icon: <CreditCard />, title: "Purchase help", copy: "Check that Google Play is signed in, the displayed price is visible and your payment method is active." },
  { icon: <RotateCcw />, title: "Recover after interruption", copy: "Reopen Visual.Life while online to Google Play. A completed purchase should be recognized and the staged Blueprint restored." },
  { icon: <LockKeyhole />, title: "Privacy questions", copy: "Your source photo and facial measurements stay on-device. Contact us for questions about support or technical data." },
];

export default function SupportPage() {
  return (
    <LegalShell eyebrow="Support" title="Let’s get you unstuck." intro="Fast answers for the most common Visual.Life questions. If the issue remains, email us with your phone model, Android version and a short description—without attaching your face photo." updated="1 September 2026">
      <div className="grid gap-4 sm:grid-cols-2">
        {topics.map((topic) => <div className="support-card" key={topic.title}><span className="text-leaf">{topic.icon}</span><h2 className="!mt-6 text-xl">{topic.title}</h2><p>{topic.copy}</p></div>)}
      </div>

      <h2>Contact support</h2>
      <div className="legal-callout"><p className="flex items-start gap-3"><Mail className="mt-1 size-5 shrink-0 text-leaf" /><span>Email <a href="mailto:support@visual.life?subject=Visual.Life%20support">support@visual.life</a>. Include the app version, device model, Android version and what happened. Never send payment-card details.</span></p></div>

      <h2>Purchase and refund questions</h2>
      <p>Google Play processes Visual.Life purchases. The app displays the full localized price before opening the Google Play purchase sheet. Each complete Blueprint is a separate one-time purchase; there is no subscription.</p>
      <p>For payment-method problems, receipts or a Google-managed refund request, use <a href="https://support.google.com/googleplay/workflow/9813244" rel="noreferrer">Google Play support</a>. For a product problem, contact us first so we can investigate.</p>

      <h2>Saved Blueprints</h2>
      <p>Purchased Blueprint text is stored locally inside Visual.Life. Uninstalling the app, clearing its data or deleting a Blueprint removes that local copy. Images you deliberately saved to Photos remain there until you delete them separately.</p>

      <h2>Quick links</h2>
      <p className="flex flex-wrap gap-x-6 gap-y-2"><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link><Link href="/accessibility">Accessibility</Link><Link href="/legal">Company details</Link></p>

      <h2>What Visual.Life cannot do</h2>
      <p className="flex items-start gap-3"><CircleHelp className="mt-1 size-5 shrink-0 text-leaf" /><span>Visual.Life cannot identify a person, diagnose a condition, guarantee a styling outcome or recover app-only content that has already been deleted from the device.</span></p>
    </LegalShell>
  );
}
