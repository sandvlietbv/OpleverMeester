"use client";

import { motion } from "framer-motion";
import {
  Home,
  Sparkles,
  Wrench,
  Truck,
  Building2,
  Warehouse,
  Package,
  Zap,
} from "lucide-react";

const SERVICES = [
  { icon: Home, title: "Woningontruiming", body: "Volledige ontruiming, respectvol en zorgvuldig." },
  { icon: Sparkles, title: "Opleverklaar maken", body: "Van sleuteloverdracht tot oplevering, precies zoals afgesproken." },
  { icon: Sparkles, title: "Schoonmaak", body: "Bezemschoon tot diepgereinigd, naar wens van de ontvangende partij." },
  { icon: Wrench, title: "Kleine herstelwerkzaamheden", body: "Kleine reparaties zodat de ruimte direct in orde is." },
  { icon: Truck, title: "Afvoer inboedel", body: "Gescheiden en verantwoord afgevoerd, inclusief hergebruik waar mogelijk." },
  { icon: Building2, title: "Bedrijfspanden", body: "Kantoren en bedrijfsruimtes leeg en opleverklaar." },
  { icon: Warehouse, title: "Garageboxen & opslagruimtes", body: "Ook de kleinere ruimtes pakken we compleet aan." },
  { icon: Zap, title: "Spoedopleveringen", body: "Een strakke deadline? Wij schakelen snel." },
];

export default function Services() {
  return (
    <section id="diensten" className="bg-white py-24">
      <div className="container-om">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl"
        >
          Diensten
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 max-w-2xl leading-relaxed text-muted"
        >
          Eén partij voor het complete opleverproces — u schakelt niet met
          losse partijen, maar met één aanspreekpunt.
        </motion.p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-om border border-surface-mid bg-surface-mid sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="bg-white p-7"
            >
              <s.icon className="h-6 w-6 text-orange" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-base font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
