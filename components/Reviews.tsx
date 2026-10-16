"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=OpleverMeester%20Groningen%200645316851";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Reviews() {
  const reduceMotion = useReducedMotion();

  function trackGoogleReviewClick(action: "view") {
    window.gtag?.("event", "google_review_click", {
      source: "homepage_reviews",
      action,
    });
  }

  return (
    <section id="reviews" className="bg-white py-20 md:py-24">
      <div className="container-om">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 border-y border-surface-mid py-9 md:grid-cols-[1fr_auto] md:items-center md:py-11"
        >
          <div className="flex items-start gap-5">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-[0_10px_30px_rgba(11,29,51,0.15)]">
              <span className="font-display text-lg font-bold">G</span>
              <motion.span
                aria-hidden="true"
                animate={reduceMotion ? undefined : { rotate: [0, 7, 0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
                className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange text-white"
              >
                <Star className="h-3.5 w-3.5 fill-current" />
              </motion.span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Google Reviews</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.035em] text-navy md:text-4xl">Bekijk ervaringen rechtstreeks bij Google.</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted">Geen losse claims van onszelf. Bekijk wat klanten publiek over OpleverMeester hebben achtergelaten.</p>
            </div>
          </div>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackGoogleReviewClick("view")}
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-om border border-surface-mid bg-white px-5 py-3.5 text-sm font-semibold text-navy transition hover:border-orange hover:text-orange"
          >
            Bekijk op Google
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
