import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { ConsentModeDefaultsScript } from "@/components/cookies/ConsentModeDefaultsScript";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { CookieConsentUI } from "@/components/cookies/CookieConsentUI";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { StickyMobileCTA } from "@/components/UI";
import { SITE_URL, siteConfig } from "@/lib/site-config";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Future Earnings Expert Witness | Economic Damages (UK)",
    template: "%s | Future Earnings Expert",
  },
  description: siteConfig.description,
  openGraph: { type: "website", locale: "en_GB", siteName: siteConfig.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${sourceSerif.variable}`}>
      <body className={`${dmSans.className} flex min-h-screen flex-col`}>
        <ConsentModeDefaultsScript />
        <CookieConsentProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-copper focus:p-4 focus:text-white"
          >
            Skip to main content
          </a>
          <Header />
          <MobileNav />
          <main id="main" className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
          <StickyMobileCTA />
          <CookieConsentUI />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
