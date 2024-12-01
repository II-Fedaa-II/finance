import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const navItems = ["Why FinanceX", "Features", "Update", "Blog"];

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center text-gray-400 py-10">
      <Image src={"/financeX.png"} width={80} height={80} alt="financeX"/>
      <ul className="flex flex-row space-x-10">
        {navItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
      <span className="flex flex-row space-x-4 items-center hover:text-white cursor-pointer">
        <p>Sign Up</p>
        <ArrowRightIcon className="h-5 w-5" />
      </span>
    </div>
  );
};

export default Navbar;
