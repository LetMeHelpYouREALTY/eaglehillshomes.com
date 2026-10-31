import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "@/components/layout/site-footer";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
        <SiteFooter />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
        />
        <VercelAnalytics />
        <VercelSpeedInsights />
      </body>
    </html>
  );
}
