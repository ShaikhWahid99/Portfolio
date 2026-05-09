"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { allowContactSubmission } from "@/lib/contact/rate-limit";
import type { ContactActionState } from "@/lib/contact/types";
import { parseAndValidateContactForm } from "@/lib/contact/validate";
import { profile } from "@/data/portfolio";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clientKeyFromHeaders(headerList: Headers): string {
  const forwarded = headerList.get("x-forwarded-for");
  const firstForwarded = forwarded?.split(",")[0]?.trim();
  return firstForwarded || headerList.get("x-real-ip") || "unknown";
}

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true, error: null, fieldErrors: {} };
  }

  const validated = parseAndValidateContactForm(formData);
  if (!validated.ok) {
    return {
      ok: false,
      error: null,
      fieldErrors: validated.fieldErrors,
    };
  }

  const headerList = await headers();
  if (!allowContactSubmission(clientKeyFromHeaders(headerList))) {
    return {
      ok: false,
      error: "Too many messages sent. Please try again in a few minutes.",
      fieldErrors: {},
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || profile.email;

  if (!apiKey || !from) {
    return {
      ok: false,
      error: "Message could not be sent. Please try again later.",
      fieldErrors: {},
    };
  }

  const { name, email, subject, message } = validated.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r\n/g, "\n").replace(/\n/g, "<br/>");

  const html = `
    <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
    <p><strong>Subject:</strong> ${safeSubject}</p>
    <p>${safeMessage}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html,
    text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
  });

  if (error) {
    console.error("[contact] Resend API error:", error);
    const detail =
      process.env.NODE_ENV === "development" && error != null
        ? (typeof error === "object" && "message" in error && typeof (error as { message: unknown }).message === "string"
            ? (error as { message: string }).message
            : JSON.stringify(error))
        : null;
    return {
      ok: false,
      error: detail ?? "Could not send your message. Please try again.",
      fieldErrors: {},
    };
  }

  return { ok: true, error: null, fieldErrors: {} };
}
