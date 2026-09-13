import Link from "next/link";

const tiers = [
  ["Compacte opdracht", "vanaf €532,40 incl. btw", "Beperkte ontruiming, enkele opleverpunten of een kleine ruimte."],
  ["Standaard opdracht", "vanaf €1.064,80 incl. btw", "Een normale woning of appartement met meerdere werkzaamheden."],
  ["Uitgebreide opdracht", "vanaf €1.597,20 incl. btw", "Een grotere woning, meer inboedel of meerdere opleverwerkzaamheden."],
  ["Meerdaagse opdracht", "vanaf €2.129,60 incl. btw", "Een grotere of complexere oplevering met extra inzet of afvoer."],
];

export default function Pricing() {
  return (
    <section id="prijzen" className="bg-surface-light py-16 md:py-20">
      <div className="container-om">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">Prijsindicatie</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Eerst weten welke orde van grootte bij uw situatie past.</h2>
          <p className="mt-4 leading-relaxed text-muted">We werken met projectprijzen. De bedragen hieronder zijn vanafprijzen inclusief 21% btw. Via de intake maken we de indicatie specifieker op basis van ruimte, omvang, bereikbaarheid en planning.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map(([label, price, text]) => (
            <article key={label} className="rounded-om border border-surface-mid bg-white p-6">
              <p className="text-sm font-semibold text-orange">{label}</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy">{price}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 rounded-om border border-surface-mid bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-muted">Afvoer, stortkosten, materialen of specialistische werkzaamheden kunnen de uiteindelijke projectprijs beïnvloeden. Dat maken we vóór akkoord duidelijk.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#intake" className="rounded-om bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-light">Bereken mijn indicatie</a>
            <Link href="/kosten-woningontruiming" className="rounded-om border border-surface-mid px-5 py-3 text-sm font-semibold text-navy hover:border-orange">Bekijk prijsopbouw</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
