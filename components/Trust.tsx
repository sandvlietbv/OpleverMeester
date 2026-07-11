"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, CalendarCheck, UserRound } from "lucide-react";

const VALUES = [
  { icon: ShieldCheck, label: "Professioneel" },
  { icon: HeartHandshake, label: "Respectvol" },
  { icon: CalendarCheck, label: "Afspraak is afspraak" },
  { icon: UserRound, label: "Persoonlijk contact" },
];

export default function Trust() {
  return (
    <section id="vertrouwen" className="bg-surface-light py-24">
      <div className="container-om">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl"
        >
          Waarom u ons kunt vertrouwen
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-start gap-4 rounded-om border border-surface-mid bg-white p-6"
            >
              <v.icon className="h-7 w-7 text-orange" strokeWidth={1.75} />
              <span className="font-display text-base font-semibold text-navy">
                {v.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
