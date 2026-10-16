"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type VisualProofProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
  imagePosition?: string;
  imageFirst?: boolean;
  variant?: "balanced" | "editorial" | "compact" | "business" | "process";
  considerations?: string[];
};

const VARIANTS = {
  balanced: { section: "bg-white py-16 md:py-24", grid: "lg:grid-cols-[.9fr_1.1fr]", figure: "shadow-[0_22px_60px_rgba(11,29,51,0.12)]", media: "aspect-[16/10] sm:aspect-[16/9]" },
  editorial: { section: "bg-white py-16 md:py-24", grid: "lg:grid-cols-[1.03fr_.97fr] lg:gap-16", figure: "border border-surface-mid shadow-[0_18px_50px_rgba(11,29,51,0.09)]", media: "aspect-[4/3]" },
  compact: { section: "bg-surface-light py-16 md:py-20", grid: "lg:grid-cols-[1.18fr_.82fr]", figure: "border border-surface-mid shadow-[0_14px_38px_rgba(11,29,51,0.08)] lg:max-w-md lg:justify-self-end", media: "aspect-[4/3]" },
  business: { section: "bg-surface-light py-16 md:py-24", grid: "lg:grid-cols-[1.12fr_.88fr]", figure: "border border-navy/10 shadow-[0_18px_48px_rgba(11,29,51,0.1)]", media: "aspect-[16/10]" },
  process: { section: "bg-white py-16 md:py-24", grid: "lg:grid-cols-[1.18fr_.82fr]", figure: "border border-surface-mid shadow-[0_18px_48px_rgba(11,29,51,0.1)]", media: "aspect-[3/2]" },
};

export default function VisualProof({ src, alt, eyebrow, title, text, imagePosition = "center", imageFirst = false, variant = "balanced", considerations = [] }: VisualProofProps) {
  const style = VARIANTS[variant];
  const reduceMotion = useReducedMotion();

  return (
    <section className={style.section} aria-labelledby={`${src.replace(/\W/g, "-")}-title`}>
      <div className={`container-om grid items-center gap-10 lg:gap-14 ${style.grid}`}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5 }}
          className={imageFirst ? "lg:order-2" : "lg:order-1"}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">{eyebrow}</p>
          <h2 id={`${src.replace(/\W/g, "-")}-title`} className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-[-0.035em] text-navy md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{text}</p>
          {considerations.length > 0 && (
            <div className="mt-8 border-t border-surface-mid pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">We houden rekening met</p>
              <ul className="mt-4 grid gap-x-7 gap-y-3 text-base leading-7 text-muted sm:grid-cols-2">
                {considerations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.72rem] h-0.5 w-5 shrink-0 bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98, x: imageFirst ? -16 : 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-[24px] bg-surface-light ${style.figure} ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className={`relative ${style.media}`}>
            <Image src={src} alt={alt} fill sizes={variant === "compact" ? "(min-width: 1024px) 34vw, 100vw" : "(min-width: 1024px) 54vw, 100vw"} className="object-cover transition-transform duration-700 hover:scale-[1.015]" style={{ objectPosition: imagePosition }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/[0.16] via-transparent to-transparent" />
          </div>
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 top-4 h-3 w-3 rounded-full bg-orange shadow-[0_0_0_8px_rgba(231,111,44,0.12)]"
          />
        </motion.figure>
      </div>
    </section>
  );
}
