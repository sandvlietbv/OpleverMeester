import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Woning van een cliënt opleveren | Praktische route voor bewindvoerders",
  description: "Praktische route voor bewindvoerders wanneer een cliëntwoning leeg, bezemschoon of correct opgeleverd moet worden na verhuizing, zorgopname of overlijden.",
  alternates: { canonical: "/zakelijk/bewindvoerders-en-curatoren/woning-opleveren" },
};

const situations = [
  ["Cliënt verhuist", "Breng de opleverdatum, verhuurder, toegang en achterblijvende inboedel eerst in beeld."],
  ["Opname in een zorginstelling", "Bepaal wat meegaat, wat achterblijft en wanneer de oude woning beschikbaar moet zijn voor oplevering."],
  ["Cliënt is overleden", "Stem eerst met de bevoegde betrokkenen af wat met inboedel en persoonlijke bezittingen mag gebeuren."],
  ["Woning moet snel leeg", "Leg de uiterste datum en de afgesproken eindstaat vast voordat werkzaamheden worden ingepland."],
];

const checklist = [
  "Wie mag beslissen over de woning en de achterblijvende spullen?",
  "Wat is de uiterste oplever- of sleuteloverdrachtsdatum?",
  "Welke oplevereisen heeft verhuurder, eigenaar of beheerder gesteld?",
  "Wat moet worden behouden, verhuisd, afgevoerd of apart gehouden?",
  "Moeten vloeren, losse voorzieningen of andere onderdelen worden verwijderd?",
  "Is alleen leeghalen nodig, of ook schoonmaak en kleine herstelpunten?",
  "Hoe is de woning bereikbaar en wie regelt toegang?",
];

export default function Page() {
  return <>
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#route" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Bekijk wat nodig is</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Praktische route voor bewindvoerders</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Moet de woning van een cliënt worden opgeleverd?</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Dan hoeft u niet meteen te weten welke uitvoerder voor ieder onderdeel nodig is. Begin met de situatie, de deadline en de gewenste eindstaat. Hieronder ziet u welke informatie helpt om het traject overzichtelijk te maken.</p><a href="#route" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Start met de situatie</a></div></section>

      <section id="route" className="bg-white py-16 md:py-20"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Stap 1</p><h2 className="mt-3 font-display text-3xl font-semibold text-navy">Wat is er met de woning aan de hand?</h2><p className="mt-3 max-w-2xl leading-relaxed text-muted">De aanleiding bepaalt vaak welke afstemming eerst nodig is. Kies hieronder de situatie die het dichtst in de buurt komt.</p><div className="mt-8 grid gap-4 md:grid-cols-2">{situations.map(([title, body]) => <div key={title} className="rounded-om border border-surface-mid p-6"><h3 className="font-display text-xl font-semibold text-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{body}</p></div>)}</div></div></section>

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Stap 2</p><h2 className="mt-3 font-display text-3xl font-semibold text-navy">Zorg dat deze zeven punten duidelijk zijn.</h2><div className="mt-8 grid gap-3">{checklist.map((item, index) => <div key={item} className="flex gap-4 rounded-om bg-white p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-semibold text-white">{index + 1}</span><p className="pt-1 leading-relaxed text-navy">{item}</p></div>)}</div></div></section>

      <section className="bg-white py-16 md:py-20"><div className="container-om max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Stap 3</p><h2 className="mt-3 font-display text-3xl font-semibold text-navy">Zelf coördineren of het praktische traject overdragen?</h2><p className="mt-4 leading-relaxed text-muted">Als duidelijk is wat er met de woning moet gebeuren, kunt u de verschillende werkzaamheden zelf organiseren. U kunt de situatie ook aan OpleverMeester voorleggen. Wij bekijken dan welke combinatie van leeghalen, afvoer, schoonmaak, verwijderen van onderdelen en eventuele opleverpunten nodig is en stemmen de uitvoering af vanuit één aanspreekpunt.</p><div className="mt-7 rounded-om border border-surface-mid p-6"><h3 className="font-display text-xl font-semibold text-navy">U hoeft nog geen complete werkomschrijving te hebben.</h3><p className="mt-2 text-sm leading-relaxed text-muted">Adres, situatie, gewenste opleverdatum en wat u al weet over de eindstaat zijn genoeg om te beginnen. Wat nog onbekend is, brengen we daarna samen in beeld.</p><a href="#intake" className="mt-5 inline-block rounded-om bg-orange px-6 py-3 font-semibold text-white">Leg de cliëntsituatie voor →</a></div></div></section>

      <section className="bg-navy py-12 text-white"><div className="container-om max-w-4xl"><h2 className="font-display text-2xl font-semibold">Eerst duidelijkheid, daarna uitvoering.</h2><p className="mt-3 max-w-2xl leading-relaxed text-white/75">OpleverMeester neemt geen juridische beslissingen namens de bewindvoerder of andere bevoegde betrokkenen. Wij richten ons op het praktisch organiseren en uitvoeren van de afgesproken oplevering.</p></div></section>
      <Contact />
    </main>
  </>;
}
