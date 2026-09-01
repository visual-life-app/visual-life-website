import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Visual.Life — Your face, decoded",
    template: "%s | Visual.Life",
  },
  description:
    "Private on-device face analysis with a personal haircut and grooming strategy. Your photo and facial measurements stay on your phone.",
  applicationName: "Visual.Life",
  category: "Beauty",
  keywords: [
    "face analysis",
    "haircut recommendations",
    "grooming strategy",
    "face shape",
    "private on-device analysis",
  ],
  authors: [{ name: "mareke solutions s.r.o." }],
  creator: "mareke solutions s.r.o.",
  publisher: "mareke solutions s.r.o.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Visual.Life",
    title: "Visual.Life — Your face, decoded",
    description: "A private styling Blueprint built around your facial proportions. Your photo stays on your phone.",
    images: [{ url: "/visual-life-feature.png", width: 1024, height: 500, alt: "Visual.Life — Your face decoded" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual.Life — Your face, decoded",
    description: "Private on-device face analysis with a personal haircut and grooming strategy.",
    images: ["/visual-life-feature.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
