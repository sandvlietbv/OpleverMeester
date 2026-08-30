import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Woningontruiming Drenthe | OpleverMeester",
  description: "Woningontruiming in Drenthe? OpleverMeester helpt met leeghalen, afvoer, schoonmaak en opleverklaar maken vanuit één aanspreekpunt.",
  alternates: { canonical: "/woningontruiming-drenthe" },
};

const JSON_LD = { "@context":"https://schema.org", "@type":"Service", name:"Woningontruiming Drenthe", serviceType:"Woningontruiming en oplevering", provider:{"@type":"LocalBusiness",name:"OpleverMeester",url:"https://oplevermeester.nl"}, areaServed:{"@type":"AdministrativeArea",name:"Drenthe"}, url:"https://oplevermeester.nl/woningontruiming-drenthe" };

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(JSON_LD)}} />
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Woningontruiming Drenthe</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Een woning in Drenthe leeg en netjes richting overdracht.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Van Assen tot Emmen en omliggende plaatsen: we starten bij de situatie, plannen wat nodig is en combineren waar passend leeghalen, afvoer, schoonmaak en afgesproken herstelpunten.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Start intake</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Assen en omgeving","Duidelijke intake op omvang, planning, bereikbaarheid en gewenste eindstaat."],["Emmen en zuidoost Drenthe","Ook bij een woning die snel leeg moet, begint het met een realistische beoordeling."],["Hoogeveen, Meppel en verder","De exacte inzet stemmen we af op locatie en werkzaamheden."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><p className="text-sm font-semibold text-orange">Eén plan</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Van leeghalen tot afgesproken opleverniveau.</h2><p className="mt-4 leading-relaxed text-muted">De opdracht hoeft niet te stoppen bij het verwijderen van inboedel. Als de situatie daarom vraagt, kunnen aanvullende opleverwerkzaamheden in hetzelfde plan worden meegenomen.</p><div className="mt-6"><Link href="/woningontruiming" className="font-semibold text-navy hover:text-orange">Meer over woningontruiming →</Link></div></div></section>
      <Contact />
    </main>
  </>;
}
