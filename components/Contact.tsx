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
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("naam"),
          email: form.get("email"),
          phone: form.get("telefoon"),
          message: form.get("bericht"),
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
    <section id="contact" className="bg-white py-24">
      <div className="container-om grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Neem contact op
          </motion.h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">Vertel ons kort uw situatie. U ontvangt binnen één werkdag reactie, geheel vrijblijvend.</p>
          <div className="mt-10 flex flex-col gap-4">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 rounded-om border border-surface-mid p-4 transition-colors hover:border-orange/40"><Phone className="h-5 w-5 text-orange" /><span className="font-semibold text-navy">{PHONE_DISPLAY}</span></a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-om border border-surface-mid p-4 transition-colors hover:border-orange/40"><MessageCircle className="h-5 w-5 text-orange" /><span className="font-semibold text-navy">Stuur een WhatsApp-bericht</span></a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-om border border-surface-mid bg-surface-light p-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-2 py-8"><h3 className="font-display text-xl font-semibold text-navy">Aanvraag verstuurd</h3><p className="text-muted">Bedankt. We nemen binnen één werkdag contact met u op.</p></div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Field label="Naam" name="naam" type="text" required />
              <Field label="E-mailadres" name="email" type="email" required />
              <Field label="Telefoonnummer" name="telefoon" type="tel" />
              <div className="flex flex-col gap-1.5"><label htmlFor="bericht" className="text-sm font-medium text-navy">Omschrijf uw situatie</label><textarea id="bericht" name="bericht" rows={4} required className="rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-orange" /></div>
              {error && <p role="alert" className="text-sm text-red-700">{error} U kunt ons ook bellen via {PHONE_DISPLAY}.</p>}
              <button type="submit" disabled={submitting} className="mt-2 rounded-om bg-orange px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-light disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Bezig met versturen…" : "Verstuur aanvraag"}</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return <div className="flex flex-col gap-1.5"><label htmlFor={name} className="text-sm font-medium text-navy">{label}</label><input id={name} name={name} type={type} required={required} className="rounded-om border border-surface-mid bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-orange" /></div>;
}
