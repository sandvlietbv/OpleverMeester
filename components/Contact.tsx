"use client";

import { useEffect, useRef, useState } from "react";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

type IntakeData = {
  situation: string;
  type: string;
  oppervlakte: string;
  inboedel: string;
  adres: string;
  plaats: string;
  datum: string;
  urgentie: string;
  bereikbaarheid: string;
  vervuiling: string;
  toelichting: string;
  naam: string;
  telefoon: string;
  email: string;
};

const EMPTY: IntakeData = { situation: "", type: "", oppervlakte: "", inboedel: "", adres: "", plaats: "", datum: "", urgentie: "", bereikbaarheid: "", vervuiling: "", toelichting: "", naam: "", telefoon: "", email: "" };
const SITUATIONS = [
  ["Woning leeghalen", "Ik wil een woning leeg en klaar laten opleveren."],
  ["Na een overlijden", "Een woning moet na een overlijden worden leeggehaald of opgeleverd."],
  ["Ik heb een inspectierapport", "Ik heb punten gekregen die vóór de oplevering geregeld moeten worden."],
  ["Huurwoning opleveren", "De woning moet klaar voor de eindinspectie of sleuteloverdracht."],
  ["Verhuizen naar een zorgwoning", "De verhuizing en oplevering van de oude woning moeten worden geregeld."],
  ["Bedrijfspand opleveren", "Een bedrijfsruimte moet leeg of opleverklaar."],
  ["Ik heb snel hulp nodig", "De eindinspectie, sleuteloverdracht of andere deadline komt dichtbij."],
  ["Iets anders", "Mijn situatie staat hier niet tussen. Ik leg kort uit wat er speelt."],
];
const STEPS = ["Uw situatie", "De ruimte", "Planning", "Indicatie & contact"];

type Context = { situation: string; type?: string; eyebrow: string; title: string; text: string };
const ROUTE_CONTEXT: Record<string, Context> = {
  "/huurwoning-opleveren": { situation: "Huurwoning opleveren", type: "Woning", eyebrow: "Uw huurwoning", title: "We weten waarvoor u komt.", text: "De woning moet worden opgeleverd. Geef alleen nog de gegevens door die we nodig hebben." },
  "/huis-leeghalen-na-overlijden": { situation: "Na een overlijden", type: "Woning", eyebrow: "Woning na overlijden", title: "We weten waarvoor u komt.", text: "U hoeft uw situatie niet opnieuw uit te leggen. We vragen alleen wat nodig is om u verder te helpen." },
  "/spoedontruiming": { situation: "Ik heb snel hulp nodig", eyebrow: "Spoed", title: "We weten dat er weinig tijd is.", text: "Geef de ruimte en deadline door. Dan beoordelen we wat praktisch mogelijk is." },
  "/bedrijfsontruiming": { situation: "Bedrijfspand opleveren", type: "Bedrijfspand", eyebrow: "Bedrijfsruimte", title: "We weten waarvoor u komt.", text: "Geef alleen nog de praktische gegevens door die nodig zijn voor de oplevering." },
  "/inspectierapport-woning-wat-nu": { situation: "Ik heb een inspectierapport", type: "Woning", eyebrow: "Uw opleverpunten", title: "We weten wat er geregeld moet worden.", text: "Uw situatie is al duidelijk. Vul alleen nog de ontbrekende gegevens aan." },
  "/seniorenverhuizing-en-oplevering": { situation: "Verhuizen naar een zorgwoning", type: "Woning", eyebrow: "Verhuizen en opleveren", title: "We weten waarvoor u komt.", text: "Geef alleen nog de praktische gegevens door die nodig zijn om de volgende stap te bepalen." },
  "/zakelijk/bewindvoerders-en-curatoren/woning-opleveren": { situation: "Cliëntwoning opleveren", type: "Woning", eyebrow: "Uw dossier", title: "Leg alleen het praktische dossier voor.", text: "We weten dat het om een cliëntwoning gaat. U hoeft alleen de ontbrekende gegevens door te geven." },
};

const track = (name: string, p: Record<string, string> = {}) => window.gtag?.("event", name, p);

