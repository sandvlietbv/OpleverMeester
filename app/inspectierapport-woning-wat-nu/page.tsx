import type { Metadata } from "next";
import Link from "next/link";
import OpleverpuntenPlan from "@/components/OpleverpuntenPlan";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Woning niet klaar na voorinspectie? Dit kunt u nu doen",
  description: "Voorinspectie gehad en staan er nog herstel- of opleverpunten open voor de eindinspectie? Zet uw inspectierapport om in een praktische werklijst en regel de uitvoering.",
  alternates: { canonical: "/inspectierapport-woning-wat-nu" },
  openGraph: {
    title: "Woning niet klaar na voorinspectie? | OpleverMeester",
    description: "Van inspectierapport en openstaande herstelpunten naar een praktisch plan voor de eindinspectie en sleuteloverdracht.",
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
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold tracking-tight text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#opleverplan" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-light">Maak uw werklijst</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Voorinspectie gehad?</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Woning nog niet klaar voor de eindinspectie?</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">Heeft u na de voorinspectie een inspectierapport of lijst met herstelpunten gekregen? Zet hieronder wat vóór de eindinspectie nog moet gebeuren. U krijgt direct een duidelijke werklijst. Wilt u het niet zelf regelen, dan kunt u de uitvoering meteen aan OpleverMeester voorleggen.</p>
        <a href="#opleverplan" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white hover:bg-orange-light">Maak mijn werklijst →</a>
      </div></section>

      <section className="bg-surface-light py-12 md:py-16"><div className="container-om max-w-5xl grid gap-5 md:grid-cols-3">
        {[["Voorinspectie gehad", "U heeft van de verhuurder gehoord of gelezen wat vóór de eindinspectie nog moet gebeuren."],["Herstelpunten staan nog open", "Bijvoorbeeld spullen verwijderen, leeghalen, schoonmaken of afgesproken kleine herstelwerkzaamheden."],["Sleutels moeten worden ingeleverd", "De openstaande punten moeten vóór de afgesproken opleverdatum zijn geregeld. Wij helpen de praktische uitvoering organiseren."]].map(([title,body]) => <div key={title} className="rounded-om border border-surface-mid bg-white p-6"><h2 className="font-display text-xl font-semibold text-navy">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{body}</p></div>)}
      </div></section>

      <OpleverpuntenPlan />

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl">
        <p className="text-sm font-semibold text-orange">Wat gebeurt er daarna?</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">Van inspectierapport naar een woning die klaar is voor de eindinspectie.</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">Het inspectierapport of de lijst van uw verhuurder blijft leidend voor wat is afgesproken. OpleverMeester geeft daar geen juridische beoordeling over. Wij helpen met de praktische kant: de openstaande punten overzichtelijk maken en, als u dat wilt, de werkzaamheden organiseren richting de afgesproken opleverdatum en sleuteloverdracht.</p>
        <p className="mt-5 text-sm text-muted">Nog vóór de voorinspectie en zoekt u algemene informatie over het opleveren van een huurwoning? <Link href="/huurwoning-opleveren" className="font-semibold text-navy underline decoration-orange underline-offset-4">Bekijk huurwoning opleveren</Link>.</p>
      </div></section>

      <Contact />
    </main>
    <footer className="border-t border-surface-mid bg-white py-8"><div className="container-om flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between"><p>© OpleverMeester</p><Link href="/" className="font-medium text-navy hover:text-orange">Terug naar homepage</Link></div></footer>
  </>;
}
