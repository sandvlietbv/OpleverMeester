"use client";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

type Props = { variant?: "header" | "hero" | "sticky"; source: string };

const PHONE_DISPLAY = "06 45 31 68 51";

export default function UrgentCallButton({ variant = "sticky", source }: Props) {
  const className = variant === "hero"
    ? "inline-flex items-center justify-center gap-2 rounded-om border border-orange-light/80 px-6 py-3.5 font-semibold text-orange-light"
    : variant === "header"
      ? "inline-flex items-center justify-center gap-2 rounded-om bg-navy px-5 py-2.5 text-sm font-semibold text-white"
      : "inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 hover:bg-orange-light";

  const label = variant === "sticky" ? "Spoed? Bel direct" : `Bel ${PHONE_DISPLAY}`;
  const ariaLabel = variant === "sticky" ? "Spoed? Bel direct met OpleverMeester" : `Bel OpleverMeester op ${PHONE_DISPLAY}`;

  return (
    <a
      href="tel:+31645316851"
      onClick={() => window.gtag?.("event", "urgent_call_clicked", { source })}
      className={className}
      aria-label={ariaLabel}
    >
      <span aria-hidden="true">⚡</span>
      <span>{label}</span>
    </a>
  );
}
