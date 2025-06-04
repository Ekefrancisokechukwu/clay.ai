import Header from "components/Header";
import { Hero } from "./Hero";
import Startupslogo from "./Startupslogo";
import CrmSection from "./CrmSection";
import CampaignSection from "./CampaignSection";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import Faqs from "./Faq";
import Footer from "./Footer";

export function Welcome() {
  return (
    <main>
      <Header />
      <Hero />
      <Startupslogo />
      <CrmSection />
      <CampaignSection />
      <WhyUs />
      <Testimonial />
      <Faqs />
      <Footer />
    </main>
  );
}
