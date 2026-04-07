import PromoBar from "@/components/promo-bar";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HeroCards from "@/components/hero-cards";
import Testimonial from "@/components/testimonial";
import Section1 from "@/components/section-1";
import ScrollingTicker from "@/components/scrolling-ticker";
import Section2 from "@/components/section-2";
import Section3 from "@/components/section-3";
import Section4 from "@/components/section-4";
import Section5 from "@/components/section-5";
import Section6 from "@/components/section-6";
import FreeOfferForm from "@/components/free-offer-form";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main>
      <PromoBar />
      <Header />
      <Hero />
      <HeroCards />
      <Testimonial />
      <Section1 />
      <ScrollingTicker />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <FreeOfferForm />
      <Footer />
    </main>
  );
}
