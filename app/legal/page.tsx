import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Company, consumer information and legal notices for Visual.Life.",
};

export default function LegalPage() {
  return (
    <LegalShell eyebrow="Legal notice" title="The company behind Visual.Life." intro="Company identification, contact details, consumer dispute information and important notices for this website and the Visual.Life Android app." updated="1 September 2026">
      <h2>Service provider</h2>
      <p><strong>mareke solutions s.r.o.</strong><br />Korunní 2569/108b<br />101 00 Prague 10 – Vinohrady<br />Czech Republic</p>
      <p>Company identification number (IČO): <strong>29415675</strong><br />Registered in the Commercial Register maintained by the Municipal Court in Prague, section C, file 205375.</p>
      <p>Email: <a href="mailto:support@visual.life">support@visual.life</a><br />Data box ID: 6xiqqsg</p>

      <h2>App distribution and purchases</h2>
      <p>Visual.Life is distributed through Google Play. This website does not directly process payments or sell digital content. In-app purchases are offered and processed through Google Play at the localized price displayed before purchase.</p>

      <h2>Alternative dispute resolution</h2>
      <p>If a consumer dispute cannot be resolved directly, consumers may contact the competent alternative dispute-resolution body:</p>
      <p><strong>Czech Trade Inspection Authority</strong><br />Central Inspectorate – ADR Department<br />Gorazdova 1969/24<br />120 00 Prague 2, Czech Republic<br />Email: adr@coi.gov.cz<br /><a href="https://coi.gov.cz/en/information-about-adr/" rel="noreferrer">Information about ADR</a></p>

      <h2>Intellectual property</h2>
      <p>Unless otherwise stated, the Visual.Life name, branding, interface, website copy, graphics and original software are owned by mareke solutions s.r.o. Third-party names and technologies remain the property of their respective owners. Android and Google Play are trademarks of Google LLC.</p>

      <h2>Website information</h2>
      <p>We make reasonable efforts to keep this website accurate and available. Product availability, device compatibility, prices and features may change. The current information shown inside Google Play and the app takes precedence for a specific transaction.</p>

      <h2>No professional advice</h2>
      <p>Visual.Life provides general, informational styling guidance. It is not medical, dermatological, psychological, legal or financial advice; it does not identify people and does not assess attractiveness. See the <Link href="/terms">Terms of Use</Link> for the complete product disclaimer.</p>

      <h2>External links</h2>
      <p>Links to Google Play, regulators and third-party policies are provided for convenience. We do not control external websites and are not responsible for their content, availability or privacy practices.</p>
    </LegalShell>
  );
}
