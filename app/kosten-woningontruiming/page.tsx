import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Kosten woningontruiming | Waar hangt de prijs van af?",
  description: "Wat kost een woningontruiming? Bekijk welke factoren de prijs bepalen en start een intake voor een offerte op basis van uw echte situatie.",
  alternates: { canonical: "/kosten-woningontruiming" },
};

export default function Page() {
  return <>
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Start intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Kosten woningontruiming</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Wat kost een woningontruiming? Dat hangt vooral af van wat er echt moet gebeuren.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Een vaste vanafprijs zonder de woning te kennen zegt weinig. De omvang, hoeveelheid spullen, bereikbaarheid, afvoer, schoonmaak, herstelpunten en deadline bepalen samen de opdracht.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Vraag een offerte aan</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om max-w-5xl"><p className="text-sm font-semibold text-orange">Prijsopbouw</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Deze factoren hebben de meeste invloed.</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{[["Omvang en inhoud","Aantal ruimtes, hoeveelheid inboedel en wat behouden moet blijven."],["Bereikbaarheid","Verdieping, lift, loopafstand, parkeermogelijkheid en toegang tot de woning."],["Afvoer en materialen","Hoeveel moet worden afgevoerd en welke materialen vragen aparte verwerking."],["Opleverwerk","Schoonmaak, verwijderen van onderdelen en afgesproken kleine herstelpunten."],["Planning","Een vaste overdrachtsdatum kan invloed hebben op organisatie en inzet."],["Combineren","Door werkzaamheden in één opdracht te bundelen ontstaat één duidelijk plan."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h3 className="font-display text-lg font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><h2 className="font-display text-3xl font-semibold text-navy">Eerst situatie, dan prijs.</h2><p className="mt-4 leading-relaxed text-muted">Via de intake geeft u de belangrijkste gegevens door. Daarna kan een offerte worden opgebouwd rond de echte werkzaamheden in plaats van een generieke richtprijs die mogelijk niet bij uw woning past.</p><div className="mt-6"><Link href="/woningontruiming" className="font-semibold text-navy hover:text-orange">Bekijk woningontruiming →</Link></div></div></section>
      <Contact />
    </main>
  </>;
}
