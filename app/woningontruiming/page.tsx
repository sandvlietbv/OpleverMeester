import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Woningontruiming | Leeg, netjes en correct opgeleverd",
  description: "Woningontruiming nodig? OpleverMeester regelt leeghalen, afvoer, schoonmaak en afgesproken herstelpunten vanuit één aanspreekpunt in Noord-Nederland.",
  alternates: { canonical: "/woningontruiming" },
};

const JSON_LD = { "@context":"https://schema.org", "@type":"Service", name:"Woningontruiming", serviceType:"Woning leeghalen en opleverklaar maken", provider:{"@type":"LocalBusiness",name:"OpleverMeester",url:"https://oplevermeester.nl"}, areaServed:[{"@type":"AdministrativeArea",name:"Groningen"},{"@type":"AdministrativeArea",name:"Friesland"},{"@type":"AdministrativeArea",name:"Drenthe"}], url:"https://oplevermeester.nl/woningontruiming" };

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(JSON_LD)}} />
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Woningontruiming</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Van volle woning naar leeg, netjes en klaar voor de volgende stap.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">OpleverMeester regelt het leeghalen van de woning en, waar afgesproken, afvoer, schoonmaak en kleine herstelpunten. Eén aanspreekpunt voor het hele traject.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Start intake</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Leeghalen","Meubels, spullen en restmateriaal volgens afspraak verwijderen."],["Afvoer","Afvoer organiseren en waar mogelijk materialen gescheiden verwerken."],["Opleveren","Schoonmaak en afgesproken herstelpunten meenemen richting overdracht."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><p className="text-sm font-semibold text-orange">Wanneer dit speelt</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Een woning moet leeg door verhuizing, overlijden, verkoop of einde huur.</h2><p className="mt-4 leading-relaxed text-muted">De reden verschilt, maar het praktische probleem is hetzelfde: er moet overzicht komen, spullen moeten weg of apart gehouden worden en de woning moet volgens afspraak worden achtergelaten. We starten bij de echte situatie en bouwen daar de uitvoering omheen.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/huis-leeghalen-na-overlijden" className="font-semibold text-navy hover:text-orange">Na overlijden →</Link><Link href="/huurwoning-opleveren" className="font-semibold text-navy hover:text-orange">Huurwoning opleveren →</Link><Link href="/woningontruiming-groningen" className="font-semibold text-navy hover:text-orange">Groningen →</Link></div></div></section>
      <Contact />
    </main>
  </>;
}
