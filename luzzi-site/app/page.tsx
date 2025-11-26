"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
