import BlogSection from "@/components/HomePage/Blog/BlogSection";
import FinalCTA from "@/components/HomePage/CTA/FinalCTA";
import ReachCTA from "@/components/HomePage/CTA/ReachCTA";
import Certifications from "@/components/HomePage/Features/Certifications";
import ContentManagement from "@/components/HomePage/Features/ContentManagement";
import ManagementSystem from "@/components/HomePage/Features/ManagementSystem";
import ProvenImpact from "@/components/HomePage/Features/ProvenImpact";
import Transformation from "@/components/HomePage/Features/Transformation";
import Workflow from "@/components/HomePage/Features/Workflow";
import Hero from "@/components/HomePage/Hero/Hero";
import ImpactStrip from "@/components/HomePage/ImpactStrip/ImpactStrip";
import Pricing from "@/components/HomePage/Pricing/Pricing";
import TeamGrowth from "@/components/HomePage/Testimonials/TeamGrowth";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStrip />
      <TeamGrowth />
      <ManagementSystem />
      {/* <ProvenImpact /> */}
      <ImpactStrip />
      <ContentManagement />
      <Transformation />
      <Workflow />
      <ReachCTA />
      <Pricing />
      <BlogSection />
      <Certifications />
      <FinalCTA />
    </main>
  );
}
