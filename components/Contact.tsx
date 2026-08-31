"use client";

import { useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SITUATIONS = [
  { label: "Woning leeghalen", value: "Woning leeghalen" },
  { label: "Na overlijden", value: "Huis leeghalen na overlijden" },
  { label: "Huurwoning opleveren", value: "Huurwoning opleveren" },
  { label: "Bedrijfspand", value: "Bedrijfspand opleveren" },
  { label: "Spoed", value: "Spoedontruiming" },
  { label: "Anders", value: "Anders" },
];

function trackEvent(name: string, parameters: Record<string, string> = {}) {
  window.gtag?.("event", name, parameters);
}

export default function Contact() {
  const [selectedSituation, setSelectedSituation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const submissionId = useRef<string>(crypto.randomUUID());
  const intakeStarted = useRef(false);

  function handleIntakeStart() {
    if (intakeStarted.current) return;
    intakeStarted.current = true;
    trackEvent("intake_start", {
      source_page: window.location.pathname + window.location.search,
    });
  }

  function chooseSituation(value: string) {
    handleIntakeStart();
    setSelectedSituation(value);
    trackEvent("intake_situation_selected", {
      source_page: window.location.pathname + window.location.search,
      situation: value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const landingUrl = window.location.pathname + window.location.search + window.location.hash;
    const referrer = document.referrer || "Direct / onbekend";
    const message = [
      `Hulpvraag: ${selectedSituation}`,
      `Object: ${form.get("type")}`,
      `Locatie: ${form.get("adres")}, ${form.get("plaats")}`,
      `Oppervlakte: ${form.get("oppervlakte")} m²`,
      `Opleverdatum: ${form.get("datum")}`,
      `Planning: ${form.get("urgentie")}`,
      `Vervuiling: ${form.get("vervuiling")}`,
      `Verdieping/bereikbaarheid: ${form.get("bereikbaarheid")}`,
      `Toelichting: ${form.get("toelichting") || "Niet toegelicht"}`,
      `Herkomst: ${referrer}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.get("naam"), email: form.get("email"), phone: form.get("telefoon"), message, sourcePage: landingUrl, submissionId: submissionId.current }),
      });
      if (!response.ok) throw new Error("De intake kon niet worden verstuurd.");
      trackEvent("generate_lead", {
        source_page: landingUrl,
        object_type: String(form.get("type") || "onbekend"),
        planning: String(form.get("urgentie") || "onbekend"),
        situation: selectedSituation,
      });
      setSubmitted(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Versturen is niet gelukt.");
    } finally { setSubmitting(false); }
  }

  return (
    <section id="intake" className="bg-white py-14 md:py-18">
      <div className="container-om grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">Start intake</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Vertel eerst wat er speelt.</h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">Kies de situatie die het beste past. Daarna vragen we alleen de gegevens die nodig zijn om uw aanvraag goed te beoordelen.</p>
          <div className="mt-7 space-y-3 border-l-2 border-orange pl-5 text-sm text-navy">
            <p><strong>1.</strong> U kiest wat er moet gebeuren.</p>
            <p><strong>2.</strong> U geeft de basis door.</p>
            <p><strong>3.</strong> Wij nemen contact op en regelen de volgende stap.</p>
          </div>
        </div>

        <div className="rounded-om border border-surface-mid bg-surface-light p-5 md:p-8">
          {submitted ? (
            <div className="py-10"><p className="text-sm font-semibold text-orange">Intake ontvangen</p><h3 className="mt-2 font-display text-2xl font-semibold text-navy">Duidelijk. Wij pakken hem vanaf hier op.</h3><p className="mt-3 max-w-xl text-muted">We bekijken de gegevens en nemen contact met u op om de ruimte en werkzaamheden goed door te nemen.</p></div>
          ) : !selectedSituation ? (
            <div>
              <p className="text-sm font-semibold text-orange">Stap 1</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy">Wat moet er gebeuren?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Geen uitgebreide uitleg nodig. Kies wat het dichtst bij uw situatie komt.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {SITUATIONS.map((situation) => (
                  <button key={situation.value} type="button" onClick={() => chooseSituation(situation.value)} className="rounded-om border border-surface-mid bg-white px-4 py-4 text-left font-semibold text-navy transition hover:border-orange hover:bg-orange/5 focus:border-orange focus:outline-none">
                    {situation.label}<span aria-hidden="true" className="float-right text-orange">→</span>
                  </button>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted">Twijfelt u? Kies ‘Anders’. We nemen de situatie persoonlijk met u door.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocusCapture={handleIntakeStart} className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-om border border-surface-mid bg-white px-4 py-3">
                <div><p className="text-xs text-muted">Uw situatie</p><p className="font-semibold text-navy">{selectedSituation}</p></div>
                <button type="button" onClick={() => setSelectedSituation("")} className="text-sm font-semibold text-orange hover:underline">Wijzigen</button>
              </div>
              <FormSection number="02" title="Wie kunnen we spreken?">
                <div className="grid gap-4 md:grid-cols-2"><Field label="Naam" name="naam" type="text" required /><Field label="Telefoon" name="telefoon" type="tel" required /><div className="md:col-span-2"><Field label="E-mail" name="email" type="email" required /></div></div>
              </FormSection>
              <FormSection number="03" title="Om welke locatie gaat het?">
                <div className="grid gap-4 md:grid-cols-2"><SelectField label="Type object" name="type" options={["Woning", "Appartement", "Bedrijfspand", "Kantoor", "Opslagruimte", "Winkelruimte", "Anders"]} /><Field label="Oppervlakte (m²)" name="oppervlakte" type="number" required min="1" /><Field label="Adres" name="adres" type="text" required /><Field label="Plaats" name="plaats" type="text" required /></div>
              </FormSection>
              <FormSection number="04" title="Wanneer en hoe bereikbaar?">
                <div className="grid gap-4 md:grid-cols-2"><Field label="Uiterste opleverdatum" name="datum" type="date" required /><SelectField label="Planning" name="urgentie" options={["Er is ruimte in de planning", "Binnen 2 weken", "Binnen 1 week", "Spoed"]} /><SelectField label="Bereikbaarheid" name="bereikbaarheid" options={["Begane grond", "Verdieping met lift", "1 verdieping zonder lift", "Meerdere verdiepingen zonder lift", "Anders / onbekend"]} /><SelectField label="Vervuilingsgraad" name="vervuiling" options={["Licht", "Normaal", "Zwaar", "Zeer zwaar"]} /></div>
              </FormSection>
              <FormSection number="05" title="Wat moeten we vooraf weten?">
                <label htmlFor="toelichting" className="sr-only">Korte toelichting</label><textarea id="toelichting" name="toelichting" rows={4} placeholder="Bijvoorbeeld: woning staat vol, laminaat moet eruit, sleuteloverdracht is gepland, zware spullen aanwezig…" className="w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none placeholder:text-muted/60 focus:border-orange" />
              </FormSection>
              {error && <p role="alert" className="text-sm text-red-700">{error} Probeer het opnieuw.</p>}
              <button type="submit" disabled={submitting} className="w-full rounded-om bg-orange px-6 py-4 text-base font-semibold text-white hover:bg-orange-light disabled:opacity-60">{submitting ? "Versturen…" : "Intake versturen"}</button>
              <p className="text-center text-xs text-muted">We gebruiken deze gegevens om uw aanvraag te beoordelen en contact met u op te nemen.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <fieldset><legend className="mb-4 flex items-center gap-3 text-sm font-semibold text-navy"><span className="text-orange">{number}</span>{title}</legend>{children}</fieldset>; }
function Field({ label, name, type, required, min }: { label: string; name: string; type: string; required?: boolean; min?: string }) { return <div><label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">{label}</label><input id={name} name={name} type={type} required={required} min={min} className="w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none focus:border-orange" /></div>; }
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) { return <div><label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">{label}</label><select id={name} name={name} required defaultValue="" className="w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none focus:border-orange"><option value="" disabled>Kies wat past</option>{options.map((option) => <option key={option}>{option}</option>)}</select></div>; }
