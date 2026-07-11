"use client";

import { motion } from "framer-motion";

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_TEL = "+31645316851";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Signature motief: lijnicoon van een deur die opent — 'ruimte wordt klaar' */}
      <DoorMotif className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 opacity-[0.08] lg:block" />

      <div className="container-om relative flex min-h-[86vh] flex-col justify-center py-24 md:min-h-[80vh]">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-orange-light"
        >
          Opleverpartner voor heel Nederland
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-[4.25rem]"
        >
          Elke ruimte.
          <br />
          Zorgeloos opleverklaar.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl"
        >
          Van woning tot bedrijfspand. Wij regelen het complete opleverproces
          van A tot Z, zodat u zich kunt richten op de volgende stap.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.32}
          variants={fadeUp}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="rounded-om bg-orange px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-orange/20 transition-transform hover:scale-[1.02] hover:bg-orange-light"
          >
            Vraag vrijblijvend een offerte aan
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-om border border-white/25 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Bel direct — {PHONE_DISPLAY}
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.44}
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60"
        >
          <span>Vast aanspreekpunt</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Afspraak is afspraak</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Landelijk actief</span>
        </motion.div>
      </div>
    </section>
  );
}

function DoorMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="60" y="40" width="180" height="320" rx="4" stroke="white" strokeWidth="2" />
      <path
        d="M240 40 L340 70 L340 330 L240 360"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="220" cy="205" r="4" fill="white" />
    </svg>
  );
}
