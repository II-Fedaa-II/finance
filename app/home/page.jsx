import React from "react";
import Navbar from "../navbar/page";
import WelcomeComponent from "./components/welcomeComp";
import ServicesComponent from "./components/services";
import CardsComponent from "./components/cardsComp";
import SwiperComponent from "../components/Swiper";
import BenefitsSection from "./components/benefitsSections";
import VisaSection from "./components/visaSection";

const HomePage = () => {
  
  return (
    <div className="md:mx-8 lg:mx-32 space-y-24">
      <Navbar />
      <div className="flex flex-row mt-14 mb-10 justify-between">
        <WelcomeComponent />
        <CardsComponent />
      </div>
      <SwiperComponent />
      <ServicesComponent />
      <BenefitsSection />
      <VisaSection />
    </div>
  );
};

export default HomePage;
