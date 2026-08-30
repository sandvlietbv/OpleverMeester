import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Woningontruiming voor bewindvoerders en curatoren",
  description: "OpleverMeester ondersteunt bewindvoerders en curatoren bij het organiseren van woningontruiming, afvoer en oplevering vanuit één aanspreekpunt.",
  alternates: { canonical: "/zakelijk/bewindvoerders-en-curatoren" },
};

export default function Page() {
  return <>
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Zakelijke intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Voor bewindvoerders en curatoren</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Een dossier vraagt uitvoering. Wij brengen de praktische oplevering terug tot één aanspreekpunt.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Wanneer een woning of ruimte moet worden leeggehaald en opgeleverd, kan OpleverMeester de praktische werkzaamheden en afstemming organiseren op basis van het dossier, de locatie en de afgesproken eindstaat.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Bespreek een dossier</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Dossiergericht starten","Adres, toegang, contactpersonen, termijn en bijzondere aandachtspunten eerst helder krijgen."],["Uitvoering bundelen","Leeghalen, afvoer, schoonmaak en afgesproken herstelpunten waar passend combineren."],["Duidelijke afstemming","Vooraf duidelijkheid over scope, planning en prijs voordat werkzaamheden starten."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><h2 className="font-display text-3xl font-semibold text-navy">Geen standaardclaim, wel een concrete opdracht.</h2><p className="mt-4 leading-relaxed text-muted">Niet ieder dossier vraagt dezelfde aanpak. Daarom claimen we geen certificeringen, wettelijke bevoegdheden of standaardrapportages die niet vooraf zijn afgesproken. De dienstverlening wordt afgestemd op wat u daadwerkelijk nodig heeft voor de betreffende ruimte.</p></div></section>
      <Contact />
    </main>
  </>;
}
