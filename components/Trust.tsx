"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, ClipboardCheck, UserRound } from "lucide-react";

const VALUES = [
  { icon: UserRound, number: "01", label: "Eén vast aanspreekpunt", text: "Van eerste vraag tot overdracht: één lijn." },
  { icon: ClipboardCheck, number: "02", label: "Duidelijke afspraken", text: "Vooraf helder: werk, prijs en eindstaat." },
  { icon: CalendarCheck, number: "03", label: "Planning vóór uitvoering", text: "Eerst de planning. Dan de uitvoering." },
];

export default function Trust() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="vertrouwen" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div aria-hidden="true" className="absolute right-[-8rem] top-8 h-64 w-64 rounded-full border border-orange/10" />
      <div className="container-om relative">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Rust in de uitvoering</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-navy md:text-6xl">
            U houdt overzicht. <span className="text-navy/[0.45]">Wij regelen.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Eén plan. Eén aanspreekpunt. Duidelijkheid over kosten, planning en eindstaat.
          </p>
        </div>

        <div className="mt-14 border-y border-surface-mid md:grid md:grid-cols-3">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.label}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative py-8 md:px-8 md:py-10 ${index > 0 ? "border-t border-surface-mid md:border-l md:border-t-0" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.12em] text-orange">{value.number}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/[0.08] text-orange">
                  <value.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="mt-8 max-w-[15rem] font-display text-2xl font-semibold tracking-[-0.025em] text-navy md:text-[1.7rem]">{value.label}</h3>
              <p className="mt-3 max-w-xs text-base leading-7 text-muted">{value.text}</p>
              <motion.span
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={reduceMotion ? undefined : { scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.12 + index * 0.08 }}
                className="absolute bottom-[-1px] left-0 h-0.5 w-16 origin-left bg-orange"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
