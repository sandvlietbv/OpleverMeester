import { ShieldCheck, HeartHandshake, CalendarCheck, UserRound } from "lucide-react";
import Link from "next/link";

const VALUES = [
  { icon: ShieldCheck, label: "Duidelijke afspraken" },
  { icon: HeartHandshake, label: "Respectvol in elke situatie" },
  { icon: CalendarCheck, label: "Planning vóór uitvoering" },
  { icon: UserRound, label: "Eén vast aanspreekpunt" },
];

export default function Trust() {
  return (
    <section id="vertrouwen" className="bg-surface-light py-20 md:py-24">
      <div className="container-om">
        <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">Persoonlijk geregeld</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">U weet wie verantwoordelijk is voor uw oplevering.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">OpleverMeester is opgericht door Fabian. U heeft geen anoniem loket, maar één aanspreekpunt dat de situatie doorneemt, de uitvoering organiseert en bereikbaar blijft tot de ruimte is opgeleverd.</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">Vertrouwen bouwen we met duidelijke afspraken, bereikbaarheid en zichtbaar resultaat.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/over-ons" className="rounded-om border border-surface-mid bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-orange">Lees hoe we werken</Link>
              <a href="tel:+31645316851" className="rounded-om bg-navy px-5 py-3 text-sm font-semibold text-white">Bel Fabian via 06 45 31 68 51</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div key={v.label} className="flex min-h-36 flex-col items-start gap-4 rounded-om border border-surface-mid bg-white p-6">
                <v.icon className="h-7 w-7 text-orange" strokeWidth={1.75} />
                <span className="font-display text-base font-semibold text-navy">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
