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
  function trackGoogleReviewClick(action: "view") {
    window.gtag?.("event", "google_review_click", {
      source: "homepage_reviews",
      action,
    });
  }

  return (
    <section id="reviews" className="bg-white py-14 md:py-16">
      <div className="container-om">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="rounded-om border border-surface-mid bg-surface-light px-6 py-7 shadow-sm md:flex md:items-center md:justify-between md:gap-10 md:px-8 md:py-8"
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-surface-mid bg-white font-display text-base font-bold text-navy shadow-sm"
              aria-hidden="true"
            >
              G
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">Google Reviews</p>
              <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                Ervaringen van klanten
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                Bekijk beoordelingen van OpleverMeester rechtstreeks bij Google.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:shrink-0">
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackGoogleReviewClick("view")}
              className="inline-flex items-center justify-center rounded-om border border-surface-mid bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              Bekijk op Google ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
