"use client";

import { Phone } from "lucide-react";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

type Props = { variant?: "header" | "hero" | "sticky"; source: string };

const PHONE_DISPLAY = "06 45 31 68 51";

export default function UrgentCallButton({ variant = "sticky", source }: Props) {
  const className = variant === "hero"
    ? "inline-flex min-h-14 items-center justify-center gap-3 rounded-om border border-orange-light/70 px-6 py-3.5 font-semibold text-orange-light"
    : variant === "header"
      ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-om bg-navy px-5 py-2.5 text-sm font-semibold text-white"
      : "group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/50 bg-white/95 py-2.5 pl-2.5 pr-5 text-sm font-semibold text-navy shadow-[0_14px_40px_rgba(11,29,51,0.18)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(11,29,51,0.22)]";

  const label = variant === "sticky" ? "Spoed? Bel direct" : `Bel ${PHONE_DISPLAY}`;
  const ariaLabel = variant === "sticky" ? "Spoed? Bel direct met OpleverMeester" : `Bel OpleverMeester op ${PHONE_DISPLAY}`;

  return (
    <a
      href="tel:+31645316851"
      onClick={() => window.gtag?.("event", "urgent_call_clicked", { source })}
      className={className}
      aria-label={ariaLabel}
    >
      <span className={variant === "sticky" ? "relative flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white" : "flex items-center justify-center"}>
        {variant === "sticky" && <span className="om-pulse-ring absolute inset-0 rounded-full border border-orange/70" aria-hidden="true" />}
        <Phone className="relative h-4 w-4" />
      </span>
      <span>{label}</span>
    </a>
  );
}
