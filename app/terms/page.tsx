import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Visual.Life Android app and website.",
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="Terms of use" title="Clear rules. Human language." intro="These terms govern the Visual.Life Android app and this website. They do not take away consumer rights that cannot legally be excluded." updated="1 September 2026">
      <div className="legal-callout"><p><strong>Provider:</strong> mareke solutions s.r.o., company ID 29415675, Korunní 2569/108b, 101 00 Prague 10, Czech Republic. Contact: <a href="mailto:support@visual.life">support@visual.life</a>.</p></div>

      <h2>1. Acceptance and eligibility</h2>
      <p>By installing or using Visual.Life, you agree to these terms. You must be at least 18 years old and legally capable of entering into a contract. If you do not agree, do not use the app.</p>

      <h2>2. What Visual.Life provides</h2>
      <p>Visual.Life uses on-device analysis of a user-selected photo to describe visible facial proportions and generate informational haircut, grooming and face-framing suggestions. A basic scan is available without charge. A complete Visual Blueprint can be unlocked through a one-time in-app purchase.</p>

      <h2>3. Important styling disclaimer</h2>
      <p>Visual.Life is an informational styling tool. It is not medical advice, diagnosis, biometric identification, identity verification, facial recognition against a database, psychological assessment or an attractiveness score. Results are generated from one image and may be affected by lighting, pose, expression, hair coverage, image quality and device capability.</p>
      <p>Recommendations are starting points, not guarantees. Hair texture, density, growth pattern, personal taste, workplace requirements and professional judgment may change what works in practice. Discuss significant styling changes with a qualified stylist or barber.</p>

      <h2>4. Your photo and permitted use</h2>
      <p>Use only a photo of yourself or a photo you are legally authorized to process. Do not use Visual.Life to analyze another person without their informed permission, to identify someone, to infer sensitive traits, to make employment, insurance, credit, housing or other high-impact decisions, or for unlawful surveillance.</p>

      <h2>5. Purchases</h2>
      <ul>
        <li>Each complete Blueprint is a separate one-time in-app purchase. Visual.Life does not offer a subscription.</li>
        <li>The exact localized price and currency are displayed in the app and confirmed by Google Play before payment.</li>
        <li>Google Play processes payment and applies its purchase, cancellation and refund procedures, subject to mandatory consumer law.</li>
        <li>A purchased Blueprint is stored locally. It may be lost if you delete it, clear the app data or uninstall the app. Save the Blueprint sheets if you need a separate copy.</li>
        <li>Consuming the Google Play product allows another Blueprint purchase; it does not cancel or invalidate the Blueprint already stored locally.</li>
      </ul>

      <h2>6. License</h2>
      <p>We grant you a personal, limited, non-exclusive, non-transferable and revocable license to use Visual.Life for lawful private purposes. You may save and share your own generated Blueprint for personal use. You may not resell the app or its output as a competing service, extract or redistribute bundled models, bypass purchase controls, reverse engineer the app except where law expressly permits it, or use the service to violate another person’s rights.</p>

      <h2>7. Intellectual property</h2>
      <p>Visual.Life, its branding, interface, text, software, analysis logic, graphics and bundled materials are owned by mareke solutions s.r.o. or its licensors and are protected by applicable intellectual-property laws. These terms do not transfer ownership.</p>

      <h2>8. Availability and updates</h2>
      <p>We may improve, update, suspend or discontinue parts of Visual.Life where reasonably necessary for security, compatibility, legal compliance or product development. Device compatibility and availability may vary. We do not promise uninterrupted or error-free operation, but mandatory statutory rights remain unaffected.</p>

      <h2>9. Liability</h2>
      <p>To the maximum extent allowed by law, Visual.Life is provided without guarantees about a particular appearance, styling outcome or commercial result. We are not responsible for decisions made solely on the basis of an automated recommendation or for third-party services selected through Android’s share sheet.</p>
      <p>Nothing in these terms excludes or limits liability where exclusion is prohibited, including liability for intent, gross negligence, injury caused by negligence, fraud or mandatory consumer rights.</p>

      <h2>10. Termination</h2>
      <p>You may stop using Visual.Life at any time by deleting locally saved Blueprints and uninstalling the app. We may restrict access when reasonably necessary to address unlawful use, security threats or material violation of these terms.</p>

      <h2>11. Governing law and disputes</h2>
      <p>These terms are governed by Czech law, without depriving consumers of mandatory protections available in their country of residence. Courts with jurisdiction under applicable law may hear disputes.</p>
      <p>Please contact <a href="mailto:support@visual.life">support@visual.life</a> first. For an unresolved consumer dispute, the competent Czech alternative dispute-resolution body is the Czech Trade Inspection Authority, Central Inspectorate – ADR Department, Gorazdova 1969/24, 120 00 Prague 2, email adr@coi.gov.cz, <a href="https://coi.gov.cz/en/information-about-adr/" rel="noreferrer">coi.gov.cz</a>.</p>

      <h2>12. Changes and contact</h2>
      <p>We may update these terms for legal, security or product reasons. Material changes will be published with a revised date. Questions can be sent to <a href="mailto:support@visual.life">support@visual.life</a>.</p>
    </LegalShell>
  );
}
