"use client";

import { motion } from "framer-motion";

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=OpleverMeester%20Groningen%200645316851";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Reviews() {
  function trackGoogleReviewClick() {
    window.gtag?.("event", "google_review_click", { source: "homepage_reviews" });
  }

  return (
    <section id="reviews" className="bg-white py-24">
      <div className="container-om">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Beoordelingen via Google</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Echte ervaringen geven vertrouwen.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            We verzamelen klantbeoordelingen via Google. Zo blijven ervaringen openbaar, herkenbaar en door iedereen te bekijken.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid overflow-hidden rounded-om border border-surface-mid bg-surface-light md:grid-cols-[1.25fr_.75fr]"
        >
          <div className="p-8 md:p-10">
            <p className="font-display text-xl font-semibold text-navy">Heeft OpleverMeester u geholpen?</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Deel uw ervaring op Google. Een korte, eerlijke beoordeling helpt anderen die voor dezelfde keuze staan.
            </p>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={trackGoogleReviewClick}
              className="mt-6 inline-flex items-center justify-center rounded-om bg-orange px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              Review achterlaten op Google ↗
            </a>
          </div>

          <div className="flex items-center border-t border-surface-mid bg-white p-8 md:border-l md:border-t-0 md:p-10">
            <div>
              <p className="text-sm font-semibold text-navy">Waarom via Google?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Beoordelingen staan buiten onze eigen website. Daardoor kunnen bezoekers zelf de oorspronkelijke ervaring bekijken en beoordelen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
