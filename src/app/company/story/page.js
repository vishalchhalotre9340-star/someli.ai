import BusinessGrow from "../../../../components/Company/OurStory/buisnessgrow";
import Misson from "../../../../components/Company/OurStory/misson";
import OurCertification from "../../../../components/Company/OurStory/ourcertification";
import OurJourney from "../../../../components/Company/OurStory/ourjourney";
import OurPartner from "../../../../components/Company/OurStory/ourpartner";
import OurStory from "../../../../components/Company/OurStory/ourstory";
import OurTeam from "../../../../components/Company/OurStory/ourteam";
import WhatWeDo from "../../../../components/Company/OurStory/whatwedo";

export const metadata = {
  title: "Our Story | Someli",
  description: "Learn how Someli helps organizations unlock the reach of their people.",
};

export default function StoryPage() {
  return (
    <main>
      <OurStory />
      <OurJourney />
      <Misson />
      <BusinessGrow />
      <OurTeam />
      <OurPartner />
      <OurCertification />
      <WhatWeDo />
    </main>
  );
}