type Estimate = { label: string; price: string; amount: number };
function getEstimate(data: IntakeData): Estimate {
  let score = 0;
  const area = Number(data.oppervlakte);
  if (area > 0) {
    if (area > 140) score += 4;
    else if (area > 100) score += 3;
    else if (area > 70) score += 2;
    else if (area > 45) score += 1;
  } else if (["Bedrijfspand", "Kantoor", "Winkelruimte"].includes(data.type)) score += 1;

  if (data.inboedel === "Gemiddeld ingericht") score += 1;
  if (data.inboedel === "Vol / veel inboedel") score += 2;
  if (data.inboedel === "Weet ik niet") score += 1;
  if (data.vervuiling === "Zwaar") score += 1;
  if (data.vervuiling === "Zeer zwaar") score += 2;
  if (data.bereikbaarheid === "1 verdieping zonder lift") score += 1;
  if (data.bereikbaarheid === "Meerdere verdiepingen zonder lift") score += 2;

  if (score <= 1) return { label: "Compacte opdracht", price: "vanaf €440", amount: 440 };
  if (score <= 3) return { label: "Standaard opdracht", price: "vanaf €880", amount: 880 };
  if (score <= 5) return { label: "Uitgebreide opdracht", price: "vanaf €1.320", amount: 1320 };
  return { label: "Meerdaagse opdracht", price: "vanaf €1.760", amount: 1760 };
}

