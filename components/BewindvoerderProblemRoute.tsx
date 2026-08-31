"use client";

import { useState } from "react";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

type Situation = {
  id: string;
  title: string;
  question: string;
  first: string;
  collect: string;
  action: string;
};

export default function BewindvoerderProblemRoute({ situations }: { situations: Situation[] }) {
  const [selected, setSelected] = useState<Situation | null>(null);

  function choose(s: Situation) {
    window.gtag?.("event", "problem_route_selected", { problem_id: s.id, source_page: window.location.pathname });
    if (s.id === "opleverpunten") {
      document.getElementById("opleverplan")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setSelected(s);
  }

  function toIntake(s: Situation) {
    sessionStorage.setItem("oplevermeester_intake_context", JSON.stringify({
      situation: "Cliëntwoning opleveren",
      type: "Woning",
      eyebrow: "Uw dossier",
      title: s.title,
      text: "Het praktische probleem is duidelijk. Geef alleen nog de ontbrekende gegevens door.",
      note: `Praktisch probleem: ${s.title}`,
    }));
    window.gtag?.("event", "problem_route_to_intake", { problem_id: s.id, source_page: window.location.pathname });
    document.getElementById("intake")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return <section id="route" className="bg-white py-16 md:py-20"><div className="container-om max-w-5xl">
    {!selected ? <>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Kies wat nu geregeld moet worden</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-navy">Waar loopt het dossier nu op vast?</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">Kies één situatie. U krijgt daarna alleen de eerstvolgende praktische route te zien.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">{situations.map(s => <button key={s.id} type="button" onClick={() => choose(s)} className="group rounded-om border border-surface-mid p-6 text-left transition hover:border-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"><h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{s.question}</p><span className="mt-4 inline-block text-sm font-semibold text-orange">{s.id === "opleverpunten" ? "Maak direct een uitvoeringsplan →" : "Bekijk wat nu nodig is →"}</span></button>)}</div>
    </> : <article className="rounded-om bg-surface-light p-6 md:p-8">
      <button type="button" onClick={() => setSelected(null)} className="text-sm font-semibold text-muted">← Kies ander probleem</button>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-orange">{selected.title}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-navy">{selected.question}</h2>
      <div className="mt-7 grid gap-5 md:grid-cols-3"><div><p className="font-semibold text-navy">1. Eerst doen</p><p className="mt-2 text-sm leading-relaxed text-muted">{selected.first}</p></div><div><p className="font-semibold text-navy">2. Verzamel dit</p><p className="mt-2 text-sm leading-relaxed text-muted">{selected.collect}</p></div><div><p className="font-semibold text-navy">3. Daarna</p><p className="mt-2 text-sm leading-relaxed text-muted">{selected.action}</p></div></div>
      <button type="button" onClick={() => toIntake(selected)} className="mt-7 rounded-om bg-orange px-6 py-3.5 font-semibold text-white">Leg dit dossier voor →</button>
    </article>}
  </div></section>;
}
