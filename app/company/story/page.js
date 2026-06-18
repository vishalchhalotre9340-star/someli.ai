import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import Misson from "../../../components/Company/misson";
import OurStory from "../../../components/Company/ourstory";
import OurJourney from "../../../components/Company/ourjourney";
import OurTeam from "../../../components/Company/ourteam";
import BusinessGrow from "../../../components/Company/buisnessgrow";
import OurPartner from "../../../components/Company/ourpartner";
import OurCertification from "../../../components/Company/ourcertification";
import WhatWeDo from "../../../components/Company/whatwedo";

export default function StoryPage() {
  return (
    <main>
      <Navbar />
      <OurStory />
      <OurJourney />
      <Misson />
      <BusinessGrow />
      <OurTeam />
      <OurPartner />
      <OurCertification />
      <WhatWeDo />
      <Footer />
    </main>
  );
}
