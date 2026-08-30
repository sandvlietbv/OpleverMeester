import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Vloer verwijderen voor oplevering | OpleverMeester",
  description: "Vloer, tapijt of andere afwerking verwijderen voor oplevering? OpleverMeester kan dit meenemen als onderdeel van het opleverklaar maken van de woning.",
  alternates: { canonical: "/vloer-verwijderen-oplevering" },
};

export default function Page() {
  return <>
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Vloer verwijderen voor oplevering</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Moet de vloer eruit voordat de woning kan worden opgeleverd?</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Bij een huurbeëindiging of andere oplevering kan de eis zijn dat vloerbedekking, tapijt of andere aangebrachte afwerking wordt verwijderd. We beoordelen wat er moet gebeuren en of dit logisch gecombineerd kan worden met de rest van de oplevering.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Laat de situatie beoordelen</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Eis controleren","Werk vanuit de opleverpunten of afspraken met verhuurder of eigenaar."],["Verwijderen","Bepalen welke vloer of afwerking verwijderd moet worden en wat daarvoor nodig is."],["Combineren","Waar passend meenemen met leeghalen, afvoer, schoonmaak en andere opleverpunten."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><h2 className="font-display text-3xl font-semibold text-navy">Niet iedere vloer is hetzelfde.</h2><p className="mt-4 leading-relaxed text-muted">Losliggende vloerbedekking vraagt iets anders dan gelijmde materialen of harde vloerafwerking. Geef daarom in de intake aan om welk type vloer het gaat, hoeveel vierkante meter en welke oplevereis u heeft ontvangen.</p><div className="mt-6"><Link href="/huurwoning-opleveren" className="font-semibold text-navy hover:text-orange">Meer over huurwoning opleveren →</Link></div></div></section>
      <Contact />
    </main>
  </>;
}
