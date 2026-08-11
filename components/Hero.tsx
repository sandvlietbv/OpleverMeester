"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2, Gauge, PhoneCall, Sparkles } from "lucide-react";

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

const quickActions = [
  { label: "Bel direct", href: `tel:${PHONE_TEL}`, icon: PhoneCall },
  { label: "Offerte aanvragen", href: "#contact", icon: ArrowRight },
  { label: "Spoed nodig?", href: "#faq", icon: Gauge },
];

const appModules = [
  "Woningontruiming",
  "Opleverklaar maken",
  "Schoonmaak",
  "Kleine herstelwerkzaamheden",
  "Afvoer inboedel",
  "Spoedoplevering",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <DoorMotif className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 opacity-[0.08] lg:block" />

      <div className="container-om relative grid min-h-[86vh] items-center gap-14 py-20 md:min-h-[80vh] lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
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
            className="mt-8 flex flex-wrap gap-3"
          >
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              >
                <action.icon className="h-4 w-4 text-orange-light" />
                {action.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.52}
            variants={fadeUp}
            className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3"
          >
            {[
              "Vast aanspreekpunt",
              "Afspraak is afspraak",
              "Landelijk actief",
            ].map((item) => (
              <div
                key={item}
                className="rounded-om border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.22}
          variants={fadeUp}
          className="relative"
        >
          <div className="rounded-[24px] border border-white/10 bg-white/6 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-6">
            <div className="flex items-center justify-between rounded-om border border-white/10 bg-navy-light/70 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">OpleverMeester</p>
                <p className="mt-1 text-sm font-semibold text-white">Projectstatus live</p>
              </div>
              <div className="rounded-full bg-orange/15 px-3 py-1 text-xs font-semibold text-orange-light">
                Binnen 24 uur reactie
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-om border border-white/10 bg-white/6 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-white/60">Snelle acties</p>
                    <h2 className="mt-1 font-display text-xl font-semibold text-white">Direct starten</h2>
                  </div>
                  <Sparkles className="h-6 w-6 text-orange-light" />
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    ["Telefonisch", "Snel schakelen bij spoed", CalendarDays],
                    ["WhatsApp", "Korte opname of vraag", CheckCircle2],
                    ["Offerte", "Vrijblijvend en helder", ArrowRight],
                  ].map(([title, body, Icon]) => (
                    <div key={title as string} className="flex items-center gap-3 rounded-om bg-white/5 px-4 py-3">
                      <Icon className="h-5 w-5 text-orange-light" />
                      <div>
                        <p className="text-sm font-semibold text-white">{title as string}</p>
                        <p className="text-xs text-white/60">{body as string}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-om border border-white/10 bg-white p-5 text-navy">
                <p className="text-sm font-medium text-muted">Diensten als modules</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {appModules.map((module) => (
                    <span
                      key={module}
                      className="rounded-full border border-surface-mid bg-surface-light px-3 py-2 text-sm font-medium text-navy"
                    >
                      {module}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-om bg-surface-light p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">Preview</p>
                  <p className="mt-2 font-display text-lg font-semibold text-navy">Eén overzicht van aanvraag tot oplevering</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    U ziet in één oogopslag wat nodig is, wat al is geregeld en wanneer de ruimte klaar is.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
      <path d="M240 40 L340 70 L340 330 L240 360" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="220" cy="205" r="4" fill="white" />
    </svg>
  );
}
