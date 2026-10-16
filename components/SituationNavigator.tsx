"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();
  const current = SITUATIONS[active];

  return (
    <section id="situaties" className="scroll-mt-24 bg-[#fbfaf8] py-20 md:py-28" aria-labelledby="situaties-title">
      <div className="container-om">
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Begin bij uw situatie</p>
            <h2 id="situaties-title" className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-[-0.035em] text-navy md:text-5xl">
              Wat moet er geregeld worden?
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
            U hoeft geen dienst of vakterm te kennen. Kies wat het meest herkenbaar is; wij laten zien wat de logische volgende stap is.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.86fr_1.14fr] lg:gap-12">
          <nav className="border-t border-surface-mid" aria-label="Kies uw situatie">
            {SITUATIONS.map((situation, index) => (
              <Link
                key={situation.href}
                href={situation.href}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => window.gtag?.("event", "situation_selected", { situation: situation.label, destination: situation.href, source_page: window.location.pathname })}
                className="group relative grid min-h-[92px] grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-surface-mid py-5 transition-colors"
              >
                <span className={`text-sm font-semibold transition-colors ${active === index ? "text-orange" : "text-navy/[0.35] group-hover:text-orange"}`}>0{index + 1}</span>
                <span>
                  <strong className={`block font-display text-xl font-semibold tracking-[-0.02em] transition-colors sm:text-2xl ${active === index ? "text-navy" : "text-navy/[0.78] group-hover:text-navy"}`}>{situation.label}</strong>
                  <span className="mt-1 block text-sm leading-snug text-muted sm:text-base">{situation.short}</span>
                </span>
                <motion.span
                  aria-hidden="true"
                  animate={reduceMotion ? undefined : { x: active === index ? 4 : 0 }}
                  className={`text-2xl transition-colors ${active === index ? "text-orange" : "text-navy/25 group-hover:text-orange"}`}
                >
                  →
                </motion.span>
                <span className={`absolute inset-x-0 bottom-[-1px] h-0.5 origin-left bg-orange transition-transform duration-300 ${active === index ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            ))}
          </nav>

          <div className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-surface-light shadow-[0_24px_70px_rgba(11,29,51,0.14)] sm:min-h-[470px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.image}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={current.image} alt={current.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" style={{ objectPosition: current.position }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/[0.78] via-navy/[0.08] to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-light">Uw situatie</p>
                  <p className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{current.label}</p>
                  <p className="mt-2 text-base text-white/78">Bekijk de aanpak en ga direct door naar de juiste intake.</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <motion.div
              aria-hidden="true"
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-5 top-5 rounded-full border border-white/45 bg-white/90 px-4 py-2 text-sm font-semibold text-navy shadow-lg backdrop-blur"
            >
              Kies. Bekijk. Regel.
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-surface-mid pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted">Zakelijk? Bekijk ook <Link href="/zakelijk/bewindvoerders-en-curatoren" className="font-semibold text-navy hover:text-orange">bewind en curatele</Link> of <Link href="/zakelijk/vastgoedbeheer-en-corporaties" className="font-semibold text-navy hover:text-orange">vastgoedbeheer en corporaties</Link>.</p>
          <a href="#intake" className="shrink-0 text-base font-semibold text-orange hover:underline">Andere situatie? Start de prijscheck →</a>
        </div>
      </div>
    </section>
  );
}
