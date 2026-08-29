"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, Phone } from "lucide-react";

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_TEL = "+31645316851";
const WHATSAPP_LINK = "https://wa.me/31645316851";

const services = ["Woningontruiming", "Bezemschoon opleveren", "Verhuizing", "Nalatenschap", "Bedrijfspand", "Anders"];
const timing = ["Zo snel mogelijk", "Binnen 3 dagen", "Binnen een week", "Binnen een maand", "Later / nog niet bekend"];

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
      `Type opdracht: ${form.get("opdracht")}`,
      `Locatie: ${form.get("locatie")}`,
      `Omvang: ${form.get("omvang") || "niet bekend"}`,
      `Gewenst moment: ${form.get("moment")}`,
      `Situatie: ${form.get("situatie")}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("naam"), email: form.get("email"), phone: form.get("telefoon"), message,
          sourcePage: window.location.pathname + window.location.hash, submissionId: submissionId.current,
        }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null) as { error?: string } | null;
        throw new Error(body?.error || "Versturen is niet gelukt.");
      }
      setSubmitted(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Versturen is niet gelukt. Probeer het opnieuw.");
    } finally { setSubmitting(false); }
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="container-om grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">Eerst kijken. Dan duidelijkheid.</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Vertel ons wat er moet gebeuren</motion.h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">Met een paar korte antwoorden krijgen we een eerste beeld van uw situatie. Daarna bepalen we samen de beste vervolgstap. U zit nergens aan vast.</p>
          <div className="mt-8 space-y-3 text-sm text-navy">
            {["In ongeveer 1 minuut ingevuld", "Eerst duidelijkheid over wat er nodig is", "Digitale opname mogelijk als de situatie daarvoor geschikt is", "Pas daarna beslist u"].map((item) => <div key={item} className="flex items-start gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" /><span>{item}</span></div>)}
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 rounded-om border border-surface-mid p-4 transition-colors hover:border-orange/40"><Phone className="h-5 w-5 text-orange" /><span className="font-semibold text-navy">Liever bellen? {PHONE_DISPLAY}</span></a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-om border border-surface-mid p-4 transition-colors hover:border-orange/40"><MessageCircle className="h-5 w-5 text-orange" /><span className="font-semibold text-navy">Of stuur ons een WhatsApp-bericht</span></a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-om border border-surface-mid bg-surface-light p-6 md:p-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-3 py-8"><div className="rounded-full bg-white p-3"><Check className="h-6 w-6 text-orange" /></div><h3 className="font-display text-2xl font-semibold text-navy">Uw intake is ontvangen</h3><p className="max-w-md leading-relaxed text-muted">We bekijken wat er nodig is en nemen contact met u op met een concrete vervolgstap. Als een digitale opname geschikt is, kunnen we de locatie samen via uw telefoon bekijken.</p><p className="font-semibold text-navy">Eerst kijken. Dan duidelijkheid. Pas daarna beslist u.</p></div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">Korte intake</p><h3 className="mt-1 font-display text-xl font-semibold text-navy">We beginnen bij de situatie</h3></div>
              <Choice label="Waar kunnen we u mee helpen?" name="opdracht" options={services} />
              <Field label="Waar is de locatie?" name="locatie" type="text" placeholder="Plaats of postcode" required />
              <Field label="Hoe groot is de ruimte ongeveer?" name="omvang" type="text" placeholder="Bijvoorbeeld 70 m², 4 kamers of nog niet bekend" />
              <Choice label="Wanneer moet het geregeld zijn?" name="moment" options={timing} />
              <div className="flex flex-col gap-1.5"><label htmlFor="situatie" className="text-sm font-medium text-navy">Wat moeten we zeker weten?</label><textarea id="situatie" name="situatie" rows={3} required placeholder="Bijvoorbeeld: woning moet leeg en bezemschoon worden opgeleverd, derde verdieping, lift aanwezig." className="rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-muted/70 focus:border-orange" /></div>
              <div className="border-t border-surface-mid pt-5"><p className="mb-4 text-sm font-semibold text-navy">Waar kunnen we u bereiken?</p><div className="grid gap-4 md:grid-cols-2"><Field label="Naam" name="naam" type="text" required /><Field label="Telefoonnummer" name="telefoon" type="tel" required /></div><div className="mt-4"><Field label="E-mailadres" name="email" type="email" required /></div></div>
              {error && <p role="alert" className="text-sm text-red-700">{error} U kunt ons ook bellen via {PHONE_DISPLAY}.</p>}
              <button type="submit" disabled={submitting} className="rounded-om bg-orange px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-light disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Intake wordt verstuurd…" : "Start mijn intake"}</button>
              <p className="text-center text-xs leading-relaxed text-muted">Aan deze eerste beoordeling zijn geen kosten verbonden. U bepaalt zelf of u daarna verder wilt.</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Choice({ label, name, options }: { label: string; name: string; options: string[] }) {
  return <fieldset><legend className="mb-2 text-sm font-medium text-navy">{label}</legend><div className="grid gap-2 sm:grid-cols-2">{options.map((option, index) => <label key={option} className="cursor-pointer rounded-om border border-surface-mid bg-white px-4 py-3 text-sm text-navy transition-colors has-[:checked]:border-orange has-[:checked]:bg-orange/5"><input className="mr-2 accent-orange" type="radio" name={name} value={option} required={index === 0} />{option}</label>)}</div></fieldset>;
}

function Field({ label, name, type, required, placeholder }: { label: string; name: string; type: string; required?: boolean; placeholder?: string }) {
  return <div className="flex flex-col gap-1.5"><label htmlFor={name} className="text-sm font-medium text-navy">{label}</label><input id={name} name={name} type={type} required={required} placeholder={placeholder} className="rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-muted/70 focus:border-orange" /></div>;
}
