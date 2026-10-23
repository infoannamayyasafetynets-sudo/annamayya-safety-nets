import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import SideFloatingContact from "@/components/shared/SideFloatingContact";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import { generateLocalBusinessSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: {
    default: "Safety Nets & Invisible Grills in Mathikere, Bangalore | Annamayya Safety Nets",
    template: "%s | Annamayya Safety Nets",
  },
  description:
    "Annamayya Safety Nets offers certified balcony safety nets, invisible grills, and ceiling cloth drying hangers in Mathikere and across Bangalore. Free site visit: +91 62810 48162.",
  keywords: [
    "safety nets Mathikere",
    "invisible grills Bangalore",
    "cloth drying hangers Bangalore",
    "balcony safety nets near me",
    "Safety Nets in Bangalore",
    "Balcony Safety Nets Mathikere",
    "Invisible Grills Mathikere",
    "Annamayya Safety Nets",
    "Child Safety Nets Bangalore",
    "Ceiling Cloth Hangers Bangalore",
    "Safety Nets Yeshwanthpur",
    "Safety Nets Malleshwaram",
    "Safety Nets Hebbal",
    "Safety Nets Yelahanka",
    "Safety Nets Jalahalli",
  ],
  metadataBase: new URL("https://annamayyasafetynets.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Safety Nets & Invisible Grills in Mathikere, Bangalore | Annamayya Safety Nets",
    description:
      "Annamayya Safety Nets offers certified balcony safety nets, invisible grills, and ceiling cloth drying hangers in Mathikere and across Bangalore. Free site visit: +91 62810 48162.",
    url: "https://annamayyasafetynets.in",
    siteName: "Annamayya Safety Nets",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Safety Nets & Invisible Grills in Bangalore - Annamayya Safety Nets",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Nets & Invisible Grills in Mathikere, Bangalore | Annamayya Safety Nets",
    description:
      "Certified balcony safety nets, SS316 invisible wire grills & ceiling cloth drying systems based in Mathikere, Bangalore. Call +91 62810 48162.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon SVG tag & Manifest */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* LCP Hero Image Preload for 0ms render delay */}
        <link
          rel="preload"
          as="image"
          href="/images/main-images/annamayya-safetynets-mathikere.webp"
          fetchPriority="high"
          type="image/webp"
        />

        {/* Search Console verification: [PENDING CLIENT VERIFICATION TOKEN] */}
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen selection:bg-[#F57C00] selection:text-white`}
      >
        {/* WCAG 2.1 AA Skip to Content Landmark */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#23272F] focus:text-white focus:rounded-xl focus:shadow-2xl font-bold text-sm"
        >
          Skip to main content
        </a>

        {/* LocalBusiness JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18532481811"
          strategy="afterInteractive"
        />
        <Script id="google-tag-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18532481811');
          `}
        </Script>

        <Navbar />
        <main id="main-content" className="flex-grow pt-[96px] sm:pt-[102px] lg:pt-[108px]">{children}</main>
        <Footer />
        <FloatingCTA />
        <SideFloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
