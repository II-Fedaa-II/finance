import GlobalEarth from "@/app/components/GlobalEarth";
import { blueGardient } from "@/app/constants/Colors";
import React from "react";

const BenefitsSection = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/3 space-y-6">
        <h1 className={`${blueGardient} text-xl font-bold`}>Benefits</h1>
        <p className="text-4xl font-bold mb-8">
          We have many users all over the{" "}
          <span className={`${blueGardient}`}>world</span>
        </p>
        <p className="text-gray-400 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          corrupti, nobis debitis ullam molestias natus est modi repellendus
          reiciendis, quo nisi harum asperiores velit a labore suscipit expedita
          minus quidem.
        </p>
        <div className={`flex flex-row justify-between ${blueGardient} pt-10`}>
          <span className="flex flex-col">
            <h1 className="text-2xl font-bold font-mono">
              <span className="text-white">10M</span>+
            </h1>
            <p>Active Users</p>
          </span>
          <span className="flex flex-col">
            <h1 className="text-2xl font-bold font-mono">
              <span className="text-white">30</span>+
            </h1>
            <p>Countries</p>
          </span>
          <span className="flex flex-col">
            <h1 className="text-2xl font-bold font-mono">
              <span className="text-white">$50M</span>+
            </h1>
            <p>Transactions</p>
          </span>
        </div>
      </div>
      <div className="w-1/3">
        <GlobalEarth />
      </div>
    </div>
  );
};

export default BenefitsSection;
