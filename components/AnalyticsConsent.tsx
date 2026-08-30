"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-Q12VQ3YP0M";
const CONSENT_KEY = "oplevermeester.analytics-consent";
type Consent = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function setAnalyticsDisabled(disabled: boolean) {
  Reflect.set(window, `ga-disable-${GA_MEASUREMENT_ID}`, disabled);
}

function startAnalytics() {
  if (typeof window === "undefined") return;
  setAnalyticsDisabled(false);
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  if (!document.querySelector(`script[data-oplevermeester-ga="${GA_MEASUREMENT_ID}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.dataset.oplevermeesterGa = GA_MEASUREMENT_ID;
    document.head.appendChild(script);
  }
}

function stopAnalytics() {
  if (typeof window === "undefined") return;
  setAnalyticsDisabled(true);

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || (!name.startsWith("_ga") && name !== "_gid" && name !== "_gat")) continue;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  }
}

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [loaded, setLoaded] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    const initial: Consent = stored === "accepted" || stored === "declined" ? stored : null;
    setConsent(initial);
    setLoaded(true);
    if (initial === "accepted") startAnalytics();
    else stopAnalytics();
  }, []);

  function choose(next: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, next);
    setConsent(next);
    setPreferencesOpen(false);
    if (next === "accepted") startAnalytics();
    else stopAnalytics();
  }

  if (!loaded) return null;

  if (consent && !preferencesOpen) {
    return (
      <button
        type="button"
        onClick={() => setPreferencesOpen(true)}
        className="fixed bottom-3 left-3 z-[70] rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-md hover:bg-slate-50"
      >
        Cookievoorkeuren
      </button>
    );
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:bottom-6 sm:p-6">
      <div className="space-y-3">
        <h2 className="text-base font-semibold text-slate-950">Privacyvriendelijke meting</h2>
        <p className="text-sm leading-6 text-slate-600">
          OpleverMeester gebruikt alleen met uw toestemming Google Analytics om te begrijpen welke pagina&apos;s en intakes goed werken. Zonder toestemming laden we Google Analytics niet. Functionele onderdelen van de website blijven gewoon werken.
        </p>
        <p className="text-xs leading-5 text-slate-500">
          Lees meer in onze <Link href="/privacy" className="underline underline-offset-2 hover:text-slate-800">privacyverklaring</Link>.
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => choose("declined")}
          className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Alleen noodzakelijk
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Analytics toestaan
        </button>
      </div>
    </div>
  );
}
