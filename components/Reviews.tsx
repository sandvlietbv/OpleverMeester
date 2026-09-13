"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";
type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void };

export default function Reviews() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function track(event: string, params: Record<string, unknown> = {}) {
    (window as AnalyticsWindow).gtag?.("event", event, params);
  }

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanReview = review.trim();

    if (!cleanName || !cleanEmail || cleanReview.length < 15) {
      setStatus("error");
      setError("Vul uw naam, e-mailadres en een korte ervaring van minimaal 15 tekens in.");
      return;
    }

    setStatus("sending");
    const submissionId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `review-${Date.now()}-${Math.random().toString(36).slice(2)}`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          phone: "",
          message: `[WEBSITE REVIEW]\nScore: ${rating}/5\nErvaring: ${cleanReview}`,
          sourcePage: "/#reviews",
          submissionId,
          photos: [],
        }),
      });

      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) throw new Error(body?.error || "Versturen is niet gelukt.");

      track("review_submitted", { rating, source: "homepage_reviews" });
      setStatus("success");
      setName("");
      setEmail("");
      setReview("");
      setRating(5);
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : "Versturen is niet gelukt. Probeer het opnieuw.");
    }
  }

  return (
    <section id="reviews" className="bg-white py-24">
      <div className="container-om">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Ervaringen</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Heeft OpleverMeester u geholpen?
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Laat hier uw ervaring achter. Zo helpt u anderen die voor dezelfde keuze staan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid overflow-hidden rounded-om border border-surface-mid bg-surface-light lg:grid-cols-[1.1fr_.9fr]"
        >
          <form onSubmit={submitReview} className="p-6 sm:p-8 md:p-10">
            <fieldset>
              <legend className="text-sm font-semibold text-navy">Hoe beoordeelt u uw ervaring?</legend>
              <div className="mt-3 flex gap-2" aria-label={`${rating} van 5 sterren`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => {
                      setRating(star);
                      track("review_rating_selected", { rating: star, source: "homepage_reviews" });
                    }}
                    aria-label={`${star} ${star === 1 ? "ster" : "sterren"}`}
                    aria-pressed={rating === star}
                    className="rounded-md p-1 text-3xl leading-none transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
                  >
                    <span aria-hidden="true" className={star <= rating ? "text-orange" : "text-surface-mid"}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-navy">
                Naam
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  maxLength={160}
                  required
                  className="mt-2 w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                />
              </label>

              <label className="text-sm font-medium text-navy">
                E-mailadres
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  maxLength={320}
                  required
                  className="mt-2 w-full rounded-om border border-surface-mid bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                />
                <span className="mt-1 block text-xs font-normal text-muted">Wordt niet op de website getoond.</span>
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-navy">
              Uw ervaring
              <textarea
                value={review}
                onChange={(event) => setReview(event.target.value)}
                minLength={15}
                maxLength={1500}
                rows={5}
                required
                placeholder="Wat ging goed? Hoe heeft u de samenwerking ervaren?"
                className="mt-2 w-full resize-y rounded-om border border-surface-mid bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
              />
            </label>

            {status === "error" && (
              <p role="alert" className="mt-4 rounded-om bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            {status === "success" ? (
              <div role="status" className="mt-6 rounded-om border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                <p className="font-semibold">Bedankt voor uw beoordeling.</p>
                <p className="mt-1">Uw ervaring is ontvangen.</p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-om bg-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Beoordeling versturen…" : "Beoordeling versturen"}
              </button>
            )}
          </form>

          <div className="border-t border-surface-mid bg-white p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <p className="font-display text-xl font-semibold text-navy">Echte ervaringen, zonder opsmuk.</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Ingezonden beoordelingen worden alleen gecontroleerd op spam, persoonsgegevens en ongepaste inhoud. Positieve én kritische ervaringen zijn welkom.
            </p>
            <div className="mt-8 rounded-om border border-surface-mid bg-surface-light p-5">
              <p className="text-sm font-semibold text-navy">Wat wordt zichtbaar?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Alleen de naam, sterrenbeoordeling en geschreven ervaring kunnen worden gepubliceerd. Het e-mailadres blijft privé.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
