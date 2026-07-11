"use client";

import { motion } from "framer-motion";

const STEPS = [
  { title: "Aanvraag", body: "U vertelt ons de situatie — telefonisch, via WhatsApp of het formulier." },
  { title: "Opname", body: "Wij bekijken de ruimte en maken een heldere, vrijblijvende offerte." },
  { title: "Uitvoering", body: "Op de afgesproken datum voeren wij het werk zorgvuldig uit." },
  { title: "Oplevering", body: "U ontvangt de ruimte precies zoals afgesproken, klaar voor de volgende stap." },
];

export default function Process() {
  return (
    <section id="werkwijze" className="bg-navy py-24 text-white">
      <div className="container-om">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Werkwijze
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 max-w-xl leading-relaxed text-white/70"
        >
          Vier stappen. Geen verrassingen.
        </motion.p>

        <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="font-display text-sm font-medium text-orange-light">
                Stap {i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/65">{step.body}</p>
              {i < STEPS.length - 1 && (
                <div className="mt-8 hidden h-px w-full bg-white/10 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
