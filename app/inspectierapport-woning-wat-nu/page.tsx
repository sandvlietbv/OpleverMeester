import type { Metadata } from "next";
import Link from "next/link";
import OpleverpuntenPlan from "@/components/OpleverpuntenPlan";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Inspectierapport gekregen? Regel wat nog moet gebeuren",
  description: "Inspectie gehad en staan er nog punten open voordat u de sleutels inlevert? Maak direct een praktisch uitvoeringsplan en leg de uitvoering voor aan OpleverMeester.",
  alternates: { canonical: "/inspectierapport-woning-wat-nu" },
  openGraph: {
    title: "Inspectierapport gekregen? | OpleverMeester",
    description: "Van openstaande punten na de woninginspectie naar een praktisch plan voor de eindinspectie en sleuteloverdracht.",
    url: "https://oplevermeester.nl/inspectierapport-woning-wat-nu",
    type: "website",
    locale: "nl_NL",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Openstaande punten na woninginspectie uitvoeren",
  serviceType: "Woning opleverklaar maken na voorinspectie",
  provider: { "@type": "LocalBusiness", name: "OpleverMeester", url: "https://oplevermeester.nl" },
  areaServed: ["Groningen", "Friesland", "Drenthe"],
  url: "https://oplevermeester.nl/inspectierapport-woning-wat-nu",
};

export default function InspectierapportWoningPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold tracking-tight text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#opleverplan" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-light">Bekijk wat er nog moet gebeuren</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Na de woninginspectie</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Er moeten nog dingen gebeuren vóór u de sleutels kunt inleveren?</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">Heeft u na de woninginspectie een inspectierapport of lijst met punten gekregen? Zet hieronder wat er nog moet gebeuren. U krijgt direct een duidelijke werklijst. Wilt u het niet zelf regelen, dan kunt u de uitvoering meteen aan OpleverMeester voorleggen.</p>
        <a href="#opleverplan" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white hover:bg-orange-light">Bekijk wat er nog moet gebeuren →</a>
      </div></section>

      <section className="bg-surface-light py-12 md:py-16"><div className="container-om max-w-5xl grid gap-5 md:grid-cols-3">
        {[["Inspectie gehad", "U heeft al gehoord of gelezen welke punten nog openstaan."],["Eindinspectie komt eraan", "De woning moet vóór de afgesproken datum klaar zijn voor controle en overdracht."],["Niet alles zelf doen", "Leeghalen, afvoer, schoonmaak en afgesproken kleine herstelpunten kunnen in één traject worden georganiseerd."]].map(([title,body]) => <div key={title} className="rounded-om border border-surface-mid bg-white p-6"><h2 className="font-display text-xl font-semibold text-navy">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{body}</p></div>)}
      </div></section>

      <OpleverpuntenPlan />

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl">
        <p className="text-sm font-semibold text-orange">Wat gebeurt er daarna?</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">Van lijst met punten naar een woning die klaar is voor de volgende stap.</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">Het inspectierapport of de lijst van uw verhuurder blijft leidend voor wat is afgesproken. OpleverMeester geeft daar geen juridische beoordeling over. Wij helpen juist met de praktische kant: duidelijk krijgen wat nog openstaat en, als u dat wilt, de werkzaamheden organiseren richting de afgesproken opleverdatum.</p>
        <p className="mt-5 text-sm text-muted">Nog vóór de inspectie en zoekt u algemene informatie over het opleveren van een huurwoning? <Link href="/huurwoning-opleveren" className="font-semibold text-navy underline decoration-orange underline-offset-4">Bekijk huurwoning opleveren</Link>.</p>
      </div></section>

      <Contact />
    </main>
    <footer className="border-t border-surface-mid bg-white py-8"><div className="container-om flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between"><p>© OpleverMeester</p><Link href="/" className="font-medium text-navy hover:text-orange">Terug naar homepage</Link></div></footer>
  </>;
}
