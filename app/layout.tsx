import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oplevermeester.nl"),
  title: {
    default: "OpleverMeester — Elke ruimte. Zorgeloos opleverklaar.",
    template: "%s | OpleverMeester",
  },
  description:
    "OpleverMeester regelt het complete opleverproces van woningen en bedrijfspanden — ontruiming, opleverklaar maken en schoonmaak. Eén aanspreekpunt, van A tot Z.",
  keywords: [
    "woningontruiming",
    "opleverklaar maken",
    "bedrijfsruimte ontruimen",
    "opleverpartner",
    "Groningen",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OpleverMeester — Elke ruimte. Zorgeloos opleverklaar.",
    description:
      "Van woning tot bedrijfspand. Wij regelen het complete opleverproces van A tot Z.",
    url: "https://oplevermeester.nl",
    siteName: "OpleverMeester",
    locale: "nl_NL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const GA_MEASUREMENT_ID = "G-Q12VQ3YP0M";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${GeistSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </html>
  );
}
