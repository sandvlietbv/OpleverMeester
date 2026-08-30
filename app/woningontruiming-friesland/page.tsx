import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Woningontruiming Friesland | OpleverMeester",
  description: "Woningontruiming in Friesland? OpleverMeester helpt met leeghalen, afvoer, schoonmaak en opleverklaar maken vanuit één aanspreekpunt.",
  alternates: { canonical: "/woningontruiming-friesland" },
};

const JSON_LD = { "@context":"https://schema.org", "@type":"Service", name:"Woningontruiming Friesland", serviceType:"Woningontruiming en oplevering", provider:{"@type":"LocalBusiness",name:"OpleverMeester",url:"https://oplevermeester.nl"}, areaServed:{"@type":"AdministrativeArea",name:"Friesland"}, url:"https://oplevermeester.nl/woningontruiming-friesland" };

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(JSON_LD)}} />
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Woningontruiming Friesland</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Een woning in Friesland leeg en correct opleveren.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Voor verhuizing, overlijden, verkoop of einde huur: OpleverMeester coördineert het leeghalen en de afgesproken opleverwerkzaamheden vanuit één aanspreekpunt.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Bespreek uw situatie</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Leeuwarden en omgeving","Aanvragen uit Leeuwarden en omliggende plaatsen kunnen via dezelfde intake worden beoordeeld."],["Drachten en midden Friesland","Ook hier starten we bij omvang, toegang, planning en gewenste eindstaat."],["Sneek en overige plaatsen","De exacte inzet hangt af van locatie, werkzaamheden en planning."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><p className="text-sm font-semibold text-orange">Complete oplevering</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Niet alleen spullen eruit.</h2><p className="mt-4 leading-relaxed text-muted">Waar nodig kunnen afvoer, schoonmaak en afgesproken kleine herstelpunten worden meegenomen. Zo hoeft u niet voor ieder onderdeel een andere partij te zoeken.</p><div className="mt-6"><Link href="/woningontruiming" className="font-semibold text-navy hover:text-orange">Meer over woningontruiming →</Link></div></div></section>
      <Contact />
    </main>
  </>;
}
