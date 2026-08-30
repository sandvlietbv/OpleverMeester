"use client";

import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <section className="bg-white py-24">
      <div className="container-om">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl"
        >
          Ervaringen van klanten
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-om border border-surface-mid bg-surface-light p-8"
        >
          <p className="font-display text-lg font-semibold text-navy">Google Reviews volgen.</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            OpleverMeester is in opbouw. Zodra er echte beoordelingen zijn, tonen we die hier. We plaatsen geen verzonnen reviews of beoordelingen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
