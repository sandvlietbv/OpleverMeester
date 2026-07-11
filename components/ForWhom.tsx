"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AUDIENCES = [
  {
    title: "Particulieren",
    body: "Na een overlijden, verhuizing, scheiding of verkoop. Wij nemen de praktische last uit handen op een moment dat daar geen ruimte voor is.",
    href: "/particulieren",
  },
  {
    title: "Makelaars",
    body: "Een pand dat verkoopklaar of bezichtigingsklaar moet zijn, zonder vertraging in uw verkoopproces.",
    href: "/makelaars",
  },
  {
    title: "Vastgoedbeheerders",
    body: "Snelle, betrouwbare oplevering tussen huurperiodes in, met vaste kwaliteit per pand.",
    href: "/vastgoedbeheerders",
  },
  {
    title: "Woningcorporaties",
    body: "Gestructureerde mutatiebegeleiding op schaal, met heldere rapportage per woning.",
    href: "/woningcorporaties",
  },
];

export default function ForWhom() {
  return (
    <section id="voor-wie" className="bg-surface-light py-24">
      <div className="container-om">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl"
        >
          Voor wie
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col justify-between rounded-om border border-surface-mid bg-white p-8 transition-all hover:border-orange/40 hover:shadow-md"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {a.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{a.body}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange">
                Meer informatie
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
