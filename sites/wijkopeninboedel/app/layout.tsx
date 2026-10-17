import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wijkopeninboedel.nl"),
  title: "Spullen laten beoordelen of ophalen | WijKopenInboedel",
  description: "Spullen laten beoordelen of laten ophalen in Groningen, Friesland en Drenthe? Stuur foto's via WhatsApp en ontvang een vrijblijvend persoonlijk voorstel.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "WijKopenInboedel — Spullen beoordelen of ophalen",
    description: "Stuur foto's via WhatsApp. Persoonlijk voorstel voor verkoopbare spullen of een ophaalprijs voor oude meubels.",
    url: "https://wijkopeninboedel.nl",
    siteName: "WijKopenInboedel",
    locale: "nl_NL",
    type: "website"
  }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body>{children}</body></html>;
}
