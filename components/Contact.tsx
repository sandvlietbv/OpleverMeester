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

type IntakePhoto = { id: string; name: string; type: "image/jpeg"; data: string };

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
const STEPS = ["Situatie", "Ruimte", "Foto's", "Planning", "Indicatie"];
const MAX_PHOTOS = 6;
const ACCEPTED_PHOTO_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

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

  if (score <= 1) return { label: "Compacte opdracht", price: "vanaf €532,40 incl. btw", amount: 532.4 };
  if (score <= 3) return { label: "Standaard opdracht", price: "vanaf €1.064,80 incl. btw", amount: 1064.8 };
  if (score <= 5) return { label: "Uitgebreide opdracht", price: "vanaf €1.597,20 incl. btw", amount: 1597.2 };
  return { label: "Meerdaagse opdracht", price: "vanaf €2.129,60 incl. btw", amount: 2129.6 };
}

export default function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<IntakeData>(EMPTY);
  const [photos, setPhotos] = useState<IntakePhoto[]>([]);
  const [photoBusy, setPhotoBusy] = useState(false);
  const [photoError, setPhotoError] = useState("");
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
    if (n === 4) track("price_indication_viewed", { source_page: location.pathname + location.search, price_band: getEstimate(data).label });
    setStep(n);
    track("intake_step", { source_page: location.pathname + location.search, step: String(n + 1) });
  }

  async function addPhotos(files: FileList | null) {
    if (!files || files.length === 0 || photoBusy) return;
    const available = MAX_PHOTOS - photos.length;
    if (available <= 0) { setPhotoError(`U kunt maximaal ${MAX_PHOTOS} foto's toevoegen.`); return; }
    const selected = Array.from(files).slice(0, available);
    setPhotoBusy(true);
    setPhotoError("");
    try {
      const prepared: IntakePhoto[] = [];
      for (const file of selected) {
        if (!ACCEPTED_PHOTO_TYPES.has(file.type)) throw new Error("Gebruik JPG, PNG of WebP foto's.");
        prepared.push(await compressPhoto(file));
      }
      setPhotos((current) => [...current, ...prepared].slice(0, MAX_PHOTOS));
      track("intake_photos_added", { source_page: location.pathname + location.search, added_count: String(prepared.length) });
    } catch (x) {
      const message = x instanceof Error ? x.message : "Een foto kon niet worden toegevoegd.";
      setPhotoError(message);
      track("intake_error", { source_page: location.pathname + location.search, step: "photos", error_type: "photo_processing" });
    } finally {
      setPhotoBusy(false);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");
    const landingUrl = location.pathname + location.search + location.hash;
    const locationText = [data.adres, data.plaats].filter(Boolean).join(", ") || "Onbekend";
    const message = [
      `Hulpvraag: ${data.situation}`,
      `Object: ${data.type}`,
      `Locatie: ${locationText}`,
      `Oppervlakte: ${data.oppervlakte || "Onbekend"} m²`,
      `Inboedel: ${data.inboedel || "Onbekend"}`,
      `Foto's meegestuurd: ${photos.length}`,
      `Opleverdatum: ${data.datum || "Nog niet bekend"}`,
      `Planning: ${data.urgentie}`,
      `Vervuiling: ${data.vervuiling || "Onbekend"}`,
      `Verdieping/bereikbaarheid: ${data.bereikbaarheid || "Onbekend"}`,
      `Prijsindicatie website: ${estimate.price} (${estimate.label})`,
      `Toelichting: ${data.toelichting || "Niet toegelicht"}`,
      `Herkomst: ${document.referrer || "Direct / onbekend"}`,
    ].join("\n");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.naam,
          email: data.email,
          phone: data.telefoon,
          message,
          sourcePage: landingUrl,
          submissionId: submissionId.current,
          photos: photos.map(({ name, type, data: photoData }) => ({ name, type, data: photoData })),
        }),
      });
      if (!r.ok) throw new Error("De intake kon niet worden verstuurd.");
      track("generate_lead", { source_page: landingUrl, object_type: data.type || "onbekend", planning: data.urgentie || "onbekend", situation: data.situation, price_band: estimate.label, photo_count: String(photos.length) });
      setSubmitted(true);
    } catch (x) {
      setError(x instanceof Error ? x.message : "Versturen is niet gelukt.");
      track("intake_error", { source_page: landingUrl, step: "submit", error_type: "submission_failed" });
    } finally { setSubmitting(false); }
  }

  const labels = context ? STEPS.slice(1) : STEPS;
  const index = context ? Math.max(0, step - 1) : step;

  return <section id="intake" className="bg-white py-14 md:py-18"><div className="container-om mx-auto max-w-5xl">
    <div className="mb-8 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">{context ? context.eyebrow : "Snelle prijscheck"}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">{context ? context.title : "Laat kort zien wat er moet gebeuren."}</h2>
      <p className="mt-3 leading-relaxed text-muted">{context ? context.text : "Beantwoord een paar praktische vragen. Foto's zijn optioneel, maar helpen Team OpleverMeester de aanvraag daarna sneller te controleren."}</p>
    </div>
    <div className="mb-5 flex gap-2">{labels.map((l, i) => <div key={l} className="min-w-0 flex-1"><div className={`h-1.5 rounded-full ${i <= index ? "bg-orange" : "bg-surface-mid"}`} /><span className={`mt-2 hidden text-xs sm:block ${i === index ? "font-semibold text-navy" : "text-muted"}`}>{l}</span></div>)}</div>
    <div className="overflow-hidden rounded-om border border-surface-mid bg-surface-light p-5 md:p-8">
      {submitted ? <div className="py-10"><p className="text-sm font-semibold text-orange">Prijscheck ontvangen</p><h3 className="mt-2 font-display text-2xl font-semibold text-navy">Duidelijk. Team OpleverMeester controleert de situatie.</h3><p className="mt-3 text-muted">Uw eerste indicatie was {estimate.price}.{photos.length > 0 ? ` We hebben ook ${photos.length} foto${photos.length === 1 ? "" : "'s"} ontvangen.` : ""} We nemen contact op met de volgende stap.</p></div> :
      <form onSubmit={submit} onFocusCapture={start} onInvalidCapture={(event) => { const field = event.target as HTMLInputElement | HTMLSelectElement; track("intake_error", { source_page: location.pathname + location.search, step: String(step + 1), error_type: "validation", field_type: field.type || field.tagName.toLowerCase() }); }}>
        {step === 0 && <Slide eyebrow="1 · Uw situatie" title="Wat speelt er bij u?" text="Kies wat het dichtst bij uw situatie komt. U hoeft de juiste vakterm niet te kennen."><div className="grid gap-3 sm:grid-cols-2">{SITUATIONS.map(([l, d]) => <button key={l} type="button" onClick={() => choose(l)} className="rounded-om border border-surface-mid bg-white p-5 text-left transition hover:border-orange hover:shadow-sm"><strong className="block text-navy">{l}</strong><span className="mt-1.5 block text-sm text-muted">{d}</span></button>)}</div></Slide>}

        {step === 1 && <Slide eyebrow={context?.eyebrow || "2 · De ruimte"} title="Waar gaat het om?" text="Plaats en soort ruimte zijn genoeg om verder te gaan. Straat en huisnummer mag u ook later doorgeven."><div className="grid gap-4 md:grid-cols-2"><Select label="Wat voor ruimte is het?" value={data.type} onChange={(v) => setField("type", v)} options={["Woning", "Appartement", "Bedrijfspand", "Kantoor", "Opslagruimte", "Winkelruimte", "Anders"]} required /><Input label="Plaats" value={data.plaats} onChange={(v) => setField("plaats", v)} required /><Input label="Straat en huisnummer (optioneel)" value={data.adres} onChange={(v) => setField("adres", v)} /><Input label="Ongeveer hoeveel m²? (optioneel)" type="number" value={data.oppervlakte} onChange={(v) => setField("oppervlakte", v)} /><Select label="Hoeveel staat er nog? (optioneel)" value={data.inboedel} onChange={(v) => setField("inboedel", v)} options={["Vrijwel leeg", "Beperkt", "Gemiddeld ingericht", "Vol / veel inboedel", "Weet ik niet"]} /></div><Nav back={context ? undefined : () => setStep(0)} next={() => next(2)} disabled={!data.type || !data.plaats} /></Slide>}

        {step === 2 && <Slide eyebrow="3 · Foto's" title="Laat de ruimte zien." text="Upload bij voorkeur 3 tot 6 foto's van de belangrijkste ruimtes of spullen. Deze stap is optioneel; de foto's worden alleen gebruikt om uw aanvraag te beoordelen."><div className="rounded-om border border-dashed border-orange/50 bg-white p-6 text-center"><input id="intake-photos" type="file" accept="image/jpeg,image/png,image/webp" multiple className="sr-only" onChange={async (e) => { const input = e.currentTarget; await addPhotos(input.files); input.value = ""; }} /><label htmlFor="intake-photos" className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-om bg-navy px-6 py-3.5 font-semibold text-white hover:bg-navy/90">{photoBusy ? "Foto's verwerken…" : "+ Foto's toevoegen"}</label><p className="mt-3 text-xs text-muted">JPG, PNG of WebP · maximaal {MAX_PHOTOS} foto&apos;s</p></div>{photoError && <p role="alert" className="mt-3 text-sm text-red-700">{photoError}</p>}{photos.length > 0 && <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{photos.map((photo, index) => <div key={photo.id} className="relative overflow-hidden rounded-om border border-surface-mid bg-white"><img src={`data:${photo.type};base64,${photo.data}`} alt={`Geselecteerde intakefoto ${index + 1}`} className="aspect-[4/3] w-full object-cover" /><button type="button" aria-label={`Verwijder foto ${index + 1}`} onClick={() => setPhotos((current) => current.filter((item) => item.id !== photo.id))} className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-navy/85 text-lg font-semibold text-white">×</button><div className="px-3 py-2 text-xs font-medium text-muted">Foto {index + 1}</div></div>)}</div>}<div className="mt-5 rounded-om bg-white p-4 text-sm text-muted"><strong className="text-navy">Waarom foto&apos;s?</strong> Ze veranderen de automatische prijsindicatie niet op zichzelf. Ze helpen Team OpleverMeester wel om na verzending sneller te zien of de opgegeven omvang en werkzaamheden kloppen.</div><Nav back={() => setStep(1)} next={() => next(3)} disabled={photoBusy} /></Slide>}

        {step === 3 && <Slide eyebrow="4 · Planning" title="Wanneer moet het geregeld zijn?" text="Bereikbaarheid, staat van de ruimte en deadline maken de eerste indicatie nauwkeuriger."><div className="grid gap-4 md:grid-cols-2"><Select label="Hoe snel is hulp nodig?" value={data.urgentie} onChange={(v) => setField("urgentie", v)} options={["Er is ruimte in de planning", "Binnen 2 weken", "Binnen 1 week", "Spoed"]} required /><Input label="Uiterste opleverdatum (optioneel)" type="date" value={data.datum} onChange={(v) => setField("datum", v)} /><Select label="Bereikbaarheid (optioneel)" value={data.bereikbaarheid} onChange={(v) => setField("bereikbaarheid", v)} options={["Begane grond", "Verdieping met lift", "1 verdieping zonder lift", "Meerdere verdiepingen zonder lift", "Anders / onbekend"]} /><Select label="Hoe staat de ruimte erbij? (optioneel)" value={data.vervuiling} onChange={(v) => setField("vervuiling", v)} options={["Licht", "Normaal", "Zwaar", "Zeer zwaar", "Weet ik niet"]} /></div><label className="mt-4 block text-sm font-medium text-navy">Wilt u nog iets meegeven? (optioneel)<textarea rows={5} value={data.toelichting} onChange={(e) => setField("toelichting", e.target.value)} className="mt-1.5 w-full rounded-om border border-surface-mid bg-white px-4 py-3" /></label><Nav back={() => setStep(2)} next={() => next(4)} disabled={!data.urgentie} /></Slide>}

        {step === 4 && <Slide eyebrow="5 · Uw indicatie" title={`${estimate.label}: ${estimate.price}`} text="Dit is een eerste indicatie op basis van uw antwoorden, geen definitieve offerte. Team OpleverMeester controleert uw aanvraag en eventuele foto's voordat de uiteindelijke projectprijs wordt bevestigd."><div className="mb-6 rounded-om border border-orange/30 bg-white p-5"><p className="text-sm font-semibold text-navy">{photos.length > 0 ? `${photos.length} foto${photos.length === 1 ? "" : "'s"} toegevoegd` : "Geen foto's toegevoegd"}</p><p className="mt-1 text-sm text-muted">{photos.length > 0 ? "We kunnen de opgegeven situatie daarmee sneller controleren." : "Geen probleem. U kunt de prijscheck ook zonder foto's insturen."}</p></div><div className="grid gap-4 md:grid-cols-2"><Input label="Naam" value={data.naam} onChange={(v) => setField("naam", v)} required /><Input label="Telefoon" type="tel" value={data.telefoon} onChange={(v) => setField("telefoon", v)} required /><div className="md:col-span-2"><Input label="E-mail" type="email" value={data.email} onChange={(v) => setField("email", v)} required /></div></div>{error && <p role="alert" className="mt-4 text-sm text-red-700">{error} Probeer het opnieuw.</p>}<div className="mt-6 flex items-center justify-between gap-4"><button type="button" onClick={() => setStep(3)} className="min-h-12 px-2 text-sm font-semibold text-muted">← Terug</button><button type="submit" disabled={submitting || !data.naam || !data.telefoon || !data.email} className="min-h-12 rounded-om bg-orange px-6 py-3.5 font-semibold text-white disabled:opacity-50">{submitting ? "Prijscheck versturen…" : "Laat Team OpleverMeester controleren →"}</button></div></Slide>}
      </form>}
    </div>
  </div></section>;
}

