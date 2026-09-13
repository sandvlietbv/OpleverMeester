import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Woningontruiming Friesland | Vanaf €440 excl. btw",
  description: "Woningontruiming in Friesland? OpleverMeester regelt leeghalen, afvoer, schoonmaak en opleverklaar maken vanuit één aanspreekpunt.",
  alternates: { canonical: "/woningontruiming-friesland" },
  openGraph: { title: "Woningontruiming Friesland | OpleverMeester", description: "Woning leeg en opleverklaar in Leeuwarden, Drachten, Sneek, Heerenveen en omgeving.", url: "https://www.oplevermeester.nl/woningontruiming-friesland", type: "website", locale: "nl_NL" },
};

const JSON_LD = { "@context":"https://schema.org", "@type":"Service", name:"Woningontruiming Friesland", serviceType:"Woningontruiming en oplevering", provider:{"@type":"LocalBusiness",name:"OpleverMeester",url:"https://www.oplevermeester.nl",telephone:"+31645316851"}, areaServed:{"@type":"AdministrativeArea",name:"Friesland"}, url:"https://www.oplevermeester.nl/woningontruiming-friesland" };

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(JSON_LD)}} />
    <Header />
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Woningontruiming Friesland</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Een woning in Friesland leeg en klaar voor overdracht.</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Van Leeuwarden en Drachten tot Sneek, Heerenveen en omliggende plaatsen: we brengen eerst omvang, bereikbaarheid en oplevereis in kaart. Daarna combineren we waar nodig leeghalen, afvoer, schoonmaak en opleverpunten in één opdracht.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#intake" className="rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Start intake</a><a href="tel:+31645316851" className="rounded-om border border-white/25 px-7 py-3.5 font-semibold text-white">Bel 06 45 31 68 51</a></div><p className="mt-4 text-sm text-white/55">Indicatieve projectprijzen beginnen vanaf €440 excl. btw (€532,40 incl. btw voor consumenten).</p></div></section>

      <section className="bg-white py-16 md:py-20"><div className="container-om max-w-6xl"><p className="text-sm font-semibold text-orange">Friesland is niet één type opdracht</p><h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold text-navy">Van stadsappartement tot woning met schuur of extra opslag.</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
        ["Leeuwarden", "Bij appartementen en woningen in de stad kijken we direct naar verdieping, lift, loopafstand en laadmogelijkheden."],
        ["Drachten", "Een normale gezinswoning kan vaak overzichtelijk worden gepland wanneer omvang, inboedel en einddatum vooraf duidelijk zijn."],
        ["Sneek", "Bij verhuizing, overlijden of einde huur kunnen meerdere werkzaamheden in één oplevertraject worden samengebracht."],
        ["Heerenveen & omgeving", "Ook buiten de grotere plaatsen nemen we bijgebouwen, bereikbaarheid en extra inboedel mee in de intake."],
      ].map(([t,b])=><article key={t} className="rounded-om border border-surface-mid p-6"><h3 className="font-display text-xl font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></article>)}</div></div></section>

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-sm font-semibold text-orange">Eén projectprijs</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">De intake bepaalt de prijsrichting.</h2><p className="mt-4 leading-relaxed text-muted">Een kleine vrijwel lege woning vraagt iets anders dan een volle woning met verdiepingen, schuur of veel afvoer. Daarom gebruiken we geen kunstmatige vaste pakketprijs voor iedere situatie.</p><Link href="/kosten-woningontruiming" className="mt-5 inline-flex font-semibold text-navy underline decoration-orange underline-offset-4">Bekijk prijsopbouw en vanafprijzen</Link></div><div className="grid gap-4 sm:grid-cols-2">{["Leeghalen en sorteren","Reguliere afvoer waar afgesproken","Schoon opleveren","Afgesproken kleine herstelpunten","Planning op de overdrachtsdatum","Eén aanspreekpunt voor het geheel"].map((x)=><div key={x} className="rounded-om border border-surface-mid bg-white p-5 text-sm font-medium text-navy">{x}</div>)}</div></div></section>
      <Contact />
    </main>
    <Footer />
  </>;
}
