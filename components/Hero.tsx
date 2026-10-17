"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";

const PHONE_DISPLAY = "06 45 31 68 51";
const WHATSAPP_HREF = "https://wa.me/31645316851?text=Hallo%20OpleverMeester%2C%20ik%20heb%20een%20vraag%20over%20het%20leeghalen%20en%20opleveren%20van%20een%20woning.";

const CHECKS = ["Inboedel verwijderen", "Schoon en opleverklaar", "Afgesproken herstelpunten"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="brand-flow brand-surface relative overflow-hidden text-navy">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-28 top-28 h-72 w-72 rounded-full border border-orange/[0.10]" />
        <div className="absolute -left-8 top-48 h-36 w-36 rounded-full border border-orange/[0.08]" />
        <div className="absolute right-[8%] top-12 h-px w-40 bg-gradient-to-r from-transparent via-orange-light/70 to-transparent" />
      </div>

      <div className="container-om relative grid min-h-[72vh] items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.02fr_.98fr] lg:gap-14 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-orange">
            Wij regelen. Jij gaat verder.
          </p>
          <h1 className="max-w-4xl font-display text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[4.7rem]">
            Woning leeghalen? Wij regelen de complete <span className="text-orange-light">oplevering.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-[1.28rem] md:leading-9">
            Van inboedel tot schoonmaak en afgesproken herstelwerk. Eén aanspreekpunt. Duidelijke kosten vooraf. Klaar voor overdracht.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#intake" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-om bg-orange px-7 py-4 text-base font-semibold text-white shadow-[0_14px_35px_rgba(169,104,0,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-light hover:text-navy">
              Ontvang een prijsindicatie
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-om border border-surface-mid bg-white px-6 py-4 text-base font-semibold text-navy shadow-sm transition hover:border-orange hover:bg-[#fffaf0]">
              <MessageCircle className="h-5 w-5" />
              Stel een vraag via WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {["Duidelijke projectprijs", "Eén aanspreekpunt", "Planning vóór uitvoering"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange/[0.10] text-orange-light"><Check className="h-3.5 w-3.5" /></span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, x: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          aria-label="Het resultaat van een oplevering"
        >
          <div className="relative aspect-[4/4.1] overflow-hidden rounded-[28px] bg-surface-light shadow-[0_32px_90px_rgba(70,55,25,0.18)] sm:aspect-[16/11] lg:aspect-[4/4.4] xl:aspect-[16/12]">
            <Image
              src="/images/visual-proof/homepage-hero.webp"
              alt="Leeg opgeleverde woonkamer met daglicht"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 52%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2823]/[0.16] via-transparent to-white/[0.04]" />
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 bottom-7 hidden w-[250px] rounded-[20px] border border-[#eadfce] bg-white/[0.97] p-5 text-navy shadow-[0_18px_55px_rgba(11,29,51,0.20)] backdrop-blur md:block lg:-left-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">Complete oplevering</p>
            <div className="mt-3 space-y-2.5">
              {CHECKS.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange/10 text-orange"><Check className="h-3.5 w-3.5" /></span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.a
            href="tel:+31645316851"
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
            className="absolute -right-2 top-6 flex items-center gap-3 rounded-full border border-[#eadfce] bg-white/[0.97] py-2.5 pl-3 pr-4 text-navy shadow-[0_14px_45px_rgba(11,29,51,0.18)] backdrop-blur md:-right-5 lg:-right-7"
            aria-label={`Bel OpleverMeester op ${PHONE_DISPLAY}`}
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white">
              <span className="om-pulse-ring absolute inset-0 rounded-full border border-orange/70" aria-hidden="true" />
              <Phone className="relative h-5 w-5" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-xs font-medium text-muted">Direct contact</span>
              <span className="block text-sm font-semibold">{PHONE_DISPLAY}</span>
            </span>
          </motion.a>

          <div className="absolute -bottom-4 right-5 rounded-full border border-[#eadfce] bg-[#262421]/[0.94] px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur">
            Klaar voor overdracht
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
