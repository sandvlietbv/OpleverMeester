"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ClipboardList, Sparkles, UserRoundSearch } from "lucide-react";

const STEPS = [
  { icon: UserRoundSearch, title: "Vertel wat er speelt.", body: "U geeft kort door wat er speelt." },
  { icon: ClipboardList, title: "Wij maken het plan.", body: "U krijgt duidelijkheid over werk, planning en prijs." },
  { icon: Sparkles, title: "Wij regelen de oplevering.", body: "Na akkoord nemen wij de uitvoering over." },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="werkwijze" className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div aria-hidden="true" className="absolute inset-0 opacity-40">
        <div className="absolute left-[8%] top-12 h-px w-72 bg-gradient-to-r from-transparent via-orange/60 to-transparent" />
        <div className="absolute -right-16 bottom-[-5rem] h-64 w-64 rounded-full border border-white/[0.08]" />
      </div>

      <div className="container-om relative">
        <div className="grid gap-5 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">Zo werkt het</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Van vraag naar overdracht.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/[0.68] md:justify-self-end">
            Kort. Duidelijk. Eén aanspreekpunt van intake tot overdracht.
          </p>
        </div>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[7%] right-[7%] top-7 hidden h-px origin-left bg-gradient-to-r from-orange/20 via-orange/80 to-orange/20 md:block"
          />

          {STEPS.map((step, i) => (
            <motion.article
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-orange/50 bg-navy text-sm font-semibold text-orange-light shadow-[0_0_0_8px_rgba(26,26,26,1)]">
                  0{i + 1}
                </span>
                {i < STEPS.length - 1 && <ArrowRight className="h-5 w-5 text-white/[0.18] md:hidden" />}
              </div>
              <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-om bg-white/[0.07] text-orange-light">
                <step.icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.025em] md:text-[1.85rem]">{step.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-7 text-white/[0.65]">{step.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
