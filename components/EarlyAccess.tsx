"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  AUDIENCES,
  cleanEarlyAccess,
  isAudience,
  validateEarlyAccess,
  type FieldErrors,
  type FieldName,
} from "@/lib/audiences";
import { btnPrimary, fieldClass } from "@/lib/classes";
import { CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "submitting" | "saved" | "preview" | "error";

const FIELD_ORDER: FieldName[] = ["name", "email", "company", "role", "audience", "needs", "consent"];

/**
 * Posts JSON to NEXT_PUBLIC_FORM_ENDPOINT when that env var is set (Formspree or similar).
 * Otherwise posts to /api/early-access.
 * TODO: Set an endpoint before sharing the site. See .env.example and README.
 */
export function EarlyAccess() {
  const baseId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [audience, setAudience] = useState("");
  const [needs, setNeeds] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const apply = (value: string | null) => {
      if (isAudience(value)) setAudience(value);
    };
    apply(new URLSearchParams(window.location.search).get("join"));
    const onJoin = (event: Event) => apply((event as CustomEvent<string>).detail);
    window.addEventListener("trovey:join", onJoin);
    return () => window.removeEventListener("trovey:join", onJoin);
  }, []);

  const input = { name, email, company, role, audience, needs, consent };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEarlyAccess(input);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = FIELD_ORDER.find((field) => nextErrors[field]);
      requestAnimationFrame(() => document.getElementById(fieldId(baseId, first ?? "name"))?.focus());
      return;
    }

    setStatus("submitting");
    const payload = cleanEarlyAccess(input);
    const direct = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();

    try {
      const response = await fetch(direct || "/api/early-access", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      if (direct) {
        setStatus("saved");
        return;
      }

      const body = (await response.json()) as { ok?: boolean; stored?: boolean };
      setStatus(body.stored ? "saved" : "preview");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="early-access" className="scroll-mt-24 bg-ink py-20 text-paper sm:py-28" data-theme="dark" aria-labelledby="early-access-title">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <SectionHeading
          id="early-access-title"
          tone="dark"
          eyebrow="Early access"
          title="Ask for a seat. Nothing is live yet."
          intro="Tell us who you are and what data you need or offer. We use this only to contact you about early access."
        />

        <div className="rounded-3xl bg-white p-6 text-body shadow-[0_24px_60px_-36px_rgba(0,0,0,0.7)] sm:p-8" data-theme="light">
          {status === "saved" || status === "preview" ? (
            <Success name={name.trim()} email={email.trim()} status={status} />
          ) : (
            <form onSubmit={onSubmit} noValidate aria-busy={status === "submitting"}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id={fieldId(baseId, "name")}
                  name="name"
                  label="Name"
                  value={name}
                  autoComplete="name"
                  error={errors.name}
                  onChange={(value) => {
                    setName(value);
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                />
                <Field
                  id={fieldId(baseId, "email")}
                  name="email"
                  label="Work email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  error={errors.email}
                  onChange={(value) => {
                    setEmail(value);
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                />
                <Field
                  id={fieldId(baseId, "company")}
                  name="company"
                  label="Company"
                  value={company}
                  autoComplete="organization"
                  error={errors.company}
                  onChange={(value) => {
                    setCompany(value);
                    setErrors((prev) => ({ ...prev, company: undefined }));
                  }}
                />
                <Field
                  id={fieldId(baseId, "role")}
                  name="role"
                  label="Role"
                  value={role}
                  autoComplete="organization-title"
                  error={errors.role}
                  onChange={(value) => {
                    setRole(value);
                    setErrors((prev) => ({ ...prev, role: undefined }));
                  }}
                />
              </div>

              <div className="mt-5">
                <label htmlFor={fieldId(baseId, "audience")} className="block text-sm font-semibold text-navy">
                  I am a... <RequiredMark />
                </label>
                <select
                  id={fieldId(baseId, "audience")}
                  name="audience"
                  className={fieldClass}
                  value={audience}
                  aria-invalid={Boolean(errors.audience)}
                  aria-describedby={errors.audience ? errorId(baseId, "audience") : undefined}
                  onChange={(event) => {
                    setAudience(event.target.value);
                    setErrors((prev) => ({ ...prev, audience: undefined }));
                  }}
                >
                  <option value="">Select one</option>
                  {AUDIENCES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {errors.audience ? <FieldError id={errorId(baseId, "audience")}>{errors.audience}</FieldError> : null}
              </div>

              <div className="mt-5">
                <label htmlFor={fieldId(baseId, "needs")} className="block text-sm font-semibold text-navy">
                  What data do you need or offer? <span className="font-medium text-muted">(optional)</span>
                </label>
                <textarea
                  id={fieldId(baseId, "needs")}
                  name="needs"
                  rows={4}
                  maxLength={800}
                  className={fieldClass}
                  value={needs}
                  aria-invalid={Boolean(errors.needs)}
                  aria-describedby={errors.needs ? errorId(baseId, "needs") : undefined}
                  onChange={(event) => {
                    setNeeds(event.target.value);
                    setErrors((prev) => ({ ...prev, needs: undefined }));
                  }}
                />
                {errors.needs ? <FieldError id={errorId(baseId, "needs")}>{errors.needs}</FieldError> : null}
              </div>

              <div className="mt-5">
                <label htmlFor={fieldId(baseId, "consent")} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                  <input
                    id={fieldId(baseId, "consent")}
                    name="consent"
                    type="checkbox"
                    className="mt-1 h-5 w-5 shrink-0 accent-teal-strong"
                    checked={consent}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? errorId(baseId, "consent") : undefined}
                    onChange={(event) => {
                      setConsent(event.target.checked);
                      setErrors((prev) => ({ ...prev, consent: undefined }));
                    }}
                  />
                  <span>
                    I agree to Trovey storing these details and contacting me about early access. I have read the{" "}
                    <Link href="/privacy" className="font-semibold text-teal-strong underline decoration-teal/40 underline-offset-2">
                      Privacy Policy
                    </Link>
                    . <RequiredMark />
                  </span>
                </label>
                {errors.consent ? <FieldError id={errorId(baseId, "consent")}>{errors.consent}</FieldError> : null}
              </div>

              {status === "error" ? (
                <p role="alert" className="mt-5 text-sm leading-relaxed text-[#9f1239]">
                  We could not send that just now. Email{" "}
                  <a className="font-semibold underline" href={`mailto:${CONTACT_EMAIL}?subject=Trovey%20early%20access`}>
                    {CONTACT_EMAIL}
                  </a>{" "}
                  and we will add you by hand.
                </p>
              ) : null}

              <button type="submit" className={`${btnPrimary} mt-6 w-full sm:w-auto`} disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Request early access"}
              </button>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                No purchase, no account, and no live marketplace yet. This is a request to be contacted.
              </p>
            </form>
          )}

          <noscript>
            <p className="mt-4 text-sm leading-relaxed text-body">
              Email{" "}
              <a className="font-semibold text-teal-strong underline" href={`mailto:${CONTACT_EMAIL}?subject=Trovey%20early%20access`}>
                {CONTACT_EMAIL}
              </a>{" "}
              to join early access. Include your name, company, role, and whether you need data or offer it.
            </p>
          </noscript>
        </div>
      </Container>
    </section>
  );
}

function Success({ name, email, status }: { name: string; email: string; status: "saved" | "preview" }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div role="status" aria-live="polite">
      <h3 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-semibold tracking-tight text-ink outline-none">
        {status === "saved" ? "You're on the early access list." : "Received — not saved yet."}
      </h3>
      {status === "saved" ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thanks, {name}. We will write to {email} as early access opens. Nothing is live yet — this is not an account
          and not a purchase.
        </p>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thanks, {name}. This preview checked your request, but it is not stored until a form endpoint is connected.
          Email{" "}
          <a className="font-semibold text-teal-strong underline" href={`mailto:${CONTACT_EMAIL}?subject=Trovey%20early%20access`}>
            {CONTACT_EMAIL}
          </a>{" "}
          if you want a person to see it.
        </p>
      )}
    </div>
  );
}

function Field({
  id,
  name,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  const errorDomId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-navy">
        {label} <RequiredMark />
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        maxLength={type === "email" ? 254 : 160}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorDomId : undefined}
        className={fieldClass}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <FieldError id={errorDomId}>{error}</FieldError> : null}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="mt-2 text-sm text-[#9f1239]">
      {children}
    </p>
  );
}

function RequiredMark() {
  return (
    <>
      <span className="text-[#9f1239]" aria-hidden="true">
        *
      </span>
      <span className="sr-only"> required</span>
    </>
  );
}

function fieldId(base: string, name: string) {
  return `${base.replace(/:/g, "")}-${name}`;
}

function errorId(base: string, name: string) {
  return `${fieldId(base, name)}-error`;
}
