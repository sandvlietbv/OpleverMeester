import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  sourcePage?: unknown;
  submissionId?: unknown;
}

export async function POST(request: Request) {
  const prideUrl = process.env.PRIDE_INTAKE_URL?.trim();
  const secret = process.env.PRIDE_INTAKE_SECRET?.trim();
  if (!prideUrl || !secret) {
    return NextResponse.json({ ok: false, error: "Contactformulier tijdelijk niet beschikbaar." }, { status: 503 });
  }

  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ongeldige aanvraag." }, { status: 400 });
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return NextResponse.json({ ok: false, error: "Ongeldige aanvraag." }, { status: 400 });
  }
  const payload = parsed as ContactPayload;

  const name = text(payload.name);
  const email = text(payload.email).toLowerCase();
  const phone = text(payload.phone);
  const message = text(payload.message);
  const sourcePage = text(payload.sourcePage) || "/#contact";
  const submissionId = text(payload.submissionId);

  if (!name || name.length > 160 || !email || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length > 80 || !message || message.length > 5000 || sourcePage.length > 500 || !submissionId || submissionId.length > 100) {
    return NextResponse.json({ ok: false, error: "Controleer de ingevulde gegevens." }, { status: 400 });
  }

  try {
    const response = await fetch(prideUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({ name, email, phone: phone || undefined, message, sourcePage, submissionId }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("PRIDE intake rejected contact submission", { status: response.status });
      return NextResponse.json({ ok: false, error: "Versturen is niet gelukt. Probeer het opnieuw of neem telefonisch contact op." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PRIDE intake unavailable", error);
    return NextResponse.json({ ok: false, error: "Versturen is niet gelukt. Probeer het opnieuw of neem telefonisch contact op." }, { status: 502 });
  }
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}
