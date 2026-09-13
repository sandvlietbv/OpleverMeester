import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Woningontruiming Drenthe | Vanaf €532,40 incl. btw",
  description: "Woningontruiming in Drenthe? OpleverMeester regelt leeghalen, afvoer, schoonmaak en opleverklaar maken vanuit één aanspreekpunt.",
  alternates: { canonical: "/woningontruiming-drenthe" },
  openGraph: { title: "Woningontruiming Drenthe | OpleverMeester", description: "Woning leeg en opleverklaar in Assen, Emmen, Hoogeveen, Meppel en omgeving.", url: "https://www.oplevermeester.nl/woningontruiming-drenthe", type: "website", locale: "nl_NL" },
};

const JSON_LD = { "@context":"https://schema.org", "@type":"Service", name:"Woningontruiming Drenthe", serviceType:"Woningontruiming en oplevering", provider:{"@type":"LocalBusiness",name:"OpleverMeester",url:"https://www.oplevermeester.nl",telephone:"+31645316851"}, areaServed:{"@type":"AdministrativeArea",name:"Drenthe"}, url:"https://www.oplevermeester.nl/woningontruiming-drenthe" };

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(JSON_LD)}} />
    <Header />
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Woningontruiming Drenthe</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Een woning in Drenthe leeg en netjes richting overdracht.</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Van Assen en Emmen tot Hoogeveen, Meppel en omliggende dorpen: de woning, hoeveelheid inboedel, eventuele bijgebouwen en deadline bepalen wat er nodig is. We maken daar één uitvoerbaar opleverplan van.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#intake" className="rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Start intake</a><a href="tel:+31645316851" className="rounded-om border border-white/25 px-7 py-3.5 font-semibold text-white">Bel 06 45 31 68 51</a></div><p className="mt-4 text-sm text-white/55">Indicatieve projectprijzen beginnen vanaf €532,40 incl. btw.</p></div></section>

      <section className="bg-white py-16 md:py-20"><div className="container-om max-w-6xl"><p className="text-sm font-semibold text-orange">Drenthe in de intake</p><h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold text-navy">Ook schuur, zolder en extra opslag tellen mee.</h2><p className="mt-4 max-w-3xl leading-relaxed text-muted">Bij woningen met meer buitenruimte of bijgebouwen kan de werkelijke omvang sterk verschillen van alleen het aantal vierkante meters van de woning. Daarom vragen we naar wat er werkelijk leeg of opleverklaar moet worden gemaakt.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
        ["Assen", "Bij appartementen en woningen in de stad nemen we toegang, verdieping en bereikbaarheid direct mee in de planning."],
        ["Emmen", "Bij een ruimere woning of extra opslag kijken we niet alleen naar woonoppervlak maar ook naar wat daadwerkelijk moet worden afgevoerd."],
        ["Hoogeveen", "Een vaste huur- of verkoopdeadline wordt vanaf de intake meegenomen zodat de planning realistisch blijft."],
        ["Meppel & omliggende dorpen", "Bij woningen met schuur, zolder of erf bespreken we vooraf welke delen onderdeel zijn van de oplevering."],
      ].map(([t,b])=><article key={t} className="rounded-om border border-surface-mid p-6"><h3 className="font-display text-xl font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></article>)}</div></div></section>

      <section className="bg-surface-light py-16 md:py-20"><div className="container-om grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-sm font-semibold text-orange">Van ontruimen naar opleveren</p><h2 className="mt-2 font-display text-3xl font-semibold text-navy">Eén plan voor wat werkelijk klaar moet zijn.</h2><p className="mt-4 leading-relaxed text-muted">De opdracht kan bestaan uit leeghalen, afvoer, schoonmaak en afgesproken kleine opleverpunten. U ziet vóór akkoord welke werkzaamheden in de projectprijs zitten.</p><Link href="/kosten-woningontruiming" className="mt-5 inline-flex font-semibold text-navy underline decoration-orange underline-offset-4">Bekijk de prijsopbouw</Link></div><div className="grid gap-4 sm:grid-cols-2">{["Woning en afgesproken bijruimtes leeghalen","Inboedel en restmateriaal afvoeren","Schoon opleveren","Afgesproken kleine herstelpunten","Planning richting sleuteloverdracht","Eén aanspreekpunt van intake tot oplevering"].map((x)=><div key={x} className="rounded-om border border-surface-mid bg-white p-5 text-sm font-medium text-navy">{x}</div>)}</div></div></section>
      <Contact />
    </main>
    <Footer />
  </>;
}
