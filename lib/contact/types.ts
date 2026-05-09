export type ContactField = "name" | "email" | "subject" | "message";

export type ContactActionState = {
  ok: boolean;
  error: string | null;
  fieldErrors: Partial<Record<ContactField, string>>;
};

export const initialContactActionState: ContactActionState = {
  ok: false,
  error: null,
  fieldErrors: {},
};
