import React from "react";
import Navbar from "../navbar/page";
import WelcomeComponent from "./components/welcomeComp";
import ServicesComponent from "./components/services";
import CardsComponent from "./components/cardsComp";
import SwiperComponent from "../components/Swiper";
import BenefitsSection from "./components/benefitsSections";
import VisaSection from "./components/visaSection";
import Feedbacks from "./components/Feedbacks";
import MarqueeComponent from "../components/Marquee";
import GrowBusiness from "./components/GrowBusiness";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
      <div className="md:mx-8 lg:mx-24 space-y-24">
        <Navbar />
        <div className="flex flex-row mt-14 mb-10 justify-between">
          <WelcomeComponent />
          <CardsComponent />
        </div>
        <MarqueeComponent />
        <ServicesComponent />
        <BenefitsSection />
        <VisaSection />
        <Feedbacks />
        <GrowBusiness />
      <Footer />
      </div>
  );
};

export default HomePage;
