"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Situaties", href: "/#situaties" },
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
    <header className="sticky top-0 z-50 border-b border-surface-mid/60 bg-white/[0.92] shadow-[0_8px_30px_rgba(11,29,51,0.04)] backdrop-blur-xl">
      <div className="container-om flex h-[72px] items-center justify-between lg:h-[84px]">
        <Link href="/" className="font-display text-xl font-semibold tracking-[-0.03em] text-navy md:text-2xl">
          Oplever<span className="text-orange">Meester</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hoofdmenu">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-[15px] font-medium text-navy/70 transition-colors hover:text-orange">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={PHONE_HREF} className="group flex items-center gap-2.5 rounded-full px-2 py-2 text-sm font-semibold text-navy hover:text-orange" aria-label={`Bel OpleverMeester op ${PHONE_DISPLAY}`}>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white transition-transform group-hover:scale-105">
              <span className="om-pulse-ring absolute inset-0 rounded-full border border-navy/30" aria-hidden="true" />
              <Phone className="relative h-4 w-4" />
            </span>
            <span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.08em] text-muted">Bel direct</span>
              <span className="block text-sm">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-om border border-surface-mid px-4 py-3 text-sm font-semibold text-navy transition hover:border-orange hover:bg-orange/[0.04]">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a href="/#intake" className="inline-flex min-h-12 items-center rounded-om bg-orange px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(231,111,44,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-light">
            Ontvang prijsindicatie
          </a>
        </div>

        <button type="button" className="flex h-12 w-12 items-center justify-center rounded-om text-navy lg:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobiel-menu" aria-label={open ? "Menu sluiten" : "Menu openen"}>
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
          <nav className="container-om flex flex-col gap-1 py-5" aria-label="Mobiel menu">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-om px-2 py-3.5 text-lg font-semibold text-navy hover:bg-surface-light" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={PHONE_HREF} className="rounded-om bg-navy px-4 py-3.5 text-center text-sm font-semibold text-white">Bel direct</a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="rounded-om border border-surface-mid px-4 py-3.5 text-center text-sm font-semibold text-navy">WhatsApp</a>
            </div>
            <a href="/#intake" className="mt-2 rounded-om bg-orange px-5 py-4 text-center text-base font-semibold text-white" onClick={() => setOpen(false)}>
              Ontvang prijsindicatie
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
