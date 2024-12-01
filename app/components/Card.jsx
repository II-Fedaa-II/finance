import { WifiIcon } from "@heroicons/react/24/solid";
import React from "react";

const Card = ({
  cardNumberValue,
  cardType,
  cardHolderValue,
  expireDateValue,
  top,
  rotate,
  zIndex,
  onClick,
}) => {
    console.log(
        `rotate-${rotate}`
    )
  return (
    <div onClick={onClick}
      className={`hover:cursor-pointer absolute top-[${top}px] md:w-[320px] lg:w-[350px] h-[200px] bg-gradient-to-r from-[#000000] to-[#434343] rounded-xl shadow-xl transform rotate-${rotate} translate-z-${zIndex} flex flex-col justify-between p-6`}
    >
      {/* Card Details */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-bold text-white">{cardType}</p>
        <div className="h-8 w-12 bg-yellow-400 rounded-sm flex justify-center items-center">
          <WifiIcon className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="text-white mb-2">
        <p className="text-sm">Card Number</p>
        <p className="text-xl font-semibold">{cardNumberValue}</p>
      </div>

      <div className="flex justify-between mt-4 text-white">
        <div>
          <p className="text-xs">Card Holder</p>
          <p className="text-sm font-medium">{cardHolderValue}</p>
        </div>
        <div>
          <p className="text-xs">Expires</p>
          <p className="text-sm font-medium">{expireDateValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
