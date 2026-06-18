import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import Misson from "../../../components/Company/OurStory/misson";
import OurStory from "../../../components/Company/OurStory/ourstory";
import OurJourney from "../../../components/Company/OurStory/ourjourney";
import OurTeam from "../../../components/Company/OurStory/ourteam";
import BusinessGrow from "../../../components/Company/OurStory/buisnessgrow";
import OurPartner from "../../../components/Company/OurStory/ourpartner";
import OurCertification from "../../../components/Company/OurStory/ourcertification";
import WhatWeDo from "../../../components/Company/OurStory/whatwedo";

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
