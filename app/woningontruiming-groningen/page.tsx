import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Woningontruiming Groningen | Vanaf €595 incl. btw",
  description: "Woning laten ontruimen in Groningen? OpleverMeester werkt vanuit Groningen en regelt leeghalen, afvoer en opleverklaar maken vanuit één aanspreekpunt.",
  alternates: { canonical: "/woningontruiming-groningen" },
  openGraph: {
    title: "Woningontruiming Groningen | OpleverMeester",
    description: "Woningontruiming en opleverklaar maken in Groningen en omliggende plaatsen.",
    url: "https://www.oplevermeester.nl/woningontruiming-groningen",
    type: "website",
    locale: "nl_NL",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Woningontruiming Groningen",
  serviceType: "Woningontruiming en opleverklaar maken",
  provider: {
    "@type": "LocalBusiness",
    name: "OpleverMeester",
    url: "https://www.oplevermeester.nl",
    telephone: "+31645316851",
  },
  areaServed: { "@type": "City", name: "Groningen" },
  url: "https://www.oplevermeester.nl/woningontruiming-groningen",
};

export default function WoningontruimingGroningenPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
    <Header />
    <main>
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container-om max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Woningontruiming Groningen · lokaal aanspreekpunt</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Woning leeg en correct opleveren in Groningen.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">OpleverMeester is gevestigd in Groningen. Moet een woning leeg vanwege verhuizing, overlijden, verkoop of einde huur, dan kijken we eerst naar de woning, bereikbaarheid en deadline en maken daar één opleverplan van.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#intake" className="rounded-om bg-orange px-7 py-3.5 font-semibold text-white hover:bg-orange-light">Start intake</a><a href="tel:+31645316851" className="rounded-om border border-white/25 px-7 py-3.5 font-semibold text-white">Bel 06 45 31 68 51</a></div>
          <p className="mt-4 text-sm text-white/55">Indicatieve projectprijzen beginnen vanaf €595 incl. btw.</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-om grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-sm font-semibold text-orange">Groningen in de praktijk</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">Bereikbaarheid telt mee in de planning.</h2><p className="mt-4 leading-relaxed text-muted">Een appartement in de stad vraagt een andere aanpak dan een eengezinswoning in een omliggende plaats. Daarom vragen we in de intake naar verdieping, lift, oppervlakte, hoeveelheid inboedel en de opleverdatum.</p></div>
          <div className="grid gap-5 md:grid-cols-2">{[
            ["Stad Groningen", "Bij appartementen, bovenwoningen en woningen met beperkte laadruimte nemen we toegang en loopafstand direct mee in de inschatting."],
            ["Haren & Hoogezand", "Bij een verhuizing of einde huur kunnen leeghalen, afvoer en schoon opleveren in één traject worden gecombineerd."],
            ["Winsum & omliggende dorpen", "Ook buiten de stad begint de planning bij omvang, bereikbaarheid en wat er bij overdracht echt gereed moet zijn."],
            ["Delfzijl & Eemsdelta", "Een vaste einddatum of sleuteloverdracht? Geef die meteen door zodat we eerst de haalbaarheid beoordelen."],
          ].map(([title, body]) => <article key={title} className="rounded-om border border-surface-mid bg-surface-light p-6"><h3 className="font-display text-lg font-semibold text-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-5xl"><p className="text-sm font-semibold text-orange">Wat kan in één opdracht</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Niet alleen leeghalen, maar toewerken naar overdracht.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Woning en berging leeghalen","Inboedel en restmateriaal afvoeren","Afgesproken vloeren of losse onderdelen verwijderen","Kleine herstelpunten organiseren","Bezemschoon of verder schoon opleveren","Planning en eindcontrole vanuit één aanspreekpunt"].map((item)=><div key={item} className="rounded-om border border-surface-mid bg-white p-5 text-sm font-medium text-navy">{item}</div>)}</div><p className="mt-6 text-sm text-muted">Wilt u eerst weten welke prijsrichting past? <Link href="/kosten-woningontruiming" className="font-semibold text-navy underline decoration-orange underline-offset-4">Bekijk de projectprijzen</Link>.</p></div></section>

      <Contact />
    </main>
    <Footer />
  </>;
}
