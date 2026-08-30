import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Seniorenverhuizing en oplevering | Eén aanspreekpunt",
  description: "Verhuizen naar een kleinere woning of zorglocatie en de oude woning opleveren? OpleverMeester helpt met leeghalen, afvoer, schoonmaak en regie.",
  alternates: { canonical: "/seniorenverhuizing-en-oplevering" },
};

export default function Page() {
  return <>
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Seniorenverhuizing en oplevering</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Verhuizen naar de volgende woning, zonder de oude woning alleen achter te laten als probleem.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Bij kleiner wonen of verhuizen naar een zorgomgeving blijft vaak een volle woning achter. OpleverMeester helpt structuur aanbrengen in wat mee moet, wat weg kan en wat nodig is om de oude woning netjes op te leveren.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Bespreek de verhuizing</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Wat gaat mee?","Eerst onderscheid maken tussen spullen die mee verhuizen, bewaard blijven of weg kunnen."],["Oude woning leeghalen","De achterblijvende inboedel en restmaterialen volgens afspraak verwijderen."],["Opleveren","Schoonmaak en afgesproken opleverpunten meenemen richting overdracht."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><h2 className="font-display text-3xl font-semibold text-navy">Voor senioren én familie die helpt organiseren.</h2><p className="mt-4 leading-relaxed text-muted">Een kind, familielid of andere betrokkene kan de intake ook starten. We werken vanuit de praktische situatie en spreken af wie waarvoor het aanspreekpunt is.</p></div></section>
      <Contact />
    </main>
  </>;
}
