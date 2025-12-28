import Hero from "@/components/Hero";
import WhatIsTectonika from "@/components/WhatIsTectonika";
import CoreIdea from "@/components/CoreIdea";
import Features from "@/components/Features";
import Philosophy from "@/components/Philosophy";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatIsTectonika />
      <CoreIdea />
      <Features />
      <Philosophy />
      <EmailSignup />
      <Footer />
    </main>
  );
}
