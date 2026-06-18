import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import CarrierAndPartnership from "../../../components/Company/CarrierandPartnership/carrierandpartnership";
import CancelAnytime from "../../../components/Company/CarrierandPartnership/cancelanytime";
import Partnership from "../../../components/Company/CarrierandPartnership/partnership";
import Lookingfor from "../../../components/Company/CarrierandPartnership/lookingfor";  
import Whatwegive from "../../../components/Company/CarrierandPartnership/whatwegive";   
import BecomePartner from "../../../components/Company/CarrierandPartnership/becomepartner";    
import Carrier from "../../../components/Company/CarrierandPartnership/carrier";
import WhyJoinSomeli from "@/components/Company/CarrierandPartnership/whyjoinsomeli";
import LifeAtSomeli from "@/components/Company/CarrierandPartnership/lifeatsomeli";                                           
export default function CarrierAndPartnershipPage() {
  return (
    <main>
      <Navbar />
      <CarrierAndPartnership />
      <CancelAnytime />
      <Partnership /> 
      <Lookingfor />  
      <Whatwegive /> 
      <BecomePartner />  
      <Carrier />
      <WhyJoinSomeli />
      <LifeAtSomeli />
      <Footer />
    </main>
  );
}