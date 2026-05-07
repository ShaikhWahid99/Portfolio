import { Display, Eyebrow, Lead } from "@/components/ui-fx/text-system";
import { InfiniteSlider } from "@/components/ui-fx/infinite-slider";
import { Glowy } from "@/components/ui-fx/glowy";
import { Basic } from "@/components/ui-fx/basic-card";
import { stack } from "@/data/portfolio";
import { Bot, Braces, Database, GitBranch, Lock, Server } from "lucide-react";

const blocks = [
  {
    icon: Server,
    title: "REST APIs",
    desc: "Node.js, Express.js, FastAPI, and secure service design.",
  },
  {
    icon: Lock,
    title: "Authentication",
    desc: "JWT, Passport.js, Google OAuth, bcrypt, and protected routes.",
  },
  {
    icon: Bot,
    title: "AI workflows",
    desc: "LangChain, RAG, LLM APIs, vector databases, and OCR pipelines.",
  },
  {
    icon: Database,
    title: "Data systems",
    desc: "MongoDB, PostgreSQL, MySQL, Neo4j, and ChromaDB.",
  },
  {
    icon: GitBranch,
    title: "Realtime apps",
    desc: "WebRTC, Socket.IO, signaling, and collaborative whiteboards.",
  },
  {
    icon: Braces,
    title: "Typed frontend",
    desc: "React, TypeScript, Tailwind CSS, ReactFlow, and API-first UI.",
  },
];

export function ComponentsShowcase() {
  return (
    <section id="components" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow className="mb-6">Capabilities</Eyebrow>
        <Display className="max-w-3xl">
          Backend-first skills for <span className="text-gradient">full-stack products</span>.
        </Display>
        <Lead className="mt-6">
          A quick map of the systems, tools, and application patterns I have worked with.
        </Lead>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map(({ icon: Icon, title, desc }) => (
            <Glowy key={title} inner="p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </Glowy>
          ))}
        </div>
      </div>
      <div className="mt-16 space-y-6">
        <InfiniteSlider speed={40}>
          {stack.map((s) => (
            <Basic
              key={s}
              className="flex items-center gap-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {s}
            </Basic>
          ))}
        </InfiniteSlider>
        <InfiniteSlider speed={50} reverse>
          {[...stack].reverse().map((s) => (
            <Basic
              key={s + "r"}
              className="flex items-center gap-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {s}
            </Basic>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
