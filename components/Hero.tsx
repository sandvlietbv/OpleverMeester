"use client";

import { motion } from "framer-motion";

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_TEL = "+31645316851";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <DoorMotif className="pointer-events-none absolute -right-24 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 opacity-[0.07] lg:block" />
      <div className="container-om relative flex min-h-[72vh] flex-col justify-center py-20 md:min-h-[70vh] md:py-24">
        <motion.p initial="hidden" animate="show" custom={0} variants={fadeUp} className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-orange-light">
          Opleveren zonder gedoe
        </motion.p>
        <motion.h1 initial="hidden" animate="show" custom={0.08} variants={fadeUp} className="max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight md:text-6xl lg:text-[4.1rem]">
          Woning, bedrijfspand of opslagruimte opleveren?
          <br />
          Wij pakken het met u op.
        </motion.h1>
        <motion.p initial="hidden" animate="show" custom={0.16} variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          Geef ons de belangrijkste gegevens van de locatie en de situatie. Dan weten we snel waar we over praten en kunnen we gericht met u schakelen.
        </motion.p>
        <motion.div initial="hidden" animate="show" custom={0.24} variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#intake" className="rounded-om bg-orange px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-orange/20 transition-colors hover:bg-orange-light">
            Start intake
          </a>
          <a href={`tel:${PHONE_TEL}`} className="rounded-om border border-white/25 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5">
            Direct overleggen: {PHONE_DISPLAY}
          </a>
        </motion.div>
        <motion.div initial="hidden" animate="show" custom={0.32} variants={fadeUp} className="mt-10 grid max-w-3xl gap-3 text-sm text-white/65 sm:grid-cols-3">
          <span>Vast aanspreekpunt</span>
          <span>Heldere afspraken</span>
          <span>Snel inzicht in wat nodig is</span>
        </motion.div>
      </div>
    </section>
  );
}

function DoorMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="60" y="40" width="180" height="320" rx="4" stroke="white" strokeWidth="2" />
      <path d="M240 40 L340 70 L340 330 L240 360" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="220" cy="205" r="4" fill="white" />
    </svg>
  );
}