export default function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<IntakeData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [context, setContext] = useState<Context | null>(null);
  const submissionId = useRef(crypto.randomUUID());
  const started = useRef(false);
  const estimate = getEstimate(data);

  useEffect(() => {
    let route = ROUTE_CONTEXT[window.location.pathname] || null;
    const problem = sessionStorage.getItem("oplevermeester_intake_context");
    if (problem) {
      try {
        const parsed = JSON.parse(problem) as Partial<Context> & { note?: string };
        route = { situation: parsed.situation || route?.situation || "Oplevering regelen", type: parsed.type || route?.type, eyebrow: parsed.eyebrow || "Uw situatie", title: parsed.title || "We weten waarvoor u komt.", text: parsed.text || "Geef alleen nog de ontbrekende gegevens door." };
        setData((c) => ({ ...c, toelichting: parsed.note || c.toelichting }));
      } catch {}
      sessionStorage.removeItem("oplevermeester_intake_context");
    }
    const stored = sessionStorage.getItem("oplevermeester_opleverplan");
    if (stored) {
      try {
        const plan = JSON.parse(stored) as { deadline?: string; summary?: string };
        route = ROUTE_CONTEXT["/inspectierapport-woning-wat-nu"];
        setData((c) => ({ ...c, datum: plan.deadline || c.datum, toelichting: plan.summary ? `Opleverpunten:\n${plan.summary}` : c.toelichting }));
      } catch {}
      sessionStorage.removeItem("oplevermeester_opleverplan");
    }
    if (route) {
      setContext(route);
      setData((c) => ({ ...c, situation: route!.situation, type: route!.type || c.type }));
      setStep(1);
    }
  }, []);

  function start() {
    if (!started.current) {
      started.current = true;
      track("intake_start", { source_page: location.pathname + location.search });
    }
  }
  function setField(f: keyof IntakeData, v: string) { start(); setData((c) => ({ ...c, [f]: v })); }
  function choose(v: string) { start(); setContext(null); setData((c) => ({ ...c, situation: v })); track("intake_situation_selected", { source_page: location.pathname + location.search, situation: v }); setStep(1); }
  function next(n: number) {
    start();
    if (n === 3) track("price_indication_viewed", { source_page: location.pathname + location.search, price_band: getEstimate(data).label });
    setStep(n);
    track("intake_step", { source_page: location.pathname + location.search, step: String(n + 1) });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");
    const landingUrl = location.pathname + location.search + location.hash;
    const message = [
      `Hulpvraag: ${data.situation}`,
      `Object: ${data.type}`,
      `Locatie: ${data.adres}, ${data.plaats}`,
      `Oppervlakte: ${data.oppervlakte || "Onbekend"} m²`,
      `Inboedel: ${data.inboedel || "Onbekend"}`,
      `Opleverdatum: ${data.datum || "Nog niet bekend"}`,
      `Planning: ${data.urgentie}`,
      `Vervuiling: ${data.vervuiling || "Onbekend"}`,
      `Verdieping/bereikbaarheid: ${data.bereikbaarheid || "Onbekend"}`,
      `Prijsindicatie website: ${estimate.price} (${estimate.label})`,
      `Toelichting: ${data.toelichting || "Niet toegelicht"}`,
      `Herkomst: ${document.referrer || "Direct / onbekend"}`,
    ].join("\n");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.naam, email: data.email, phone: data.telefoon, message, sourcePage: landingUrl, submissionId: submissionId.current }) });
      if (!r.ok) throw new Error("De intake kon niet worden verstuurd.");
      track("generate_lead", { source_page: landingUrl, object_type: data.type || "onbekend", planning: data.urgentie || "onbekend", situation: data.situation, price_band: estimate.label });
      setSubmitted(true);
    } catch (x) {
      setError(x instanceof Error ? x.message : "Versturen is niet gelukt.");
    } finally { setSubmitting(false); }
  }

  const labels = context ? STEPS.slice(1) : STEPS;
  const index = context ? Math.max(0, step - 1) : step;

  return <section id="intake" className="bg-white py-14 md:py-18"><div className="container-om mx-auto max-w-5xl">
    <div className="mb-8 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">{context ? context.eyebrow : "Start intake"}</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">{context ? context.title : "Wat speelt er bij u?"}</h2><p className="mt-3 leading-relaxed text-muted">{context ? context.text : "U hoeft niet te weten welke dienst u nodig heeft. Kies de situatie die het meest lijkt op die van u; wij helpen u vanaf daar verder."}</p></div>
    <div className="mb-5 flex gap-2">{labels.map((l, i) => <div key={l} className="min-w-0 flex-1"><div className={`h-1.5 rounded-full ${i <= index ? "bg-orange" : "bg-surface-mid"}`} /><span className={`mt-2 hidden text-xs sm:block ${i === index ? "font-semibold text-navy" : "text-muted"}`}>{l}</span></div>)}</div>
    <div className="overflow-hidden rounded-om border border-surface-mid bg-surface-light p-5 md:p-8">
      {submitted ? <div className="py-10"><p className="text-sm font-semibold text-orange">Wij hebben uw situatie ontvangen</p><h3 className="mt-2 font-display text-2xl font-semibold text-navy">Duidelijk. Wij pakken hem vanaf hier op.</h3><p className="mt-3 text-muted">Uw indicatie was {estimate.price}. We controleren de werkzaamheden en nemen contact met u op met de volgende stap.</p></div> :
      <form onSubmit={submit} onFocusCapture={start}>
        {step === 0 && <Slide eyebrow="Uw situatie" title="Wat speelt er bij u?" text="Kies wat het dichtst bij uw situatie komt. U hoeft de juiste vakterm niet te kennen."><div className="grid gap-3 sm:grid-cols-2">{SITUATIONS.map(([l, d]) => <button key={l} type="button" onClick={() => choose(l)} className="rounded-om border border-surface-mid bg-white p-5 text-left hover:border-orange"><strong className="block text-navy">{l}</strong><span className="mt-1.5 block text-sm text-muted">{d}</span></button>)}</div></Slide>}
        {step === 1 && <Slide eyebrow={context?.eyebrow || "Duidelijk"} title="Waar gaat het om?" text="Een paar basisgegevens zijn genoeg om de opdracht en prijsrichting beter in te schatten."><div className="grid gap-4 md:grid-cols-2"><Select label="Wat voor ruimte is het?" value={data.type} onChange={(v) => setField("type", v)} options={["Woning", "Appartement", "Bedrijfspand", "Kantoor", "Opslagruimte", "Winkelruimte", "Anders"]} required /><Input label="Plaats" value={data.plaats} onChange={(v) => setField("plaats", v)} required /><Input label="Adres" value={data.adres} onChange={(v) => setField("adres", v)} required /><Input label="Ongeveer hoeveel m²? (optioneel)" type="number" value={data.oppervlakte} onChange={(v) => setField("oppervlakte", v)} /><Select label="Hoeveel staat er nog? (optioneel)" value={data.inboedel} onChange={(v) => setField("inboedel", v)} options={["Vrijwel leeg", "Beperkt", "Gemiddeld ingericht", "Vol / veel inboedel", "Weet ik niet"]} /></div><Nav back={context ? undefined : () => setStep(0)} next={() => next(2)} disabled={!data.type || !data.plaats || !data.adres} /></Slide>}
        {step === 2 && <Slide eyebrow="Planning" title="Wanneer moet het geregeld zijn?" text="Bereikbaarheid, staat van de ruimte en deadline maken de prijsindicatie nauwkeuriger."><div className="grid gap-4 md:grid-cols-2"><Select label="Hoe snel is hulp nodig?" value={data.urgentie} onChange={(v) => setField("urgentie", v)} options={["Er is ruimte in de planning", "Binnen 2 weken", "Binnen 1 week", "Spoed"]} required /><Input label="Uiterste opleverdatum (optioneel)" type="date" value={data.datum} onChange={(v) => setField("datum", v)} /><Select label="Bereikbaarheid (optioneel)" value={data.bereikbaarheid} onChange={(v) => setField("bereikbaarheid", v)} options={["Begane grond", "Verdieping met lift", "1 verdieping zonder lift", "Meerdere verdiepingen zonder lift", "Anders / onbekend"]} /><Select label="Hoe staat de ruimte erbij? (optioneel)" value={data.vervuiling} onChange={(v) => setField("vervuiling", v)} options={["Licht", "Normaal", "Zwaar", "Zeer zwaar", "Weet ik niet"]} /></div><label className="mt-4 block text-sm font-medium text-navy">Wilt u nog iets meegeven? (optioneel)<textarea rows={5} value={data.toelichting} onChange={(e) => setField("toelichting", e.target.value)} className="mt-1.5 w-full rounded-om border border-surface-mid bg-white px-4 py-3" /></label><Nav back={() => setStep(1)} next={() => next(3)} disabled={!data.urgentie} /></Slide>}
        {step === 3 && <Slide eyebrow="Uw prijsrichting" title={`${estimate.label}: ${estimate.price}`} text="Dit is een indicatie op basis van de gegevens die u heeft ingevuld, geen definitieve offerte. Afvoer, materialen, specialistisch werk en de exacte omvang kunnen de uiteindelijke projectprijs veranderen."><div className="mb-6 rounded-om border border-orange/30 bg-white p-5"><p className="text-sm font-semibold text-navy">Wilt u de inschatting sneller scherp krijgen?</p><p className="mt-1 text-sm text-muted">Na het versturen kunt u ook foto's via WhatsApp delen. Daarmee kunnen we vaak sneller zien wat er nodig is.</p><a href="https://wa.me/31645316851" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-orange">Open WhatsApp →</a></div><div className="grid gap-4 md:grid-cols-2"><Input label="Naam" value={data.naam} onChange={(v) => setField("naam", v)} required /><Input label="Telefoon" type="tel" value={data.telefoon} onChange={(v) => setField("telefoon", v)} required /><div className="md:col-span-2"><Input label="E-mail" type="email" value={data.email} onChange={(v) => setField("email", v)} required /></div></div>{error && <p role="alert" className="mt-4 text-sm text-red-700">{error} Probeer het opnieuw.</p>}<div className="mt-6 flex justify-between"><button type="button" onClick={() => setStep(2)} className="px-2 text-sm font-semibold text-muted">← Terug</button><button type="submit" disabled={submitting || !data.naam || !data.telefoon || !data.email} className="rounded-om bg-orange px-6 py-3.5 font-semibold text-white disabled:opacity-50">{submitting ? "Versturen…" : "Vraag mijn projectprijs aan →"}</button></div></Slide>}
      </form>}
    </div>
  </div></section>;
}

