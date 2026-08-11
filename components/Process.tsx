"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const STEPS = [
  { title: "Aanvraag", body: "U vertelt ons de situatie — telefonisch, via WhatsApp of het formulier." },
  { title: "Opname", body: "Wij bekijken de ruimte en maken een heldere, vrijblijvende offerte." },
  { title: "Planning", body: "We stemmen datum, aanpak en eventuele spoed af in één overzicht." },
  { title: "Uitvoering & oplevering", body: "Op de afgesproken datum voeren wij het werk zorgvuldig uit en leveren op." },
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

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-om border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-2 text-orange-light">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">Stap {i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
