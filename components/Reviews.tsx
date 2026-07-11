"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/**
 * LET OP: dit zijn placeholder-kaarten, geen echte klantreviews.
 * Zodra Google Reviews gekoppeld is (Google Places API / widget),
 * vervang je REVIEW_PLACEHOLDERS door de echte data-fetch.
 * Verzin nooit reviews met namen/citaten die niet echt zijn afgegeven.
 */
const REVIEW_PLACEHOLDERS = [
  { label: "Gemiddelde beoordeling", value: "Binnenkort zichtbaar" },
  { label: "Bron", value: "Google Reviews" },
];

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
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-om border border-surface-mid bg-surface-light p-8 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-orange text-orange" />
              ))}
            </div>
            <span className="text-sm text-muted">
              {REVIEW_PLACEHOLDERS[0].value} op {REVIEW_PLACEHOLDERS[1].value}
            </span>
          </div>
          <a
            href="https://g.page/r/review"
            className="text-sm font-semibold text-orange hover:underline"
          >
            Bekijk al onze reviews →
          </a>
        </motion.div>

        <p className="mt-4 text-sm text-muted">
          Deze sectie koppelen we aan echte Google Reviews zodra er
          voldoende beoordelingen binnen zijn.
        </p>
      </div>
    </section>
  );
}
