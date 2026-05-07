import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Backend-focused full stack developer portfolio for Wahid Shaikh, featuring MERN, FastAPI, RAG, cloud, and secure API projects.",
  authors: [{ name: "Wahid Shaikh" }],
  openGraph: {
    title: "Wahid Shaikh | Backend-focused Full Stack Developer",
    description: "Backend, AI, cloud, and full-stack projects by Wahid Shaikh.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
