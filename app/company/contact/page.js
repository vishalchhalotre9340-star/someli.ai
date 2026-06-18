import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import ContactUs from "@/components/Company/Contactus/contactus";
import Headquater from "@/components/Company/Contactus/Headquater";
import Faqs from "@/components/Company/Contactus/Faqs"; 
import OurPartnership from "@/components/Company/Contactus/ourpartnership"; 
export default function ContactusPage() {
  return (
    <main>
    <Navbar />
    <ContactUs />
    <Headquater />   
    <Faqs />
    <OurPartnership />
    <Footer />

    </main> 
  );
}