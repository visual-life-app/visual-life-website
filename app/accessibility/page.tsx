import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Visual.Life accessibility commitment and contact information.",
};

export default function AccessibilityPage() {
  return (
    <LegalShell eyebrow="Accessibility" title="Designed to be clear and usable." intro="We want Visual.Life to be understandable and operable by as many people as possible, across different devices, input methods and assistive technologies." updated="1 September 2026">
      <h2>Our approach</h2>
      <p>We aim for the website to conform to WCAG 2.2 Level AA where reasonably applicable. The site is built with semantic headings, keyboard-accessible navigation, visible focus states, descriptive links, text alternatives for meaningful images, responsive layouts and support for reduced-motion preferences.</p>

      <h2>Android app accessibility</h2>
      <p>Visual.Life aims to provide readable contrast, scalable text, clear button labels and logical screen-reader order. Some generated infographic sheets are primarily visual; the same underlying Blueprint information is also available as text inside the app.</p>

      <h2>Known limitations</h2>
      <p>Complex visual Blueprint sheets and certain third-party interfaces, including Google Play purchase screens and Android’s system share sheet, may have accessibility behavior outside our direct control. We continue to test and improve the experience.</p>

      <h2>Feedback and assistance</h2>
      <p>If you encounter a barrier, email <a href="mailto:support@visual.life?subject=Accessibility%20feedback">support@visual.life</a>. Tell us which page or app screen you were using, your device and assistive technology, and the problem you encountered. We will make reasonable efforts to respond and provide the information in an accessible alternative.</p>

      <h2>Compatibility</h2>
      <p>This website is intended for current versions of major browsers on desktop and mobile. The Android app supports compatible 64-bit devices running Android 11 or later, subject to Google Play’s device availability.</p>
    </LegalShell>
  );
}
