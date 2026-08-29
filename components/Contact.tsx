"use client";

import { useRef, useState } from "react";
import { Phone } from "lucide-react";

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_TEL = "+31645316851";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const submissionId = useRef<string>(crypto.randomUUID());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const message = [
      `Object: ${form.get("type")}`,
      `Locatie: ${form.get("adres")}, ${form.get("plaats")}`,
      `Oppervlakte: ${form.get("oppervlakte")} m²`,
      `Opleverdatum: ${form.get("datum")}`,
      `Planning: ${form.get("urgentie")}`,
      `Vervuiling: ${form.get("vervuiling")}`,
      `Verdieping/bereikbaarheid: ${form.get("bereikbaarheid")}`,
      `Situatie: ${form.get("situatie") || "Niet toegelicht"}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.get("naam"), email: form.get("email"), phone: form.get("telefoon"), message, sourcePage: window.location.pathname + window.location.hash, submissionId: submissionId.current }),
      });
      if (!response.ok) throw new Error("De intake kon niet worden verstuurd.");
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
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Eerst even de situatie.</h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">Met deze gegevens kunnen we direct beoordelen waar het om gaat. De details nemen we daarna persoonlijk met u door.</p>
          <div className="mt-7 space-y-3 border-l-2 border-orange pl-5 text-sm text-navy">
            <p><strong>1.</strong> U geeft de basis door.</p>
            <p><strong>2.</strong> Wij nemen de digitale intake telefonisch met u door.</p>
            <p><strong>3.</strong> Daarna maken we de offerte en kunnen we schakelen.</p>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy"><Phone className="h-4 w-4 text-orange" />Liever direct overleggen? {PHONE_DISPLAY}</a>
        </div>

        <div className="rounded-om border border-surface-mid bg-surface-light p-5 md:p-8">
          {submitted ? (
            <div className="py-10"><p className="text-sm font-semibold text-orange">Intake ontvangen</p><h3 className="mt-2 font-display text-2xl font-semibold text-navy">Duidelijk. Wij pakken hem vanaf hier op.</h3><p className="mt-3 max-w-xl text-muted">We bekijken de gegevens en nemen contact met u op om de ruimte en werkzaamheden goed door te nemen.</p></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormSection number="01" title="Wie kunnen we spreken?">
                <div className="grid gap-4 md:grid-cols-2"><Field label="Naam" name="naam" type="text" required /><Field label="Telefoon" name="telefoon" type="tel" required /><div className="md:col-span-2"><Field label="E-mail" name="email" type="email" required /></div></div>
              </FormSection>
              <FormSection number="02" title="Om welke locatie gaat het?">
                <div className="grid gap-4 md:grid-cols-2"><SelectField label="Type object" name="type" options={["Woning", "Appartement", "Bedrijfspand", "Kantoor", "Opslagruimte", "Winkelruimte", "Anders"]} /><Field label="Oppervlakte (m²)" name="oppervlakte" type="number" required min="1" /><Field label="Adres" name="adres" type="text" required /><Field label="Plaats" name="plaats" type="text" required /></div>
              </FormSection>
              <FormSection number="03" title="Wanneer en hoe bereikbaar?">
                <div className="grid gap-4 md:grid-cols-2"><Field label="Uiterste opleverdatum" name="datum" type="date" required /><SelectField label="Planning" name="urgentie" options={["Er is ruimte in de planning", "Binnen 2 weken", "Binnen 1 week", "Spoed"]} /><SelectField label="Bereikbaarheid" name="bereikbaarheid" options={["Begane grond", "Verdieping met lift", "1 verdieping zonder lift", "Meerdere verdiepingen zonder lift", "Anders / onbekend"]} /><SelectField label="Vervuilingsgraad" name="vervuiling" options={["Licht", "Normaal", "Zwaar", "Zeer zwaar"]} /></div>
              </FormSection>
              <FormSection number="04" title="Wat moeten we vooraf weten?">
                <label htmlFor="situatie" className="sr-only">Korte toelichting</label><textarea id="situatie" name="situatie" rows={4} placeholder="Bijvoorbeeld: woning staat vol, laminaat moet eruit, sleuteloverdracht is gepland, zware spullen aanwezig…" className="w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none placeholder:text-muted/60 focus:border-orange" />
              </FormSection>
              {error && <p role="alert" className="text-sm text-red-700">{error} Bel ons anders op {PHONE_DISPLAY}.</p>}
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
