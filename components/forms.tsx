"use client";

import { useState, type FormEvent } from "react";
import { contact as contactCopy, waitlist as waitlistCopy, site } from "@/content";

type Status = "idle" | "submitting" | "success" | "error";

async function postLead(payload: Record<string, string>) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

/* ----------------------------- Waitlist form ----------------------------- */

export function WaitlistForm({
  variant = "hero",
}: {
  variant?: "hero" | "band";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const copy = variant === "hero" ? { success: waitlistCopy.success } : waitlistCopy;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const website = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    // Honeypot: if filled, silently succeed without sending.
    if (website) {
      setStatus("success");
      return;
    }
    try {
      await postLead({ type: "waitlist", email });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-2xl border-2 border-green bg-white/70 px-5 py-4 font-semibold text-green"
      >
        {waitlistCopy.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`wl-email-${variant}`} className="sr-only">
          Email address
        </label>
        <input
          id={`wl-email-${variant}`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={waitlistCopy.emailPlaceholder}
          className="min-w-0 flex-1 rounded-full border-2 border-green/25 bg-white px-5 py-3.5 text-base text-charcoal placeholder:text-charcoal/40 focus:border-green"
        />
        {/* Honeypot — hidden from humans, tempting to bots. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-tomato px-7 py-3.5 text-base font-bold text-cream transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "submitting" ? "Joining…" : waitlistCopy.cta}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-2 text-sm font-medium text-tomato">
          {waitlistCopy.error}
        </p>
      )}
    </form>
  );
}

/* ------------------------------ Contact form ------------------------------ */

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const f = contactCopy.fields;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (data.website) {
      setStatus("success");
      return;
    }
    try {
      await postLead({ type: "contact", ...data });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl border-2 border-green bg-white p-8 text-center"
      >
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green text-cream">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-bold text-green">{contactCopy.success}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border-2 border-green/20 bg-cream px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-green";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border-2 border-green/15 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-green">
            {f.name.label} <span className="text-tomato">*</span>
          </label>
          <input id="c-name" name="name" required placeholder={f.name.placeholder} autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold text-green">
            {f.email.label} <span className="text-tomato">*</span>
          </label>
          <input id="c-email" name="email" type="email" required placeholder={f.email.placeholder} autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="c-org" className="mb-1.5 block text-sm font-semibold text-green">
            {f.organisation.label}
          </label>
          <input id="c-org" name="organisation" placeholder={f.organisation.placeholder} autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="c-city" className="mb-1.5 block text-sm font-semibold text-green">
            {f.city.label}
          </label>
          <input id="c-city" name="city" placeholder={f.city.placeholder} autoComplete="address-level2" className={inputClass} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="c-topic" className="mb-1.5 block text-sm font-semibold text-green">
          {f.topic.label}
        </label>
        <select id="c-topic" name="topic" defaultValue={f.topic.options[0]} className={inputClass}>
          {f.topic.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold text-green">
          {f.message.label} <span className="text-tomato">*</span>
        </label>
        <textarea id="c-message" name="message" required rows={4} placeholder={f.message.placeholder} className={inputClass} />
      </div>

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 w-full rounded-full bg-green px-7 py-4 text-base font-bold text-cream transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : contactCopy.submit}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-3 text-sm font-medium text-tomato">
          {contactCopy.error}
        </p>
      )}

      <p className="mt-5 text-sm text-charcoal/70">
        {contactCopy.mailtoIntro}{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-navy underline decoration-2 underline-offset-2">
          {site.email}
        </a>{" "}
        {contactCopy.mailtoOutro}
      </p>
    </form>
  );
}
