import type { Metadata } from "next";
import { SpaceBackground } from "@/components/backgrounds/SpaceBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wahid Shaikh | Full Stack Developer",
  description:
    "Full Stack Developer portfolio for Wahid Shaikh, featuring MERN, Next.js, FastAPI, RAG, and high-performance web applications.",
  authors: [{ name: "Wahid Shaikh" }],
  openGraph: {
    title: "Wahid Shaikh | Full Stack Developer",
    description: "Full stack, AI, and cloud projects by Wahid Shaikh.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <SpaceBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
