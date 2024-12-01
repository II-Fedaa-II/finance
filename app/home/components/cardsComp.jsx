"use client";
import Card from "@/app/components/Card";
import { WifiIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const CardsComponent = () => {
  const [currency, setCurrency] = useState(false);
  const switchToUSD = () => {};
  return (
    <div className="relative flex items-center justify-center w-[450px] h-[450px]">
      {/* Circle */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#139dff]"></div>

      {/* First Visa Card (bottom) */}
      <div
        onClick={switchToUSD}
        className={`hover:cursor-pointer absolute top-[120px] md:w-[320px] lg:w-[350px] h-[200px] bg-gradient-to-r from-[#000000] to-[#434343] rounded-xl shadow-xl transform rotate-3 translate-z-0 flex flex-col justify-between p-6`}
      >
        {/* Card Details */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold text-white">Visa</p>
          <div className="h-8 w-12 bg-yellow-400 rounded-sm flex justify-center items-center">
            <WifiIcon className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="text-white mb-2">
          <p className="text-sm">Card Number</p>
          <p className="text-xl font-semibold">1234 56789 01234 56789</p>
        </div>

        <div className="flex justify-between mt-4 text-white">
          <div>
            <p className="text-xs">Card Holder</p>
            <p className="text-sm font-medium">USD JOHN DOE</p>
          </div>
          <div>
            <p className="text-xs">Expires</p>
            <p className="text-sm font-medium">12/24</p>
          </div>  
        </div>
      </div>

      {/* Second Visa Card (top, slightly rotated for 3D effect) */}
      <div className="absolute top-[90px] md:w-[320px] lg:w-[350px] h-[200px] bg-gradient-to-r from-[#000000] to-[#434343] rounded-xl shadow-2xl transform rotate-12 translate-z-10 flex flex-col justify-between p-6">
        {/* Card Details */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold text-white">Visa</p>
          <div className="h-8 w-12 bg-yellow-400 rounded-sm flex justify-center items-center">
            <WifiIcon className="h-5 w-5 text-gray-200 rotate-90" />
          </div>
        </div>

        <div className="text-white mb-2">
          <p className="text-sm">Card Number</p>
          <p className="text-xl font-semibold">1234 5678 9012 3456</p>
        </div>

        <div className="flex justify-between mt-4 text-white">
          <div>
            <p className="text-xs">Card Holder</p>
            <p className="text-sm font-medium">John Doe</p>
          </div>
          <div>
            <p className="text-xs">Expires</p>
            <p className="text-sm font-medium">12/24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
