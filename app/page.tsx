'use client'

import About from "@/components/sections/home/About";
import Blogs from "@/components/sections/home/Blogs";
import Contact from "@/components/sections/home/Contact";
import Experience from "@/components/sections/home/Experience";
import Hero from "@/components/sections/home/Hero";
import Projects from "@/components/sections/home/Projects";
import Skills from "@/components/sections/home/Skills";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </main>
  );
}
