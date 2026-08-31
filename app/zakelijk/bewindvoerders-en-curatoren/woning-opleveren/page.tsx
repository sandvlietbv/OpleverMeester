import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import OpleverpuntenPlan from "@/components/OpleverpuntenPlan";
import BewindvoerderProblemRoute from "@/components/BewindvoerderProblemRoute";

export const metadata: Metadata = {
  title: "Woning van een cliënt opleveren | Praktische route voor bewindvoerders",
  description: "Praktische route voor bewindvoerders bij een cliëntwoning die leeg en opgeleverd moet worden, opleverpunten heeft, inboedel bevat of een korte sleuteltermijn heeft.",
  alternates: { canonical: "/zakelijk/bewindvoerders-en-curatoren/woning-opleveren" },
};

const situations = [
  { id: "leeg-opleveren", title: "Woning moet leeg en opgeleverd worden", question: "Ik heb een cliëntwoning die moet worden afgehandeld. Waar begin ik?", first: "Leg de opleverdatum en gewenste eindstaat vast en controleer welke eisen verhuurder, eigenaar of beheerder heeft gesteld.", collect: "Adres, deadline, toegang, bestemming van de inboedel en bekende oplevereisen.", action: "Wij kunnen vanaf daar het leeghalen, afvoer, schoonmaak en afgesproken opleverwerk als één praktisch traject organiseren." },
  { id: "opleverpunten", title: "Ik heb een inspectierapport of opleverpunten", question: "Er ligt een lijst met werkzaamheden. Wie kan dit praktisch afhandelen?", first: "Gebruik het inspectierapport of de opleverlijst als uitgangspunt. Markeer wat al geregeld is en wat nog uitgevoerd moet worden.", collect: "Het rapport of de lijst, adres, opleverdatum, toegang en eventuele aanvullende afspraken met verhuurder of beheerder.", action: "Wij vertalen de bekende punten naar een uitvoerbaar traject en stemmen de benodigde werkzaamheden vanuit één aanspreekpunt af." },
  { id: "inboedel", title: "Er staan nog spullen in de woning", question: "De woning moet verder, maar de inboedel is nog niet afgehandeld. Wat nu?", first: "Maak eerst onderscheid tussen wat behouden, verhuisd, apart gehouden of afgevoerd mag worden. Laat beslissingen bij de bevoegde betrokkenen.", collect: "Wat moet blijven, wat weg mag, eventuele persoonlijke of waardevolle zaken, toegang, deadline en gewenste eindstaat.", action: "Zodra de bestemming van de spullen duidelijk is, kunnen wij de praktische uitvoering van sorteren volgens instructie, leeghalen, afvoer en oplevering organiseren." },
  { id: "sleutel-deadline", title: "De sleutel moet binnenkort worden ingeleverd", question: "De deadline komt dichtbij. Wat is nu het belangrijkst?", first: "Leg de exacte sleutel- of eindinspectiedatum en de minimale vereiste eindstaat vast. Dat bepaalt wat eerst moet gebeuren.", collect: "Adres, exacte deadline, toegang, omvang van de woning, resterende spullen en bekende opleverpunten.", action: "Met die kerninformatie kunnen we snel beoordelen welke werkzaamheden nodig zijn en wat binnen de beschikbare tijd praktisch kan worden ingepland." },
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
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Praktische route voor bewindvoerders</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Wat ligt er nu op uw bureau?</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Een verhuizing, zorgopname of overlijden kan de aanleiding zijn. Voor de uitvoering telt vooral wat er nu met de woning moet gebeuren. Kies het praktische probleem dat het beste bij het dossier past.</p><a href="#route" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Kies het praktische probleem</a></div></section>
      <BewindvoerderProblemRoute situations={situations} />
      <OpleverpuntenPlan />
      <section className="bg-white py-12 md:py-16"><div className="container-om max-w-5xl"><details className="rounded-om border border-surface-mid p-6"><summary className="cursor-pointer font-display text-xl font-semibold text-navy">Checklist: wat maakt een dossier sneller uitvoerbaar?</summary><div className="mt-6 grid gap-3">{checklist.map((item, index) => <div key={item} className="flex gap-4 rounded-om bg-surface-light p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-semibold text-white">{index + 1}</span><p className="pt-1 leading-relaxed text-navy">{item}</p></div>)}</div></details></div></section>
      <section className="bg-navy py-12 text-white"><div className="container-om max-w-4xl"><h2 className="font-display text-2xl font-semibold">Eerst duidelijkheid, daarna uitvoering.</h2><p className="mt-3 max-w-2xl leading-relaxed text-white/75">OpleverMeester neemt geen juridische beslissingen namens de bewindvoerder of andere bevoegde betrokkenen. Wij richten ons op het praktisch organiseren en uitvoeren van de afgesproken oplevering.</p></div></section>
      <Contact />
    </main>
  </>;
}
