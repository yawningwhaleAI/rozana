import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  type?: "waitlist" | "contact";
  email?: string;
  name?: string;
  organisation?: string;
  city?: string;
  topic?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: pretend success, send nothing.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const type = body.type === "contact" ? "contact" : "waitlist";

  // Validation
  if (!body.email || !EMAIL_RE.test(body.email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 422 });
  }
  if (type === "contact" && (!body.name?.trim() || !body.message?.trim())) {
    return NextResponse.json(
      { ok: false, error: "Name and message are required." },
      { status: 422 },
    );
  }

  const submission =
    type === "contact"
      ? {
          type,
          name: body.name?.trim(),
          email: body.email.trim(),
          organisation: body.organisation?.trim() || "",
          city: body.city?.trim() || "",
          topic: body.topic?.trim() || "",
          message: body.message?.trim(),
          _subject: `Rozana contact — ${body.topic || "enquiry"}`,
        }
      : {
          type,
          email: body.email.trim(),
          _subject: "Rozana waitlist sign-up",
        };

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  // No endpoint configured yet: log and still succeed so the page works pre-launch.
  if (!endpoint) {
    console.log("[rozana:lead] (no CONTACT_FORM_ENDPOINT set) submission:", submission);
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(submission),
    });

    if (!res.ok) {
      console.error("[rozana:lead] forwarding failed:", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "Forwarding failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[rozana:lead] forwarding error:", err);
    return NextResponse.json({ ok: false, error: "Forwarding error." }, { status: 502 });
  }
}
