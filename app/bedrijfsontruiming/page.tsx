import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Bedrijfsontruiming | Bedrijfspand leeg en opleverklaar",
  description: "Bedrijfspand, kantoor of bedrijfsruimte leegmaken en opleveren? OpleverMeester coördineert ontruiming, afvoer, schoonmaak en afgesproken opleverpunten.",
  alternates: { canonical: "/bedrijfsontruiming" },
};

const JSON_LD = { "@context":"https://schema.org", "@type":"Service", name:"Bedrijfsontruiming", serviceType:"Bedrijfspand ontruimen en opleverklaar maken", provider:{"@type":"LocalBusiness",name:"OpleverMeester",url:"https://oplevermeester.nl"}, areaServed:[{"@type":"AdministrativeArea",name:"Groningen"},{"@type":"AdministrativeArea",name:"Friesland"},{"@type":"AdministrativeArea",name:"Drenthe"}], url:"https://oplevermeester.nl/bedrijfsontruiming" };

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(JSON_LD)}} />
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Bedrijfsontruiming</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Bedrijfspand leeg en duidelijk richting overdracht.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Bij verhuizing, huurbeëindiging, herbestemming of andere bedrijfswijzigingen kan OpleverMeester de praktische regie voeren over leeghalen, afvoer, schoonmaak en afgesproken opleverpunten.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Zakelijke intake starten</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Kantoor en bedrijfsruimte","Inventaris, losse inrichting en restmateriaal volgens plan verwijderen."],["Planning rond overdracht","Werkzaamheden afstemmen op toegang, bedrijfsvoering en einddatum."],["Opleverwerk combineren","Afvoer, schoonmaak en afgesproken herstelpunten in één opdracht bundelen."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><p className="text-sm font-semibold text-orange">Voor zakelijke opdrachtgevers</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Eén aanspreekpunt voor een pand dat door moet naar de volgende fase.</h2><p className="mt-4 leading-relaxed text-muted">De exacte oplevereisen kunnen per huurovereenkomst, verhuurder of locatie verschillen. Daarom werken we vanuit de concrete opdracht en beschikbare opleverpunten, niet vanuit standaardbeloftes.</p></div></section>
      <Contact />
    </main>
  </>;
}
