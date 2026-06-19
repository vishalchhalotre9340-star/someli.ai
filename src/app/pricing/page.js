import FAQ from "../../../components/faq";
import PricingHero from "../../../components/Pricing/hero";
import PricingPlan from "../../../components/Pricing/plan";

export const metadata = {
  title: "Pricing | Someli",
  description: "Simple pricing and the tools your business needs to grow on social media.",
};

export default function PricingPage() {
  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <PricingHero />
      <PricingPlan />
      <FAQ />
    </main>
  );
}
