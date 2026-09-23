import Link from "next/link";

export default function Pricing() {
  return (
    <section id="prijzen" className="bg-surface-light py-14 md:py-16">
      <div className="container-om">
        <div className="grid gap-8 rounded-om border border-surface-mid bg-white p-6 shadow-sm md:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">Prijsindicatie</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Een compacte opdracht begint vanaf €595 inclusief btw.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">De uiteindelijke projectprijs hangt af van de ruimte, hoeveelheid inboedel, bereikbaarheid en werkzaamheden. U ziet via de prijscheck eerst een passende orde van grootte.</p>
            <Link href="/kosten-woningontruiming" className="mt-4 inline-flex text-sm font-semibold text-navy hover:text-orange">Bekijk hoe de prijs is opgebouwd →</Link>
          </div>
          <a href="#intake" className="inline-flex justify-center rounded-om bg-orange px-6 py-3.5 font-semibold text-white hover:bg-orange-light">Start snelle prijscheck</a>
        </div>
      </div>
    </section>
  );
}
