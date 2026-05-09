

import { Menu } from "@/components/ui-fx/menu";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { ComponentsShowcase } from "@/components/sections/components-showcase";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative text-foreground">
      <Menu />
      <About />
      <Skills />
      <Projects />
      <ComponentsShowcase />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
