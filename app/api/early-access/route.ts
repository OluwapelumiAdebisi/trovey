import { NextResponse } from "next/server";
import { cleanEarlyAccess, validateEarlyAccess, type EarlyAccessInput } from "@/lib/audiences";

/**
 * Placeholder inbox for early-access requests.
 *
 * TODO: Before you collect real signups, do one of the following:
 *   1. Set FORM_ENDPOINT to a private URL (Formspree, your API, Zapier).
 *      This route will POST the JSON payload there.
 *   2. Or set NEXT_PUBLIC_FORM_ENDPOINT so the browser posts there directly
 *      and this route is unused. See .env.example.
 *
 * Until FORM_ENDPOINT is set, valid requests are acknowledged and not stored.
 * The form tells the visitor that, instead of pretending they joined a list.
 */
export async function POST(request: Request) {
  const type = request.headers.get("content-type") ?? "";
  if (!type.includes("application/json")) {
    return NextResponse.json({ ok: false, error: "Expected JSON." }, { status: 415 });
  }

  const raw = await request.text();
  if (raw.length > 20_000) {
    return NextResponse.json({ ok: false, error: "Payload is too large." }, { status: 413 });
  }

  let data: EarlyAccessInput;
  try {
    data = JSON.parse(raw) as EarlyAccessInput;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const input: EarlyAccessInput = {
    name: String(data.name ?? ""),
    email: String(data.email ?? ""),
    company: String(data.company ?? ""),
    role: String(data.role ?? ""),
    audience: String(data.audience ?? ""),
    needs: String(data.needs ?? ""),
    consent: data.consent === true,
  };

  const errors = validateEarlyAccess(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Check the form and try again." }, { status: 400 });
  }

  const submission = {
    ...cleanEarlyAccess(input),
    submittedAt: new Date().toISOString(),
    source: "trovey-marketing-site",
  };

  const endpoint = process.env.FORM_ENDPOINT?.trim();
  if (!endpoint) {
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });

    if (!upstream.ok) {
      return NextResponse.json({ ok: false, error: "The form service did not accept the request." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "The form service could not be reached." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
