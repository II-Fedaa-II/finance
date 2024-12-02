import Button from "@/app/components/Button";
import { blueGardient } from "@/app/constants/Colors";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const WelcomeComponent = () => {
  return (
    <div className="flex flex-col w-2/5">
      <h1 className={`font-bold text-lg ${blueGardient} mb-4`}>
        Welcome! Future Platform
      </h1>
      <p className="md:text-4xl text-6xl font-bold mb-8">
        The World &apos s Most Modern Cardless Payment&nbsp;
        <span className={`${blueGardient}`}>Platform</span>
      </p>
      <p className="text-gray-400 mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum
        asperiores architecto doloremque reiciendis fuga quae dolorem quia qui
        voluptatibus ipsum at, sed error itaque molestiae atque maxime, numquam
        dolorum?
      </p>
      {/* <button className="font-bold font-mono bg-gradient-to-r from-[#13a5ff] to-[#00ffee] text-white flex flex-row justify-center items-center w-[200px] py-4 rounded-lg"> */}
      <Button
        buttonText="Get Started"
        icon={<ArrowRightIcon className="ml-4 h-5 w-5" />}
      />
    </div>
  );
};

export default WelcomeComponent;
