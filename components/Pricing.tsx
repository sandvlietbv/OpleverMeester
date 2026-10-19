import { PHOTO_WHATSAPP_HREF } from "@/lib/whatsapp";\nimport Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const FACTORS = ["Omvang van de ruimte", "Hoeveelheid inboedel", "Bereikbaarheid en opleverwerk"];

export default function Pricing() {
  return (
    <section id="prijzen" className="bg-[#fbf6f1] py-20 md:py-24">
      <div className="container-om">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Prijsindicatie</p>
            <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
              <span className="font-display text-6xl font-semibold tracking-[-0.055em] text-navy md:text-7xl">€595</span>
              <span className="pb-2 text-lg font-medium text-muted">vanaf · incl. btw</span>
            </div>
            <p className="mt-5 max-w-lg text-lg leading-8 text-muted">
              Vanaf €595 incl. btw. Eerst een indicatie. Daarna duidelijkheid vóór akkoord.
            </p>
            <Link href="/kosten-woningontruiming" className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-navy hover:text-orange">
              Bekijk hoe de prijs is opgebouwd <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[24px] border border-orange/15 bg-white p-7 shadow-[0_18px_50px_rgba(76,61,35,0.08)] md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">Uw prijs. Duidelijk opgebouwd.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {FACTORS.map((factor) => (
                <div key={factor} className="flex gap-3 border-t border-surface-mid pt-4 sm:block">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange sm:mb-3">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold leading-6 text-navy">{factor}</span>
                </div>
              ))}
            </div>
            <a href={PHOTO_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-om bg-orange px-6 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(169,104,0,0.20)] transition hover:-translate-y-0.5 hover:bg-orange-light sm:w-auto">
              Ontvang een prijsindicatie
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
