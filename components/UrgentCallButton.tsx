"use client";

import { useId, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Variant = "header" | "hero" | "sticky";

type Props = {
  variant?: Variant;
  source: string;
};

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_HREF = "tel:+31645316851";

export default function UrgentCallButton({ variant = "header", source }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next) {
      window.gtag?.("event", "urgent_call_opened", { source });
    }
  }

  function trackCall() {
    window.gtag?.("event", "urgent_call_clicked", { source });
  }

  const buttonClass =
    variant === "hero"
      ? "inline-flex items-center justify-center gap-2 rounded-om border border-orange-light/80 bg-white/5 px-7 py-3.5 font-semibold text-orange-light transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-light focus:ring-offset-2 focus:ring-offset-navy"
      : variant === "sticky"
        ? "inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
        : "inline-flex items-center justify-center gap-2 rounded-om bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2";

  const panelClass =
    variant === "sticky"
      ? "absolute bottom-full right-0 mb-3 w-[min(22rem,calc(100vw-2rem))] rounded-om border border-surface-mid bg-white p-4 text-left text-navy shadow-xl"
      : variant === "header"
        ? "absolute right-0 top-full z-[70] mt-3 w-[min(22rem,calc(100vw-2rem))] rounded-om border border-surface-mid bg-white p-4 text-left text-navy shadow-xl"
        : "mt-3 max-w-md rounded-om border border-white/15 bg-white p-4 text-left text-navy shadow-xl";

  return (
    <div className="relative">
      <button
        type="button"
        className={buttonClass}
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Spoed? Bel direct met OpleverMeester"
      >
        <span aria-hidden="true">⚡</span>
        <span>Spoed? Bel direct</span>
      </button>

      {open && (
        <div id={panelId} className={panelClass} role="region" aria-live="polite">
          <p className="font-display text-base font-semibold text-navy">Spoed of een korte deadline?</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Bel direct voor kort overleg of om een afspraak te maken. We kijken meteen wat praktisch mogelijk is.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="font-display text-lg font-semibold tracking-tight text-navy">{PHONE_DISPLAY}</span>
            <a
              href={PHONE_HREF}
              onClick={trackCall}
              className="inline-flex rounded-om bg-orange px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              Bel nu
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
