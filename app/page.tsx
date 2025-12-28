import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import CoreIdea from "@/components/CoreIdea";
import Features from "@/components/Features";
import Philosophy from "@/components/Philosophy";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatIs />
      <CoreIdea />
      <Features />
      <Philosophy />
      <EmailSignup />
      <Footer />
    </main>
  );
}
