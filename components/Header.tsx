"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Diensten", href: "#diensten" },
  { label: "Voor wie", href: "#voor-wie" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Over ons", href: "#vertrouwen" },
  { label: "Veelgestelde vragen", href: "#faq" },
];

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_TEL = "+31645316851";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-mid/60 bg-white/90 backdrop-blur-md">
      <div className="container-om flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-navy md:text-xl"
        >
          Oplever<span className="text-orange">Meester</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hoofdmenu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-sm font-semibold text-navy transition-colors hover:text-orange"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-orange-light"
          >
            Vraag offerte aan
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-om text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 bg-navy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-6 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 bg-navy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div id="mobiel-menu" className="border-t border-surface-mid bg-white md:hidden">
          <nav className="container-om flex flex-col gap-1 py-4" aria-label="Mobiel menu">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-om px-2 py-3 text-base font-medium text-navy hover:bg-surface-light"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="px-2 py-3 text-base font-semibold text-navy"
            >
              Bel: {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="mt-2 rounded-om bg-orange px-5 py-3 text-center text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Vraag offerte aan
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
