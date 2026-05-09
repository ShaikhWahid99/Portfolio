import type { ContactField } from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MIN_MESSAGE_LENGTH = 10;

export type ValidatedContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactValidationResult =
  | { ok: true; data: ValidatedContactPayload }
  | { ok: false; fieldErrors: Partial<Record<ContactField, string>> };

function getTrimmedString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function parseAndValidateContactForm(formData: FormData): ContactValidationResult {
  const name = getTrimmedString(formData, "name");
  const email = getTrimmedString(formData, "email");
  const subject = getTrimmedString(formData, "subject");
  const message = getTrimmedString(formData, "message");

  const fieldErrors: Partial<Record<ContactField, string>> = {};

  if (!name) fieldErrors.name = "Name is required.";
  if (!email) fieldErrors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (!subject) fieldErrors.subject = "Subject is required.";
  if (!message) fieldErrors.message = "Message is required.";
  else if (message.length < MIN_MESSAGE_LENGTH) {
    fieldErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return { ok: true, data: { name, email, subject, message } };
}
