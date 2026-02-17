import Layout from "@/components/Layout";
import HeroSection from "@/components/homepage/HeroSection";
import ProblemSection from "@/components/homepage/ProblemSection";
import SolutionSection from "@/components/homepage/SolutionSection";
import HowItWorksSection from "@/components/homepage/HowItWorksSection";
import IndustriesSection from "@/components/homepage/IndustriesSection";
import BenefitsSection from "@/components/homepage/BenefitsSection";
import FinalCTASection from "@/components/homepage/FinalCTASection";

const Homepage = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <IndustriesSection />
      <BenefitsSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Homepage;
