import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Spoedontruiming | Snel duidelijkheid over wat mogelijk is",
  description: "Spoed met het leeghalen en opleveren van een woning? OpleverMeester beoordeelt snel wat nodig is en wat haalbaar is binnen uw deadline.",
  alternates: { canonical: "/spoedontruiming" },
};

const JSON_LD = { "@context":"https://schema.org", "@type":"Service", name:"Spoedontruiming", serviceType:"Spoed woningontruiming en oplevering", provider:{"@type":"LocalBusiness",name:"OpleverMeester",url:"https://oplevermeester.nl"}, areaServed:[{"@type":"AdministrativeArea",name:"Groningen"},{"@type":"AdministrativeArea",name:"Friesland"},{"@type":"AdministrativeArea",name:"Drenthe"}], url:"https://oplevermeester.nl/spoedontruiming" };

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(JSON_LD)}} />
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Spoedontruiming</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">De deadline komt dichtbij. Eerst duidelijkheid, dan handelen.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Moet een woning snel leeg voor inspectie, sleuteloverdracht, verkoop of een andere harde datum? Geef in de intake aan wat er nog moet gebeuren en wanneer het klaar moet zijn. We beoordelen daarna wat praktisch haalbaar is.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Start spoedintake</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Deadline eerst","We beginnen bij datum, toegang en wat er nog openstaat."],["Werk bundelen","Leeghalen, afvoer, schoonmaak en afgesproken herstelpunten kunnen in één plan."],["Geen loze beloftes","We beloven geen vaste 24-uurs termijn zonder de situatie eerst te kennen."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><p className="text-sm font-semibold text-orange">Wat helpt bij spoed</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Stuur meteen de belangrijkste informatie mee.</h2><p className="mt-4 leading-relaxed text-muted">Adres, omvang van de woning, gewenste einddatum, bereikbaarheid, foto’s of inspectiepunten en wat absoluut behouden moet blijven geven snel een realistischer beeld van de opdracht. Zo gaat er minder tijd verloren aan heen-en-weer vragen.</p></div></section>
      <Contact />
    </main>
  </>;
}
