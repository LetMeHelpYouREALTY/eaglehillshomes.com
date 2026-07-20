import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { CalendlyBadge } from "@/components/calendly/CalendlyBadge";
import { CalendlyScript } from "@/components/calendly/CalendlyScript";
import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { RealScoutScript } from "@/components/realscout/RealScoutScript";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { getSiteVerificationMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Eagle Hills Homes for Sale | Summerlin Realtor Services | ${site.shortName}`,
    template: `%s | ${site.brand}`,
  },
  description: site.tagline,
  applicationName: site.brand,
  authors: [{ name: site.shortName, url: site.url }],
  creator: site.shortName,
  publisher: site.brokerage,
  category: "real estate",
  keywords: [
    "Eagle Hills Homes",
    "Eagle Hills Summerlin",
    "Eagle Hills real estate",
    "The Hills South Summerlin",
    "Summerlin luxury homes",
    "guard-gated Summerlin",
    "Dr. Jan Duffy",
    "BHHS Nevada Properties",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Eagle Hills Homes | ${site.shortName}`,
    description: site.tagline,
    url: site.url,
    siteName: site.brand,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/realty/heroes/hero-homes-for-sale.jpg",
        alt: "Eagle Hills homes in Summerlin, Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Eagle Hills Homes | ${site.shortName}`,
    description: site.tagline,
    images: ["/realty/heroes/hero-homes-for-sale.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: getSiteVerificationMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <RealScoutScript />
        <CalendlyScript />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <div className="flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CalendlyBadge
          url={site.calendlyUrl}
          text="Schedule Eagle Hills showing"
          color="#3d5544"
          textColor="#f7f5f0"
        />
      </body>
    </html>
  );
}
