"use client";

import Link from "next/link";
import { PhoneChatDemo } from "@/components/PrivateWhatsApp";
import { PHOTO_WHATSAPP_HREF } from "@/lib/whatsapp";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Building2 } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="brand-flow brand-surface relative overflow-hidden text-navy">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-28 top-28 h-72 w-72 rounded-full border border-orange/[0.10]" />
        <div className="absolute -left-8 top-48 h-36 w-36 rounded-full border border-orange/[0.08]" />
        <div className="absolute right-[8%] top-12 h-px w-40 bg-gradient-to-r from-transparent via-orange-light/70 to-transparent" />
      </div>

      <div className="container-om relative grid min-h-[calc(100svh-92px)] items-center gap-12 py-14 md:py-20 lg:min-h-[72vh] lg:grid-cols-[1.02fr_.98fr] lg:gap-14 lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-orange md:text-sm">
            Wij regelen. Jij gaat verder.
          </p>
          <h1 className="max-w-4xl font-display text-[3.35rem] font-normal leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[4.85rem]">
            Woning leeghalen? Wij regelen de rest.
          </h1>
          <p className="mt-7 max-w-2xl text-[1.08rem] leading-8 text-muted md:text-[1.22rem] md:leading-9">
            Van ontruiming tot oplevering. Eén aanspreekpunt, duidelijke kosten vooraf en een woning die klaar is voor overdracht.
          </p>

          <div className="mt-10 grid max-w-[640px] gap-3 sm:grid-cols-2 sm:items-stretch">
            <a href={PHOTO_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-16 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b36f00] to-[#d3920f] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_36px_rgba(169,104,0,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(169,104,0,0.28)]">
              Particulier: stuur foto&apos;s
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/zakelijk" className="inline-flex min-h-16 items-center justify-center gap-2 rounded-full border border-orange/55 bg-white/90 px-7 py-4 text-base font-semibold text-navy shadow-sm transition hover:border-orange hover:bg-[#fffaf0]">
              <Building2 className="h-5 w-5" />
              Zakelijk: offerte aanvragen
            </Link>
          </div>

          <div className="mt-8 hidden flex-wrap gap-x-6 gap-y-3 text-sm text-muted sm:flex">
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
          className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none"
          aria-label="Voorbeeld van een WhatsApp-aanvraag met foto's voor woningontruiming"
        >
          <PhoneChatDemo />
        </motion.aside>
      </div>
    </section>
  );
}
