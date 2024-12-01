import React from "react";

const Button = ({ buttonText, icon }) => {
  return (
    <button className="font-bold font-mono bg-gradient-to-r from-[#13a5ff] to-[#00ffee] text-white flex flex-row justify-center items-center w-[200px] py-4 rounded-lg">
      {buttonText}
      {icon}
    </button>
  );
};

export default Button;
