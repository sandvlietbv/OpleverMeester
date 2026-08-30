import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Opleverservice voor vastgoedbeheer en woningcorporaties",
  description: "OpleverMeester ondersteunt vastgoedbeheerders en corporaties bij het leegmaken en opleverklaar maken van woningen en ruimtes tussen gebruikers.",
  alternates: { canonical: "/zakelijk/vastgoedbeheer-en-corporaties" },
};

export default function Page() {
  return <>
    <header className="border-b border-surface-mid bg-white"><div className="container-om flex h-16 items-center justify-between md:h-20"><Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">Oplever<span className="text-orange">Meester</span></Link><a href="#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white">Zakelijke intake</a></div></header>
    <main>
      <section className="bg-navy py-16 text-white md:py-24"><div className="container-om max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Voor vastgoedbeheer en corporaties</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Van vertrekkende gebruiker naar een ruimte die door kan naar de volgende fase.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">OpleverMeester kan praktische regie voeren over het leeghalen, afvoeren, schoonmaken en afgesproken opleverpunten van woningen en andere ruimtes tussen twee gebruikers.</p><a href="#intake" className="mt-8 inline-block rounded-om bg-orange px-7 py-3.5 font-semibold text-white">Bespreek een opdracht</a></div></section>
      <section className="bg-white py-16 md:py-20"><div className="container-om grid gap-8 md:grid-cols-3">{[["Mutatie of leegstand","Start vanuit de daadwerkelijke staat van de ruimte en de gewenste eindstaat."],["Eén uitvoeringsplan","Waar passend werkzaamheden bundelen zodat minder losse partijen hoeven te worden aangestuurd."],["Herhaalbare samenwerking","Bij terugkerende opdrachten kunnen werkwijze en informatiebehoefte steeds verder worden gestandaardiseerd."]].map(([t,b])=><div key={t} className="rounded-om border border-surface-mid p-6"><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{b}</p></div>)}</div></section>
      <section className="bg-surface-light py-16 md:py-20"><div className="container-om max-w-4xl"><h2 className="font-display text-3xl font-semibold text-navy">Afspraken gebaseerd op uw opleverproces.</h2><p className="mt-4 leading-relaxed text-muted">Inspectiepunten, sleutelbeheer, rapportage en kwaliteitscontrole verschillen per opdrachtgever. Die onderdelen worden daarom alleen opgenomen wanneer ze daadwerkelijk onderdeel zijn van de gemaakte afspraak.</p></div></section>
      <Contact />
    </main>
  </>;
}
