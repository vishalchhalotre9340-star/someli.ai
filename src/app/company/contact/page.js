import ContactUs from "../../../../components/Company/Contactus/contactus";
import Faqs from "../../../../components/Company/Contactus/Faqs";
import Headquater from "../../../../components/Company/Contactus/Headquater";
import OurPartnership from "../../../../components/Company/Contactus/ourpartnership";

export const metadata = {
  title: "Contact Us | Someli",
  description: "Contact Someli for sales, partnerships, support, or a product demonstration.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactUs />
      <Headquater />
      <Faqs />
      <OurPartnership />
    </main>
  );
}
