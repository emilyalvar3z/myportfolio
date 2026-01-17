import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />

      <main className="pt-20">
        <Hero language={language} />
        <Services language={language} />
        <About language={language} />
        <Testimonials language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}
