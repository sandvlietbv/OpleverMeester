"use client";

import { motion } from "framer-motion";

const STEPS = [
  { title: "Vertel wat er speelt", body: "Kies uw situatie of start de prijscheck. U hoeft de juiste vakterm niet te kennen." },
  { title: "Krijg een duidelijk plan", body: "We stemmen werkzaamheden, planning en prijs af voordat we beginnen." },
  { title: "Wij regelen de oplevering", body: "Na akkoord organiseren we de uitvoering tot de afgesproken eindstaat." },
];

export default function Process() {
  return (
    <section id="werkwijze" className="bg-navy py-20 text-white">
      <div className="container-om">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45 }} className="max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Zo pakken we het aan
        </motion.h2>
        <p className="mt-3 max-w-xl leading-relaxed text-white/70">Kort, duidelijk en met één aanspreekpunt.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
