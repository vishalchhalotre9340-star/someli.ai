import BecomePartner from "../../../../components/Company/CarrierandPartnership/becomepartner";
import CancelAnytime from "../../../../components/Company/CarrierandPartnership/cancelanytime";
import Carrier from "../../../../components/Company/CarrierandPartnership/carrier";
import CarrierAndPartnership from "../../../../components/Company/CarrierandPartnership/carrierandpartnership";
import LifeAtSomeli from "../../../../components/Company/CarrierandPartnership/lifeatsomeli";
import LookingFor from "../../../../components/Company/CarrierandPartnership/lookingfor";
import Partnership from "../../../../components/Company/CarrierandPartnership/partnership";
import WhatWeGive from "../../../../components/Company/CarrierandPartnership/whatwegive";
import WhyJoinSomeli from "../../../../components/Company/CarrierandPartnership/whyjoinsomeli";

export const metadata = {
  title: "Careers & Partnerships | Someli",
  description: "Join Someli or partner with our employee advocacy platform.",
};

export default function CareersAndPartnershipsPage() {
  return (
    <main>
      <CarrierAndPartnership />
      <CancelAnytime />
      <Partnership />
      <LookingFor />
      <WhatWeGive />
      <BecomePartner />
      <Carrier />
      <WhyJoinSomeli />
      <LifeAtSomeli />
    </main>
  );
}
