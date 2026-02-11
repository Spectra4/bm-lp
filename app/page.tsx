import Hero from "@/components/Hero";
import Sops from "@/components/Sops";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyChoose from "@/components/whyChooseUs";
import ClientStats from "@/components/ClientStats";
import About from "@/components/AboutUs";
import HorizontalCTA from "@/components/HorizontalCta";
import TrustedClient from "@/components/TrustedClient";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sops />
      <Process />
      <Services />
      <WhyChoose />
      <ClientStats />
      <About />
      <HorizontalCTA />
      <TrustedClient />
      <FAQSection />
      <Footer />
    </main>
  );
}
