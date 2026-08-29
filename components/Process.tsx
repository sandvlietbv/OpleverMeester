"use client";

import { motion } from "framer-motion";

const STEPS = [
  { title: "Start intake", body: "U geeft de basis door: locatie, oppervlakte, planning en situatie." },
  { title: "Digitale intake", body: "We nemen telefonisch de details door en bepalen wat er echt moet gebeuren." },
  { title: "Offerte", body: "Met die informatie maken we een heldere offerte die past bij de opdracht." },
  { title: "Schakelen", body: "Akkoord? Dan plannen we de uitvoering en zorgen we dat de ruimte wordt opgeleverd." },
];

export default function Process() {
  return (
    <section id="werkwijze" className="bg-navy py-20 text-white">
      <div className="container-om">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45 }} className="max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Zo pakken we het aan
        </motion.h2>
        <p className="mt-3 max-w-xl leading-relaxed text-white/70">Kort, duidelijk en met één aanspreekpunt.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: i * 0.07 }} className="border-t border-white/15 pt-5">
              <span className="text-sm font-semibold text-orange-light">0{i + 1}</span>
              <h3 className="mt-2 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
