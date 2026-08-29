"use client";

import { motion } from "framer-motion";

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_TEL = "+31645316851";
const fadeUp = { hidden: { opacity: 0, y: 14 }, show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] } }) };

export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="container-om grid min-h-[66vh] items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <motion.p initial="hidden" animate="show" custom={0} variants={fadeUp} className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-orange-light">OpleverMeester</motion.p>
          <motion.h1 initial="hidden" animate="show" custom={0.06} variants={fadeUp} className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4rem]">Ruimte opleveren?<br />Wij regelen wat nodig is.</motion.h1>
          <motion.p initial="hidden" animate="show" custom={0.12} variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">Woning, bedrijfspand, kantoor of opslagruimte. Geef de situatie door en wij kijken direct wat er nodig is om de ruimte goed op te leveren.</motion.p>
          <motion.div initial="hidden" animate="show" custom={0.18} variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#intake" className="rounded-om bg-orange px-7 py-3.5 text-center font-semibold text-white hover:bg-orange-light">Start intake</a><a href={`tel:${PHONE_TEL}`} className="rounded-om border border-white/25 px-7 py-3.5 text-center font-semibold text-white hover:border-white/50">Bel {PHONE_DISPLAY}</a></motion.div>
        </div>
        <motion.aside initial="hidden" animate="show" custom={0.22} variants={fadeUp} className="border-l border-white/15 pl-7 lg:pl-9">
          <p className="text-sm font-semibold text-orange-light">Van probleem naar oplevering</p>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-white/70"><p><strong className="block text-base text-white">Eén aanspreekpunt</strong>We houden de lijnen kort en maken duidelijk wat er moet gebeuren.</p><p><strong className="block text-base text-white">Duidelijke planning</strong>U weet waar u aan toe bent en wanneer de ruimte klaar moet zijn.</p><p><strong className="block text-base text-white">Opleveren zoals afgesproken</strong>We sturen op het eindresultaat, niet op losse klusjes.</p></div>
        </motion.aside>
      </div>
    </section>
  );
}
