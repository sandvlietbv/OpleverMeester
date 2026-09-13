"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Prijzen", href: "/#prijzen" },
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Over ons", href: "/over-ons" },
];

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_HREF = "tel:+31645316851";
const WHATSAPP_HREF = "https://wa.me/31645316851?text=Hallo%20OpleverMeester%2C%20ik%20wil%20graag%20mijn%20situatie%20bespreken.";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-mid/60 bg-white/95 backdrop-blur-md">
      <div className="container-om flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-navy md:text-xl">
          Oplever<span className="text-orange">Meester</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hoofdmenu">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-navy/75 transition-colors hover:text-orange">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={PHONE_HREF} className="text-sm font-semibold text-navy hover:text-orange" aria-label={`Bel OpleverMeester op ${PHONE_DISPLAY}`}>
            {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="rounded-om border border-surface-mid px-4 py-2.5 text-sm font-semibold text-navy hover:border-orange">
            WhatsApp
          </a>
          <a href="/#intake" className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-light">
            Start intake
          </a>
        </div>

        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-om text-navy lg:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobiel-menu" aria-label={open ? "Menu sluiten" : "Menu openen"}>
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-navy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div id="mobiel-menu" className="border-t border-surface-mid bg-white lg:hidden">
          <nav className="container-om flex flex-col gap-1 py-4" aria-label="Mobiel menu">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-om px-2 py-3 text-base font-medium text-navy hover:bg-surface-light" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={PHONE_HREF} className="rounded-om bg-navy px-4 py-3 text-center text-sm font-semibold text-white">Bel {PHONE_DISPLAY}</a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="rounded-om border border-surface-mid px-4 py-3 text-center text-sm font-semibold text-navy">WhatsApp</a>
            </div>
            <a href="/#intake" className="mt-2 rounded-om bg-orange px-5 py-3 text-center text-base font-semibold text-white" onClick={() => setOpen(false)}>
              Start intake
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
