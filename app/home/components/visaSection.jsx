import Button from "@/app/components/Button";
import { blueGardient } from "@/app/constants/Colors";
import {
  ArrowRightIcon,
  CircleStackIcon,
  WalletIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const VisaSection = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="w-1/3 space-y-6">
        <h1 className={`${blueGardient} text-xl font-bold`}>Your Visa Card</h1>
        <p className="text-4xl font-bold mb-8">
          Shop Anywhere, Anytime{" "}
          <span className={`${blueGardient}`}>Securely</span>
        </p>
        <p className="text-gray-400 mb-10">
          Experience the freedom and convenience of our Visa Card, designed to
          meet your financial needs with unparalleled security and global
          acceptance. Whether you're shopping online or in-store, traveling
          abroad, or managing your everyday expenses, our Visa Card offers you
          the flexibility and peace of mind you deserve.
        </p>
        <p className="font-mono text-2xl">Register Your Card</p>
        <Button
          buttonText={"Register"}
          icon={<ArrowRightIcon className="ml-4 h-5 w-5" />}
        />
      </div>
      <div className="relative flex items-center justify-center w-[450px] h-[450px]">
        {/* Circle */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-[#139dff]"></div>

        <div
          className={`hover:cursor-pointer absolute right-[120px] md:w-[320px] lg:w-[440px] h-[260px] bg-[#000] bg-opacity-80 backdrop-blur-md rounded-2xl border-2 border-[#646464] shadow-xl transform translate-z-0 flex flex-col justify-between p-8`}
        >
          {/* Card Details */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-3xl font-bold text-white">Master Card</p>
            <WifiIcon className="h-10 w-10 text-white rotate-90" />
          </div>

          <p className="text-3xl font-mono">1234 56789 01234 56789</p>
{/* s */}
          <div className="flex flex-row text-sm text-white">
            <p className="">JOHN DOE</p>
            <p className="pl-4">12 / 24</p>
            <Image
              src={"/master-logo.svg"}
              alt="mastercard"
              width={70}
              height={70}
              className="absolute bottom-0 right-0 mb-2 mr-2 bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSection;
