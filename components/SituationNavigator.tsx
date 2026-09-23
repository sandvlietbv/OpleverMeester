"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

const SITUATIONS = [
  {
    label: "Woning leeghalen",
    short: "Leeghalen en opleveren",
    href: "/woningontruiming",
    image: "/images/visual-proof/woningontruiming.webp",
    alt: "Woning met verhuisdozen tijdens het leeghalen",
    position: "center 52%",
  },
  {
    label: "Na een overlijden",
    short: "Zorgvuldig en met overzicht",
    href: "/huis-leeghalen-na-overlijden",
    image: "/images/visual-proof/overlijden.webp",
    alt: "Warme, geleefde woonkamer met persoonlijke inrichting",
    position: "center 54%",
  },
  {
    label: "Huurwoning opleveren",
    short: "Voor inspectie en sleuteloverdracht",
    href: "/huurwoning-opleveren",
    image: "/images/visual-proof/huurwoning-inspectie.webp",
    alt: "Lege huurwoning met inspectie- en schoonmaakcontext",
    position: "center 58%",
  },
  {
    label: "Seniorenverhuizing",
    short: "Verhuizen én de oude woning regelen",
    href: "/seniorenverhuizing-en-oplevering",
    image: "/images/visual-proof/senioren.webp",
    alt: "Herkenbare slaapkamer in een senioren- of zorgwoning",
    position: "center 50%",
  },
  {
    label: "Zakelijke opdracht",
    short: "Voor pand, dossier of mutatiewoning",
    href: "/bedrijfsontruiming",
    image: "/images/visual-proof/bedrijfsontruiming.webp",
    alt: "Bedrijfsruimte met verhuisdozen en lege stellingen",
    position: "center 52%",
  },
] as const;

export default function SituationNavigator() {
  const [active, setActive] = useState(0);
  const current = SITUATIONS[active];

  return (
    <section id="situaties" className="scroll-mt-20 bg-white py-14 md:py-20" aria-labelledby="situaties-title">
      <div className="container-om">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">Begin bij uw situatie</p>
          <h2 id="situaties-title" className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Wat moet er geregeld worden?</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">U hoeft geen dienst of vakterm te kiezen. Kies wat het meest herkenbaar is.</p>
        </div>

        <div className="mt-9 grid items-stretch gap-5 lg:grid-cols-[.92fr_1.08fr] lg:gap-8">
          <nav className="grid gap-2" aria-label="Kies uw situatie">
            {SITUATIONS.map((situation, index) => (
              <Link
                key={situation.href}
                href={situation.href}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => window.gtag?.("event", "situation_selected", { situation: situation.label, destination: situation.href, source_page: window.location.pathname })}
                aria-current={active === index ? "true" : undefined}
                className={`group flex min-h-[76px] items-center justify-between gap-4 rounded-om border px-5 py-4 transition-colors focus-visible:outline-none ${active === index ? "border-orange bg-orange/[0.06]" : "border-surface-mid bg-white hover:border-orange/60"}`}
              >
                <span>
                  <strong className="block font-display text-base font-semibold text-navy sm:text-lg">{situation.label}</strong>
                  <span className="mt-0.5 block text-sm leading-snug text-muted">{situation.short}</span>
                </span>
                <span aria-hidden="true" className={`shrink-0 text-lg ${active === index ? "text-orange" : "text-navy/35 group-hover:text-orange"}`}>→</span>
              </Link>
            ))}
          </nav>

          <figure className="relative min-h-[300px] overflow-hidden rounded-om bg-surface-light shadow-[0_18px_55px_rgba(11,29,51,0.12)] sm:min-h-[390px] lg:min-h-0">
            <Image
              key={current.image}
              src={current.image}
              alt={current.alt}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
              style={{ objectPosition: current.position }}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/55 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="font-display text-xl font-semibold">{current.label}</p>
              <p className="mt-1 text-sm text-white/80">Bekijk de aanpak voor deze situatie.</p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-surface-mid pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted">Zakelijk? Bekijk ook <Link href="/zakelijk/bewindvoerders-en-curatoren" className="font-semibold text-navy hover:text-orange">bewind en curatele</Link> of <Link href="/zakelijk/vastgoedbeheer-en-corporaties" className="font-semibold text-navy hover:text-orange">vastgoedbeheer en corporaties</Link>.</p>
          <a href="#intake" className="shrink-0 font-semibold text-orange hover:underline">Andere situatie? Start de prijscheck →</a>
        </div>
      </div>
    </section>
  );
}
