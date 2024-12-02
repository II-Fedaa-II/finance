import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const TeaserCard = ({ title, description, icon }) => {
  return (
    <div className="p-10 border border-[#363636] hover:bg-[#363636] w-fit space-y-4 group">
      {/* The icon wrapper changes on hover of the parent */}
      <div className="bg-[#fff] p-2 inline-flex items-center justify-center text-black group-hover:bg-gradient-to-r group-hover:from-[#13a5ff] group-hover:to-[#00ffee] transition-colors">
        {icon}
      </div>
      <h1 className="text-3xl">{title}</h1>
      <p className="text-sm text-gray-500 break-words">{description}</p>
      <div className="flex flex-row items-center space-x-2">
        <label className="text-sm cursor-pointer">Learn more</label>
        <ArrowRightIcon className="h-4 w-4 stroke-2" />
      </div>
    </div>
  );
};

export default TeaserCard;
