"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Check } from "lucide-react";
import { Display, Eyebrow, Lead } from "@/components/ui-fx/text-system";
import { Glowy } from "@/components/ui-fx/glowy";
import { PrimaryButton } from "@/components/ui-fx/primary-button";
import {
  GithubIcon,
  LinkedinIcon,
  SocialButton,
} from "@/components/ui-fx/social-icons";
import { profile } from "@/data/portfolio";

function Field({
  label,
  name,
  type = "text",
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
}) {
  return (
    <label className="group relative block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required
          rows={5}
          className="w-full resize-none rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:bg-secondary focus:shadow-glow"
          placeholder="Tell me about your project..."
        />
      ) : (
        <input
          type={type}
          name={name}
          required
          className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:bg-secondary focus:shadow-glow"
          placeholder=" "
        />
      )}
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow className="mb-6">Contact</Eyebrow>
        <Display className="max-w-3xl">
          Need a backend or AI app{" "}
          <span className="text-gradient">built well</span>?
        </Display>
        <Lead className="mt-6">
          Open to backend, full-stack, cloud, and AI application opportunities.
          Reach out for collaborations, internships, or project work.
        </Lead>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Glowy inner="p-8">
            <h3 className="text-xl font-semibold text-foreground">Reach me</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Email is the best way to start a conversation.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-4 transition-all hover:border-primary/40 hover:bg-secondary"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <Mail className="h-4 w-4 text-primary-foreground" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Email
                  </span>
                  <span className="block text-sm font-medium text-foreground">
                    {profile.email}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <MapPin className="h-4 w-4 text-primary-foreground" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Location
                  </span>
                  <span className="block text-sm font-medium text-foreground">
                    {profile.location}
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <SocialButton href={profile.social.github} label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </SocialButton>
              <SocialButton href={profile.social.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </SocialButton>
            </div>
          </Glowy>
          <Glowy inner="p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Subject" name="subject" />
              <Field label="Message" name="message" as="textarea" />
              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">
                  By sending you agree to be contacted by email.
                </p>
                <PrimaryButton
                  type="submit"
                  icon={
                    sent ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )
                  }
                >
                  {sent ? "Sent!" : "Send message"}
                </PrimaryButton>
              </div>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-primary"
                >
                  Thanks, I will get back to you shortly.
                </motion.p>
              )}
            </form>
          </Glowy>
        </div>
      </div>
    </section>
  );
}
