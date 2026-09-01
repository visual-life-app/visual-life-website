import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Visual.Life protects photos, facial measurements, app results and website visitor data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Privacy policy"
      title="Your face is not our data."
      intro="This policy explains what happens to information when you use the Visual.Life Android app, visit this website or contact support. The short version: face analysis happens on your device and Visual.Life does not receive your selected photo or facial measurements."
      updated="1 September 2026"
    >
      <div className="legal-callout"><p><strong>Controller:</strong> mareke solutions s.r.o., company ID 29415675, Korunní 2569/108b, 101 00 Prague 10, Czech Republic. Privacy contact: <a href="mailto:support@visual.life">support@visual.life</a>.</p></div>

      <h2>1. Information processed inside the app</h2>
      <h3>Selected photo and facial measurements</h3>
      <p>When you choose a photo, Visual.Life temporarily processes it on your Android device to detect facial landmarks, evaluate visible proportions and generate a result. The selected photo and derived facial measurements are not sent to Visual.Life, are not added to a face database and are not used to identify you. The app does not keep the selected source photo after the active session.</p>
      <h3>Locally saved Blueprint data</h3>
      <p>If you purchase a Blueprint, its written result and the Google Play purchase token are stored in Visual.Life’s private storage on your device so the Blueprint can be reopened. The developer does not receive this locally stored content. Android cloud backup is disabled for the app’s private data.</p>
      <h3>Saving and sharing</h3>
      <p>Only after you request it, Visual.Life can create a result card or Blueprint sheets. Saving places the requested images in your device’s Photos storage. Sharing gives the files to Android’s system share sheet and the recipient or service you select. Shared or saved copies are then controlled by you, your device and the destination service.</p>

      <h2>2. Google services used by the app</h2>
      <h3>MediaPipe</h3>
      <p>Visual.Life uses Google MediaPipe for on-device face landmark analysis. Google states that MediaPipe does not send image input to Google servers. Google also states that MediaPipe may process limited performance and utilization metrics to maintain, debug and improve the SDK. Those technical metrics do not include your selected photo or facial measurements. See the <a href="https://developers.google.com/edge/mediapipe/solutions/tasks" rel="noreferrer">MediaPipe privacy notice</a>.</p>
      <h3>Google Play Billing</h3>
      <p>Purchases are processed by Google Play. Google may process account, payment, transaction, device and diagnostic information under its own terms. Visual.Life receives purchase status and a purchase token required to unlock and preserve the purchased Blueprint locally. Visual.Life does not receive your full payment-card details.</p>

      <h2>3. Website data</h2>
      <p>This website has no account, contact form, advertising trackers or optional analytics script. It does not set marketing cookies. It is hosted by Vercel, which necessarily processes technical request information such as IP address, browser or device information, requested URL, timestamps and security logs to deliver and protect the site. Vercel describes this processing in its <a href="https://vercel.com/legal/privacy-notice" rel="noreferrer">privacy notice</a>.</p>
      <p>If privacy-friendly traffic measurement is enabled later, this policy will be updated before activation. No such website analytics integration is included in the current site source.</p>

      <h2>4. Support communications</h2>
      <p>If you email support, we process your email address, message and any information you choose to include so we can respond, investigate the issue, protect the service and comply with legal obligations. Do not attach a face photo unless support specifically asks for it and you choose to provide it.</p>

      <h2>5. Purposes and legal bases</h2>
      <ul>
        <li>To provide app functionality you request and administer purchases: performance of a contract or steps taken at your request.</li>
        <li>To answer support requests: performance of a contract and our legitimate interest in customer support.</li>
        <li>To operate and secure this website: our legitimate interest in providing a reliable and secure public service.</li>
        <li>To comply with accounting, consumer-protection and other legal duties: compliance with legal obligations.</li>
      </ul>

      <h2>6. Retention</h2>
      <p>App results remain locally on your device until you delete the Blueprint, clear the app data or uninstall Visual.Life. Saved images remain in Photos until you delete them. Support correspondence is kept only as long as needed to resolve the request, handle related legal claims and meet applicable record-keeping duties. Hosting security logs are retained under Vercel’s applicable service settings and policies.</p>

      <h2>7. Recipients and international transfers</h2>
      <p>Google provides MediaPipe and Google Play services. Vercel hosts this website. These providers may process limited information in countries outside the European Economic Area using safeguards described in their terms, such as adequacy decisions or standard contractual clauses. We do not sell personal data and do not share it for cross-context behavioral advertising.</p>

      <h2>8. Your rights</h2>
      <p>Where the GDPR or similar law applies, you may have rights to access, correct, erase, restrict or object to processing, and to receive portable data. You may also withdraw consent where processing relies on consent. Because Visual.Life does not receive your selected photo, facial measurements or locally saved Blueprint, we cannot access or retrieve that device-only content; you control it through the app and Android.</p>
      <p>Send a request to <a href="mailto:support@visual.life">support@visual.life</a>. You may also complain to your local data-protection authority or to the Czech Office for Personal Data Protection at <a href="https://uoou.gov.cz/en" rel="noreferrer">uoou.gov.cz</a>.</p>

      <h2>9. Children</h2>
      <p>Visual.Life is designed for adults and is not directed to anyone under 18. We do not knowingly seek personal data from children.</p>

      <h2>10. Security and policy changes</h2>
      <p>Visual.Life reduces privacy risk through on-device analysis, restricted Android storage and minimal data collection. No system is completely risk-free. Material policy changes will be posted here with a revised date and, when required, communicated in the app.</p>

      <h2>11. Contact</h2>
      <p>Privacy questions: <a href="mailto:support@visual.life">support@visual.life</a><br />mareke solutions s.r.o.<br />Korunní 2569/108b<br />101 00 Prague 10, Czech Republic</p>
    </LegalShell>
  );
}
