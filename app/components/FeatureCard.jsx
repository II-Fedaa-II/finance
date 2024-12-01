import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-[#363636] p-10 space-y-6">
      <div className="h-0.5 w-12 bg-white"></div>
      <h1 className="font-semibold font-sans text-2xl">{title}</h1>
      <p className="text-gray-400">{description}</p>
      <div className="flex justify-end">
        <button className="p-4 bg-black bg-gradient-to-r hover:from-[#13a5ff] hover:to-[#00ffee] justify-center items-center">
          <ArrowUpRightIcon className="h-6 w-6 stroke-2" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
