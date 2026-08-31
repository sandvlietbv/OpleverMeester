"use client";

import { useMemo, useState } from "react";

type Item = { id: number; text: string };

const examples = ["Vloer of laminaat verwijderen", "Woning leeg en bezemschoon maken", "Gaten of kleine herstelpunten afwerken", "Achtergebleven inboedel afvoeren"];

export default function OpleverpuntenPlan() {
  const [raw, setRaw] = useState("");
  const [deadline, setDeadline] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [generated, setGenerated] = useState(false);

  const plan = useMemo(() => items.map((item, index) => ({ ...item, order: index + 1 })), [items]);

  function generate() {
    const lines = raw.split(/\n|;/).map((line) => line.replace(/^[-•\d.)\s]+/, "").trim()).filter(Boolean);
    setItems(lines.map((text, id) => ({ id, text })));
    setGenerated(true);
    window.gtag?.("event", "opleverplan_generated", { source_page: window.location.pathname, item_count: String(lines.length) });
  }

  function sendToIntake() {
    const summary = plan.map((item) => `${item.order}. ${item.text}`).join("\n");
    sessionStorage.setItem("oplevermeester_opleverplan", JSON.stringify({ deadline, summary }));
    window.gtag?.("event", "opleverplan_to_intake", { source_page: window.location.pathname, item_count: String(items.length) });
    document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" });
  }

  return <section id="opleverplan" className="bg-white py-16 md:py-20"><div className="container-om max-w-5xl">
    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Gratis praktisch hulpmiddel</p>
    <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-navy md:text-4xl">Van inspectierapport naar een overzichtelijk uitvoeringsplan.</h2>
    <p className="mt-4 max-w-3xl leading-relaxed text-muted">Plak hieronder de opleverpunten uit het inspectierapport of typ ze over. U krijgt direct één werklijst die u kunt gebruiken om de uitvoering te organiseren. Dit is een praktisch hulpmiddel, geen juridische beoordeling van het rapport.</p>
    <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
      <div className="rounded-om border border-surface-mid bg-surface-light p-5 md:p-7">
        <label className="block text-sm font-semibold text-navy">Welke opleverpunten staan er in het rapport?<textarea rows={8} value={raw} onChange={(e) => setRaw(e.target.value)} placeholder={examples.join("\n")} className="mt-2 w-full rounded-om border border-surface-mid bg-white px-4 py-3 font-normal leading-relaxed text-navy outline-none placeholder:text-muted/60 focus:border-orange" /></label>
        <label className="mt-4 block text-sm font-semibold text-navy">Uiterste oplever- of sleuteloverdrachtsdatum <span className="font-normal text-muted">(optioneel)</span><input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="mt-2 block w-full rounded-om border border-surface-mid bg-white px-4 py-3 font-normal text-navy outline-none focus:border-orange" /></label>
        <button type="button" onClick={generate} disabled={!raw.trim()} className="mt-5 rounded-om bg-orange px-6 py-3.5 font-semibold text-white disabled:opacity-50">Maak mijn uitvoeringsplan →</button>
      </div>
      <div className="rounded-om bg-navy p-5 text-white md:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-light">Uw plan</p>
        {!generated ? <><h3 className="mt-2 font-display text-2xl font-semibold">Eerst overzicht. Dan uitvoering.</h3><p className="mt-3 text-sm leading-relaxed text-white/70">Zodra u de punten invoert, zetten we ze in één duidelijke werklijst. Daarna kunt u het dossier direct aan OpleverMeester voorleggen.</p></> : items.length === 0 ? <p className="mt-3 text-white/75">We konden nog geen afzonderlijke opleverpunten herkennen. Zet ieder punt op een nieuwe regel.</p> : <><h3 className="mt-2 font-display text-2xl font-semibold">{items.length} opleverpunt{items.length === 1 ? "" : "en"} klaar voor uitvoering</h3>{deadline && <p className="mt-2 text-sm text-white/70">Deadline: {deadline}</p>}<ol className="mt-5 space-y-3">{plan.map((item) => <li key={item.id} className="flex gap-3 rounded-om bg-white/10 p-3 text-sm leading-relaxed"><span className="font-semibold text-orange-light">{item.order}.</span><span>{item.text}</span></li>)}</ol><button type="button" onClick={sendToIntake} className="mt-6 w-full rounded-om bg-orange px-5 py-3.5 font-semibold text-white">Laat OpleverMeester dit uitvoeren →</button></>}
      </div>
    </div>
  </div></section>;
}
