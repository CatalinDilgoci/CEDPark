import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { SeoTextSection } from "@/components/site/SeoTextSection";
import { LocationSection } from "@/components/site/LocationSection";
import { LandSection } from "@/components/site/LandSection";
import { PotentialSection } from "@/components/site/PotentialSection";
import { InvestmentSection } from "@/components/site/InvestmentSection";
import { EnergySection } from "@/components/site/EnergySection";
import { EnergyInfrastructureSection } from "@/components/site/EnergyInfrastructureSection";
import { EcosystemSection } from "@/components/site/EcosystemSection";
import { ProximitySection } from "@/components/site/ProximitySection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CED Park Craiova North" },
      {
        name: "description",
        content:
          "Teren industrial, logistic si retail de 65 hectare in Craiova, acces rapid la DEx12 si infrastructura completa pentru investitii",
      },
      { property: "og:title", content: "CED Park Craiova North" },
      {
        property: "og:description",
        content:
          "Teren industrial de 65 hectare in Craiova, acces DEx12 si infrastructura completa pentru investitii",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "CED Park Craiova North" },
      {
        name: "twitter:description",
        content:
          "Teren industrial de 65 hectare in Craiova, acces DEx12 si infrastructura completa pentru investitii",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CookieConsentProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <SeoTextSection />
            <LocationSection />
            <LandSection />
            <PotentialSection />
            <InvestmentSection />
            <EnergySection />
            <ProximitySection />
            <EnergyInfrastructureSection />
            <EcosystemSection />
            <ContactSection />
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </LanguageProvider>
    </CookieConsentProvider>
  );
}
