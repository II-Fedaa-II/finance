import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";

const FeedbackCard = ({ profileImage, name, job, description }) => {
  return (
    <div className="p-10 w-[300px] space-y-4 bg-[#181818] text-[#bdbdbd]">
      {/* The icon wrapper changes on hover of the parent */}
      <p className="text-sm break-words">{description}</p>
      <div className="flex flex-row items-center space-x-2">
      <Avatar alt="Remy Sharp" src="/financeX.png" />
        <span className="flex flex-col">
          <h1 className="text-sm text-white">{name}</h1>
          <p className="text-xs">{job}</p>
        </span>
      </div>
    </div>
  );
};

export default FeedbackCard;
