export const AUDIENCES = [
  { value: "business", label: "Business seeking data" },
  { value: "provider", label: "Data provider" },
  { value: "investor", label: "Investor" },
  { value: "other", label: "Other" },
] as const;

export type Audience = (typeof AUDIENCES)[number]["value"];

export function isAudience(value: string | null | undefined): value is Audience {
  return AUDIENCES.some((item) => item.value === value);
}

export type EarlyAccessInput = {
  name: string;
  email: string;
  company: string;
  role: string;
  audience: string;
  needs: string;
  consent: boolean;
};

export type FieldName = "name" | "email" | "company" | "role" | "audience" | "needs" | "consent";

export type FieldErrors = Partial<Record<FieldName, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEarlyAccess(input: EarlyAccessInput): FieldErrors {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const company = input.company.trim();
  const role = input.role.trim();
  const needs = input.needs.trim();

  if (name.length < 2 || name.length > 120) errors.name = "Enter your name.";
  if (!EMAIL.test(email) || email.length > 254) errors.email = "Enter a work email address.";
  if (company.length < 2 || company.length > 160) errors.company = "Enter your company.";
  if (role.length < 2 || role.length > 120) errors.role = "Enter your role.";
  if (!isAudience(input.audience)) errors.audience = "Select the option that fits you.";
  if (needs.length > 800) errors.needs = "Please keep this to 800 characters.";
  if (input.consent !== true) errors.consent = "Consent is required before we can contact you.";

  return errors;
}

export function cleanEarlyAccess(input: EarlyAccessInput) {
  return {
    name: input.name.trim(),
    email: input.email.trim(),
    company: input.company.trim(),
    role: input.role.trim(),
    audience: input.audience as Audience,
    needs: input.needs.trim(),
    consent: true as const,
  };
}
