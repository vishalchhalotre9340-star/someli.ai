import PricingHero from "../../components/Pricing/hero";
import PricingPlan from "../../components/Pricing/plan";
import FAQ from "../../components/faq";
import Footer from "../../components/Footer/footer";

export default function PricingPage() {
  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <PricingHero />
      <PricingPlan />
      <FAQ />
      <Footer />
    </main>
  );
}
