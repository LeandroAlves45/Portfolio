// App.tsx - Componente principal do aplicativo
// Define a estrutura e o conteúdo do aplicativo

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function App() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
