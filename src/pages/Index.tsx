
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ClientSection from "@/components/ClientSection";
import TripleVerifiedSection from "@/components/TripleVerifiedSection";
import FeaturesSection from "@/components/FeaturesSection";
import AIPersonalizedSection from "@/components/AiPersonalizedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SalesToolkitSection from "@/components/SalesToolkitSection";
import AIResearchSection from "@/components/AiResearchSection";
import TripleVerifiedEmailSection from "@/components/TripleVerifiedEmailSection";
import PersonalizedEmailSection from "@/components/PersonalizedEmailSection";
import IntegrationEmailSection from "@/components/IntegrationEmailSection";
import CTASection from "@/components/CTASection";
import SuperchargeSection from "@/components/SuperchargeSection";
import FAQSection from "@/components/FAQSection";
import ContactSupportSection from "@/components/ContactSupportSection";
import SignupCardSection from "@/components/SignupCardSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ClientSection />
      <TripleVerifiedSection />
      <FeaturesSection />
      <AIPersonalizedSection />
      <TestimonialsSection />
      <SalesToolkitSection />
      <AIResearchSection />
      <TripleVerifiedEmailSection />
      <PersonalizedEmailSection />
      <IntegrationEmailSection />
      <CTASection />
      <SuperchargeSection />
      <FAQSection />
      <ContactSupportSection />
      <SignupCardSection />
      <Footer />
    </div>
  );
};

export default Index;
