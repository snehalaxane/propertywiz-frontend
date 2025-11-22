import Hero from "@/components/Hero/hero"
import DreamHouseContact from "@/components/DreamHouseContact/DreamHouseContact";
import Testimonials from "@/components/Testimonials/testimonials"
import HiddenRisksSection from "@/components/HiddenRisksSection/HiddenRisksSection"
import AuditSolutionSection from "@/components/AuditSolutionSection/AuditSolutionSection"
import TwoPillarVerification from "@/components/TwoPillarVerification/TwoPillarVerification"
import PropertyCoverageSection from "@/components/PropertyCoverageSection/PropertyCoverageSection"
import AuditProcessSection from "@/components/AuditProcessSection/AuditProcessSection"


export default function HomePage() {
  return (
    <>
      <Hero />
      <HiddenRisksSection />
      <AuditSolutionSection />
      <TwoPillarVerification />
      <PropertyCoverageSection />
      <AuditProcessSection />
       <Testimonials /> 
      <DreamHouseContact />
    </>
  );
}