async function compressPhoto(file: File): Promise<IntakePhoto> {
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = await loadImage(objectUrl);
    let blob = await renderJpeg(image, 1200, 0.7);
    if (blob.size > 420_000) blob = await renderJpeg(image, 1000, 0.6);
    if (blob.size > 420_000) blob = await renderJpeg(image, 800, 0.52);
    if (blob.size > 900_000) throw new Error("Deze foto blijft te groot. Kies een andere foto.");
    const dataUrl = await blobToDataUrl(blob);
    const baseName = file.name.replace(/\.[^.]+$/, "").slice(0, 120) || "intake-foto";
    return { id: crypto.randomUUID(), name: `${baseName}.jpg`, type: "image/jpeg", data: dataUrl.split(",")[1] || "" };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Deze foto kon niet worden gelezen."));
    image.src = src;
  });
}

function renderJpeg(image: HTMLImageElement, maxDimension: number, quality: number): Promise<Blob> {
  const ratio = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * ratio));
  const height = Math.max(1, Math.round(image.naturalHeight * ratio));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) return Promise.reject(new Error("Deze foto kon niet worden verwerkt."));
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  return new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Deze foto kon niet worden verwerkt.")), "image/jpeg", quality));
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Deze foto kon niet worden verwerkt."));
    reader.readAsDataURL(blob);
  });
}

