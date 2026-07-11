"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Hoe snel kunnen jullie starten?",
    a: "Bij spoed kunnen we vaak binnen enkele dagen starten. Neem contact op met uw situatie, dan geven we direct aan wat mogelijk is.",
  },
  {
    q: "Wat kost een ontruiming of oplevering?",
    a: "Dat hangt af van de omvang en staat van de ruimte. Na een korte opname — telefonisch of ter plaatse — ontvangt u een vrijblijvende, vaste offerte.",
  },
  {
    q: "Werken jullie ook in het weekend of met spoed?",
    a: "Ja. Voor spoedopleveringen schakelen we snel, ook buiten reguliere werkdagen. Geef dit aan bij uw aanvraag.",
  },
  {
    q: "Wat gebeurt er met de inboedel?",
    a: "Bruikbare spullen geven we waar mogelijk een tweede leven, de rest voeren we gescheiden en verantwoord af.",
  },
  {
    q: "In welke regio's zijn jullie actief?",
    a: "We zijn landelijk inzetbaar, met een vaste basis in Noord-Nederland.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-light py-24">
      <div className="container-om max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl"
        >
          Veelgestelde vragen
        </motion.h2>

        <div className="mt-10 divide-y divide-surface-mid rounded-om border border-surface-mid bg-white">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-display text-base font-semibold text-navy">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-orange transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    className="px-6 pb-5 leading-relaxed text-muted"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
