import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { People } from "@/components/sections/people";
import { Projects } from "@/components/sections/projects";
import { Software } from "@/components/sections/software";
import { TGen } from "@/components/sections/tgen";
import { Publications } from "@/components/sections/publications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <People />
      <Projects />
      <Software />
      <TGen />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}
