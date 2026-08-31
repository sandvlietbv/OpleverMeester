import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Woning van een cliënt opleveren | Praktische route voor bewindvoerders",
  description: "Praktische route voor bewindvoerders wanneer een cliëntwoning leeg, bezemschoon of correct opgeleverd moet worden na verhuizing, zorgopname of overlijden.",
  alternates: { canonical: "/zakelijk/bewindvoerders-en-curatoren/woning-opleveren" },
};

const situations = [
  { id: "verhuizing", title: "Cliënt verhuist", question: "De woning moet worden verlaten. Waar begin ik?", first: "Leg de verhuis- en opleverdatum vast en vraag de oplevereisen van verhuurder of beheerder op.", collect: "Adres, deadline, toegang, bestemming van de inboedel en bekende opleverpunten.", action: "Wij kunnen daarna het leeghalen, afvoer, schoonmaak en afgesproken opleverpunten als één praktisch traject organiseren." },
  { id: "zorgopname", title: "Opname in een zorginstelling", question: "De cliënt kan niet in de woning blijven. Wat moet praktisch geregeld worden?", first: "Bepaal wat meegaat naar de nieuwe woonplek en wanneer de oude woning beschikbaar moet zijn voor oplevering.", collect: "Wat meegaat, wat achterblijft, sleutel/toegang, huur- of einddatum en eventuele instructies van verhuurder.", action: "OpleverMeester kan het resterende woningtraject vanaf die informatie praktisch in kaart brengen en uitvoeren." },
  { id: "overlijden", title: "Cliënt is overleden", question: "De woning en inboedel moeten worden afgehandeld. Wat nu?", first: "Stem eerst met de bevoegde betrokkenen af wat met persoonlijke bezittingen en inboedel mag gebeuren.", collect: "Wie bevoegd is, wat behouden moet blijven, gewenste datum, toegang en de eisen voor de woning.", action: "Zodra die keuzes duidelijk zijn, kunnen wij de praktische uitvoering van leeghalen tot afgesproken eindstaat coördineren." },
  { id: "spoed", title: "Woning moet snel leeg", question: "Er is een harde deadline. Wat heb ik direct nodig?", first: "Leg de uiterste datum en de vereiste eindstaat vast. Dat bepaalt wat haalbaar en noodzakelijk is.", collect: "Adres, deadline, omvang van de woning, toegang, achterblijvende spullen en bekende oplevereisen.", action: "Met die kerninformatie kunnen we snel beoordelen welke werkzaamheden nodig zijn en hoe het traject kan worden ingepland." },
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
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Praktische route voor bewindvoerders</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Moet de woning van een cliënt worden opgeleverd?</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Begin niet bij de uitvoerder, maar bij de situatie. Kies wat er met de cliëntwoning aan de hand is. U ziet direct welke informatie eerst nodig is en wanneer OpleverMeester het praktische traject kan overnemen.</p><a href="#route" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Kies de situatie</a></div></section>

      <section id="route" className="bg-white py-16 md:py-20"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Stap 1</p><h2 className="mt-3 font-display text-3xl font-semibold text-navy">Wat is er met de woning aan de hand?</h2><p className="mt-3 max-w-2xl leading-relaxed text-muted">Elke aanleiding heeft een ander eerste aandachtspunt. Open de route die het beste bij het dossier past.</p><div className="mt-8 grid gap-4 md:grid-cols-2">{situations.map((s) => <a key={s.id} href={`#${s.id}`} className="group rounded-om border border-surface-mid p-6 transition hover:border-orange"><h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{s.question}</p><span className="mt-4 inline-block text-sm font-semibold text-orange">Bekijk deze route →</span></a>)}</div></div></section>

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Stap 2</p><h2 className="mt-3 font-display text-3xl font-semibold text-navy">Uw situatie bepaalt de eerstvolgende actie.</h2><div className="mt-8 space-y-5">{situations.map((s) => <article id={s.id} key={s.id} className="scroll-mt-24 rounded-om bg-white p-6 md:p-8"><p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">{s.title}</p><h3 className="mt-2 font-display text-2xl font-semibold text-navy">{s.question}</h3><div className="mt-6 grid gap-5 md:grid-cols-3"><div><p className="font-semibold text-navy">1. Eerst doen</p><p className="mt-2 text-sm leading-relaxed text-muted">{s.first}</p></div><div><p className="font-semibold text-navy">2. Verzamel dit</p><p className="mt-2 text-sm leading-relaxed text-muted">{s.collect}</p></div><div><p className="font-semibold text-navy">3. Daarna</p><p className="mt-2 text-sm leading-relaxed text-muted">{s.action}</p></div></div><a href="#intake" className="mt-6 inline-block font-semibold text-orange">Leg deze situatie voor →</a></article>)}</div></div></section>

      <section className="bg-white py-16 md:py-20"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Stap 3</p><h2 className="mt-3 font-display text-3xl font-semibold text-navy">Zeven punten die een dossier sneller uitvoerbaar maken.</h2><div className="mt-8 grid gap-3">{checklist.map((item, index) => <div key={item} className="flex gap-4 rounded-om border border-surface-mid p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-semibold text-white">{index + 1}</span><p className="pt-1 leading-relaxed text-navy">{item}</p></div>)}</div></div></section>

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><h2 className="font-display text-3xl font-semibold text-navy">Van cliëntsituatie naar één praktisch oplevertraject.</h2><p className="mt-4 leading-relaxed text-muted">U hoeft geen complete werkomschrijving te maken. Adres, situatie, gewenste opleverdatum en wat u al weet over de eindstaat zijn genoeg om te beginnen. Wij brengen vervolgens in beeld welke combinatie van leeghalen, afvoer, schoonmaak, verwijderen van onderdelen en afgesproken opleverpunten nodig is.</p><a href="#intake" className="mt-7 inline-block rounded-om bg-orange px-6 py-3 font-semibold text-white">Leg de cliëntsituatie voor →</a></div></section>

      <section className="bg-navy py-12 text-white"><div className="container-om max-w-4xl"><h2 className="font-display text-2xl font-semibold">Eerst duidelijkheid, daarna uitvoering.</h2><p className="mt-3 max-w-2xl leading-relaxed text-white/75">OpleverMeester neemt geen juridische beslissingen namens de bewindvoerder of andere bevoegde betrokkenen. Wij richten ons op het praktisch organiseren en uitvoeren van de afgesproken oplevering.</p></div></section>
      <Contact />
    </main>
  </>;
}