function Slide({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children: React.ReactNode }) { return <div><p className="text-sm font-semibold text-orange">{eyebrow}</p><h3 className="mt-1 font-display text-2xl font-semibold text-navy">{title}</h3><p className="mb-6 mt-2 text-sm leading-relaxed text-muted">{text}</p>{children}</div>; }
function Nav({ back, next, disabled }: { back?: () => void; next: () => void; disabled?: boolean }) { return <div className={`mt-6 flex items-center gap-4 ${back ? "justify-between" : "justify-end"}`}>{back && <button type="button" onClick={back} className="min-h-12 px-2 text-sm font-semibold text-muted">← Terug</button>}<button type="button" onClick={next} disabled={disabled} className="min-h-12 rounded-om bg-orange px-6 py-3.5 font-semibold text-white disabled:opacity-50">Verder →</button></div>; }
function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) { return <label className="block text-sm font-medium text-navy">{label}<input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} className="mt-1.5 w-full rounded-om border border-surface-mid bg-white px-4 py-3" /></label>; }
function Select({ label, value, onChange, options, required }: { label: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean }) { return <label className="block text-sm font-medium text-navy">{label}<select value={value} onChange={(e) => onChange(e.target.value)} required={required} className="mt-1.5 w-full rounded-om border border-surface-mid bg-white px-4 py-3"><option value="">Kies wat past</option>{options.map((o) => <option key={o}>{o}</option>)}</select></label>; }
