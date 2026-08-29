"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_TEL = "+31645316851";
const WHATSAPP_LINK = "https://wa.me/31645316851";

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
      `Type locatie: ${form.get("type")}`,
      `Adres: ${form.get("adres")}`,
      `Plaats: ${form.get("plaats")}`,
      `Oppervlakte: ${form.get("oppervlakte")} m²`,
      `Gewenste opleverdatum: ${form.get("datum")}`,
      `Urgentie: ${form.get("urgentie")}`,
      `Vervuilingsgraad: ${form.get("vervuiling")}`,
      `Trappen: ${form.get("trappen")}`,
      `Lift: ${form.get("lift")}`,
      `Situatie / bijzonderheden: ${form.get("situatie") || "Geen bijzonderheden opgegeven"}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("naam"),
          email: form.get("email"),
          phone: form.get("telefoon"),
          message,
          sourcePage: window.location.pathname + window.location.hash,
          submissionId: submissionId.current,
        }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null) as { error?: string } | null;
        throw new Error(body?.error || "Versturen is niet gelukt.");
      }
      setSubmitted(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Versturen is niet gelukt. Probeer het opnieuw.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="intake" className="bg-white py-16 md:py-20">
      <div className="container-om">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-orange">Start intake</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Geef ons de basis. Dan kunnen we gericht schakelen.</h2>
          <p className="mt-3 leading-relaxed text-muted">Dit is de eerste selectie. Daarna nemen we de situatie persoonlijk met u door en kijken we precies wat er weg moet, wat kan blijven en wat nodig is voor de oplevering.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }} className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <aside className="rounded-om border border-surface-mid bg-navy p-6 text-white">
            <h3 className="font-display text-xl font-semibold">Wat gebeurt hierna?</h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/75">
              <p><strong className="text-white">1. Intake</strong><br />U geeft de belangrijkste gegevens door.</p>
              <p><strong className="text-white">2. Digitale intake</strong><br />We nemen telefonisch de details door. Denk aan vloeren, laminaat, inventaris, afval en wat er precies moet gebeuren.</p>
              <p><strong className="text-white">3. Offerte</strong><br />Op basis van de echte situatie maken we een passende offerte.</p>
              <p><strong className="text-white">4. Schakelen</strong><br />Akkoord? Dan plannen we de uitvoering.</p>
            </div>
            <div className="mt-7 border-t border-white/15 pt-5">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 text-sm font-semibold text-white"><Phone className="h-4 w-4 text-orange-light" />{PHONE_DISPLAY}</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-3 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4 text-orange-light" />WhatsApp</a>
            </div>
          </aside>

          <div className="rounded-om border border-surface-mid bg-surface-light p-6 md:p-8">
            {submitted ? (
              <div className="py-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Intake ontvangen</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy">We hebben genoeg om de eerste inschatting te maken.</h3>
                <p className="mt-3 max-w-xl text-muted">We nemen contact met u op voor de digitale intake. Dan lopen we de ruimte en werkzaamheden samen door voordat we een offerte maken.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <FormSection title="Contactpersoon">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Naam" name="naam" type="text" required />
                    <Field label="Telefoonnummer" name="telefoon" type="tel" required />
                    <div className="md:col-span-2"><Field label="E-mailadres" name="email" type="email" required /></div>
                  </div>
                </FormSection>

                <FormSection title="Locatie">
                  <div className="grid gap-4 md:grid-cols-2">
                    <SelectField label="Type locatie" name="type" required options={["Woning", "Appartement", "Bedrijfspand", "Kantoor", "Opslagruimte", "Winkelruimte", "Anders"]} />
                    <Field label="Oppervlakte in m²" name="oppervlakte" type="number" required min="1" />
                    <Field label="Adres" name="adres" type="text" required />
                    <Field label="Plaats" name="plaats" type="text" required />
                  </div>
                </FormSection>

                <FormSection title="Planning en bereikbaarheid">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Gewenste opleverdatum" name="datum" type="date" required />
                    <SelectField label="Urgentie" name="urgentie" required options={["Normaal", "Binnen 2 weken", "Binnen 1 week", "Spoed"]} />
                    <SelectField label="Zijn er trappen?" name="trappen" required options={["Nee", "Ja, 1 verdieping", "Ja, meerdere verdiepingen"]} />
                    <SelectField label="Is er een lift?" name="lift" required options={["Ja", "Nee", "Niet van toepassing"]} />
                  </div>
                </FormSection>

                <FormSection title="Situatie">
                  <div className="grid gap-4 md:grid-cols-2">
                    <SelectField label="Vervuilingsgraad" name="vervuiling" required options={["Licht", "Normaal", "Zwaar", "Zeer zwaar / vervuild"]} />
                    <div className="md:col-span-2">
                      <label htmlFor="situatie" className="mb-1.5 block text-sm font-medium text-navy">Wat moeten we nu al weten?</label>
                      <textarea id="situatie" name="situatie" rows={4} placeholder="Bijvoorbeeld: woning moet leeg, er ligt laminaat, veel meubels aanwezig, sleuteloverdracht staat gepland." className="w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-muted/60 focus:border-orange" />
                    </div>
                  </div>
                </FormSection>

                {error && <p role="alert" className="text-sm text-red-700">{error} U kunt ons ook bellen via {PHONE_DISPLAY}.</p>}
                <button type="submit" disabled={submitting} className="w-full rounded-om bg-orange px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-light disabled:cursor-not-allowed disabled:opacity-60">
                  {submitting ? "Intake versturen…" : "Start intake"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <fieldset><legend className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy">{title}</legend>{children}</fieldset>;
}

function Field({ label, name, type, required, min }: { label: string; name: string; type: string; required?: boolean; min?: string }) {
  return <div><label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">{label}</label><input id={name} name={name} type={type} required={required} min={min} className="w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-orange" /></div>;
}

function SelectField({ label, name, required, options }: { label: string; name: string; required?: boolean; options: string[] }) {
  return <div><label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">{label}</label><select id={name} name={name} required={required} defaultValue="" className="w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-orange"><option value="" disabled>Kies</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>;
}
