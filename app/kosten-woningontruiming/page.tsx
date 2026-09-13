import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kosten woningontruiming | Vanaf €440 excl. btw",
  description: "Wat kost een woningontruiming? Bekijk projectprijzen vanaf €440 exclusief btw (€532,40 inclusief btw voor consumenten) en krijg via de intake een indicatie op basis van uw situatie.",
  alternates: { canonical: "/kosten-woningontruiming" },
};

const tiers = [
  ["Compacte opdracht", "vanaf €440 excl. btw", "€532,40 incl. btw", "Beperkte ontruiming, enkele opleverpunten of een kleine ruimte."],
  ["Standaard opdracht", "vanaf €880 excl. btw", "€1.064,80 incl. btw", "Een normale woning of appartement met meerdere werkzaamheden."],
  ["Uitgebreide opdracht", "vanaf €1.320 excl. btw", "€1.597,20 incl. btw", "Een grotere woning, meer inboedel of meerdere opleverwerkzaamheden."],
  ["Meerdaagse opdracht", "vanaf €1.760 excl. btw", "€2.129,60 incl. btw", "Grotere of complexere oplevering met extra inzet, bereikbaarheid of afvoer."],
];

export default function Page() {
  return <>
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex min-h-16 items-center justify-between gap-4 py-3"><Link href="/" className="font-display text-lg font-semibold text-navy">Oplever<span className="text-orange">Meester</span></Link><div className="flex items-center gap-3"><a href="tel:+31645316851" className="hidden text-sm font-semibold text-navy sm:inline">06 45 31 68 51</a><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Kosten woningontruiming</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Een duidelijke prijsrichting vóór u beslist.</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">We werken met projectprijzen. Onze basis is exclusief btw. Voor particuliere klanten tonen we direct ook de prijs inclusief 21% btw. Via de intake maken we de indicatie specifieker voor woning, hoeveelheid inboedel, bereikbaarheid en planning.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Bereken mijn indicatie</a></div></section>

      <section className="bg-white py-16 md:py-20"><div className="container-om max-w-6xl"><p className="text-sm font-semibold text-orange">Richtprijzen</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Projectprijzen exclusief btw, met consumentenprijs erbij.</h2><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{tiers.map(([t,ex,inc,b])=><article key={t} className="rounded-om border border-surface-mid p-6"><p className="text-sm font-semibold text-orange">{t}</p><p className="mt-2 font-display text-2xl font-semibold text-navy">{ex}</p><p className="mt-1 text-sm font-semibold text-muted">{inc}</p><p className="mt-3 text-sm leading-relaxed text-muted">{b}</p></article>)}</div><p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">Deze bedragen zijn prijsankers, geen offerte. Afvoer, stortkosten, materialen, specialistische werkzaamheden en de exacte omvang kunnen de uiteindelijke projectprijs beïnvloeden. Dat maken we vóór akkoord duidelijk.</p></div></section>

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-5xl"><p className="text-sm font-semibold text-orange">Wat bepaalt de prijs?</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">De echte situatie blijft leidend.</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{[["Omvang en inhoud","Aantal ruimtes, oppervlakte, hoeveelheid inboedel en wat behouden moet blijven."],["Bereikbaarheid","Verdieping, lift, loopafstand, parkeermogelijkheid en toegang tot de woning."],["Afvoer en materialen","Hoeveel moet worden afgevoerd en welke materialen vragen aparte verwerking."],["Opleverwerk","Schoonmaak, verwijderen van onderdelen en afgesproken kleine herstelpunten."],["Planning","De overdrachtsdatum bepaalt hoe we de uitvoering moeten organiseren."],["Combineren","Door werkzaamheden te bundelen ontstaat één projectprijs en één aanspreekpunt."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid bg-white p-6"><h3 className="font-display text-lg font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></div></section>
      <Contact />
    </main>
    <Footer />
  </>;
}
