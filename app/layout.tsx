import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import AnalyticsConsent from "../components/AnalyticsConsent";
import UrgentCallDock from "../components/UrgentCallDock";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oplevermeester.nl"),
  title: {
    default: "Woningontruiming & opleveren in Noord-Nederland | OpleverMeester",
    template: "%s | OpleverMeester",
  },
  description: "Woning of bedrijfspand ontruimen en opleverklaar maken in Groningen, Friesland en Drenthe. Start de intake of bel direct met OpleverMeester.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Woningontruiming & opleveren in Noord-Nederland | OpleverMeester",
    description: "Van woningontruiming tot opleverklaar maken. Eén aanspreekpunt in Groningen, Friesland en Drenthe.",
    url: "https://www.oplevermeester.nl",
    siteName: "OpleverMeester",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "OpleverMeester" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="nl" className={`${inter.variable} ${GeistSans.variable}`}><body className="font-sans antialiased">{children}<UrgentCallDock /><AnalyticsConsent /></body></html>;
}
