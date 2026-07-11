"use client";

import { motion } from "framer-motion";
import { HandCoins, MessageCircle, CheckCircle2 } from "lucide-react";

const REASONS = [
  {
    icon: HandCoins,
    title: "Wij nemen alles uit handen",
    body: "Van eerste opname tot de laatste bezemschoon oplevering. U hoeft niets zelf te regelen of te coördineren.",
  },
  {
    icon: MessageCircle,
    title: "Heldere communicatie",
    body: "Eén vast aanspreekpunt, duidelijke afspraken en updates zonder dat u erom hoeft te vragen.",
  },
  {
    icon: CheckCircle2,
    title: "Oplevering zoals afgesproken",
    body: "Wat we toezeggen, komen we na — op de afgesproken datum, in de afgesproken staat.",
  },
];

export default function WhyUs() {
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
          Waarom OpleverMeester
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-om border border-surface-mid bg-surface-light p-8 transition-shadow hover:shadow-md"
            >
              <reason.icon className="h-8 w-8 text-orange" strokeWidth={1.75} />
              <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                {reason.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{reason.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
