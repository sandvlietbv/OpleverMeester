import { CalendarCheck, MessageCircle, UserRound } from "lucide-react";

const VALUES = [
  { icon: UserRound, label: "Eén vast aanspreekpunt" },
  { icon: MessageCircle, label: "Duidelijke afspraken" },
  { icon: CalendarCheck, label: "Planning vóór uitvoering" },
];

export default function Trust() {
  return (
    <section id="vertrouwen" className="bg-surface-light py-14 md:py-16">
      <div className="container-om">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">Persoonlijk geregeld</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">U houdt overzicht. Wij regelen de uitvoering.</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">Team OpleverMeester bespreekt wat er speelt, maakt duidelijke afspraken en blijft bereikbaar tot de ruimte is opgeleverd.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.label} className="flex min-h-32 flex-col items-start gap-4 rounded-om border border-surface-mid bg-white p-5">
                <v.icon className="h-6 w-6 text-orange" strokeWidth={1.75} />
                <span className="font-display text-base font-semibold text-navy">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
