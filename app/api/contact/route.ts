import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  sourcePage?: unknown;
  submissionId?: unknown;
  photos?: unknown;
}

type IntakePhoto = { name: string; type: string; data: string };
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_PHOTOS = 6;
const MAX_PHOTO_BYTES = 1_048_576;

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
  const photos = normalizePhotos(payload.photos);

  if (!photos || !name || name.length > 160 || !email || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length > 80 || !message || message.length > 5000 || sourcePage.length > 500 || !submissionId || submissionId.length > 100) {
    return NextResponse.json({ ok: false, error: "Controleer de ingevulde gegevens." }, { status: 400 });
  }

  try {
    const response = await fetch(prideUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({ name, email, phone: phone || undefined, message, sourcePage, submissionId, photos }),
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
    const responseBody = await response.text();

    if (!response.ok) {
      console.error("PRIDE intake rejected contact submission", { status: response.status, response: responseBody.slice(0, 300) });
      return NextResponse.json({ ok: false, error: "Versturen is niet gelukt. Probeer het opnieuw of neem telefonisch contact op." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PRIDE intake unavailable", error);
    return NextResponse.json({ ok: false, error: "Versturen is niet gelukt. Probeer het opnieuw of neem telefonisch contact op." }, { status: 502 });
  }
}

function normalizePhotos(value: unknown): IntakePhoto[] | null {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value) || value.length > MAX_PHOTOS) return null;
  const photos: IntakePhoto[] = [];
  for (const candidate of value) {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return null;
    const raw = candidate as Record<string, unknown>;
    const name = text(raw.name).slice(0, 180);
    const type = text(raw.type).toLowerCase();
    const data = text(raw.data).replace(/^data:image\/(?:jpeg|png|webp);base64,/i, "");
    const estimatedBytes = Math.floor((data.length * 3) / 4);
    if (!name || !ALLOWED_IMAGE_TYPES.has(type) || !data || !/^[A-Za-z0-9+/]+={0,2}$/.test(data) || estimatedBytes <= 0 || estimatedBytes > MAX_PHOTO_BYTES) return null;
    photos.push({ name, type, data });
  }
  return photos;
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}