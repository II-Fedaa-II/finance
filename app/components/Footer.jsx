import Image from "next/image";
import React from "react";
import { blueGardient } from "../constants/Colors";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-row justify-between">
        <div>
          <Image src={"/financeX.png"} width={40} height={40} alt="financeX" />
          <p className="mt-2">This was financeX for your services.</p>
          <p className="mt-4">icon icon icon icon</p>
        </div>
        <div className="space-y-4 text-[#909090] text-sm">
          <h1 className="text-lg font-semibold text-[#c1c1c1]">Company</h1>
          <p>About Us</p>
          <p>About Us</p>
          <p>About Us</p>
          <p>About Us</p>
        </div>
        <div className="space-y-4 text-[#909090] text-sm">
          <h1 className="text-lg font-semibold text-[#c1c1c1]">Resources</h1>
          <p>About Us</p>
          <p>About Us</p>
          <p>About Us</p>
          <p>About Us</p>
        </div>
        <div className="space-y-4 w-1/3">
          <h1 className="text-lg font-semibold text-[#c1c1c1]">
            Join Our Newsletter
          </h1>
          <span>
            <input type="text" placeholder="Your email address" className="px-4 py-2 text-black" />
            <button
              className={`bg-gradient-to-r from-[#13a5ff] to-[#00ffee] hover:from-[#4f4f4f] hover:to-[#404040] px-6 py-2 hover:text-white font-bold`}
            >
              Subscribe
            </button>
          </span>
          <p>
            . We will send you weekly updates for your better finance management
          </p>
        </div>
      </div>
      <div className="border-b-2"></div>
      <footer className="mx-auto pb-10">CopyRight @ Finance 2022. All Rights Reserved.</footer>
    </div>
  );
};

export default Footer;
