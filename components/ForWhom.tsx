"use client";

import { motion } from "framer-motion";

const AUDIENCES = [
  {
    title: "Particulieren",
    body: "Na een overlijden, verhuizing, scheiding of verkoop. Wij nemen de praktische last uit handen op een moment dat daar geen ruimte voor is.",
  },
  {
    title: "Makelaars",
    body: "Een pand dat verkoopklaar of bezichtigingsklaar moet zijn, zonder vertraging in uw verkoopproces.",
  },
  {
    title: "Vastgoedbeheerders",
    body: "Snelle, betrouwbare oplevering tussen huurperiodes in, met vaste kwaliteit per pand.",
  },
  {
    title: "Woningcorporaties",
    body: "Gestructureerde mutatiebegeleiding op schaal, met heldere rapportage per woning.",
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
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-om border border-surface-mid bg-white p-8"
            >
              <h3 className="font-display text-xl font-semibold text-navy">
                {a.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{a.body}</p>
              <a href="#intake" className="mt-6 inline-flex text-sm font-semibold text-orange hover:underline">
                Bespreek uw situatie →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
