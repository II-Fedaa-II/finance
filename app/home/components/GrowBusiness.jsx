import { blueGardient } from "@/app/constants/Colors";
import React from "react";

const GrowBusiness = () => {
  return (
    <div className="h-[50vh] bg-gradient-to-r from-[#13a5ff] to-[#00eeff] flex flex-col justify-center items-center px-24 space-y-6">
      <p className="text-6xl font-semibold text-center">
        Let's grow your business, together.
      </p>
      <div className="bg-white hover:bg-black">
        <button className={`${blueGardient} px-10 py-5 hover:text-white font-bold`}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GrowBusiness;