function Slide({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children: React.ReactNode }) { return <div><p className="text-sm font-semibold text-orange">{eyebrow}</p><h3 className="mt-1 font-display text-2xl font-semibold text-navy">{title}</h3><p className="mb-6 mt-2 text-sm text-muted">{text}</p>{children}</div>; }
function Nav({ back, next, disabled }: { back?: () => void; next: () => void; disabled?: boolean }) { return <div className={`mt-6 flex ${back ? "justify-between" : "justify-end"}`}>{back && <button type="button" onClick={back} className="px-2 text-sm font-semibold text-muted">← Terug</button>}<button type="button" onClick={next} disabled={disabled} className="rounded-om bg-orange px-6 py-3.5 font-semibold text-white disabled:opacity-50">Verder →</button></div>; }
function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) { return <label className="block text-sm font-medium text-navy">{label}<input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} className="mt-1.5 w-full rounded-om border border-surface-mid bg-white px-4 py-3" /></label>; }
function Select({ label, value, onChange, options, required }: { label: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean }) { return <label className="block text-sm font-medium text-navy">{label}<select value={value} onChange={(e) => onChange(e.target.value)} required={required} className="mt-1.5 w-full rounded-om border border-surface-mid bg-white px-4 py-3"><option value="">Kies wat past</option>{options.map((o) => <option key={o}>{o}</option>)}</select></label>; }
