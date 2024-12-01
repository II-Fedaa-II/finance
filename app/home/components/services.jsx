import Button from "@/app/components/Button";
import FeatureCard from "@/app/components/FeatureCard";
import { blueGardient } from "@/app/constants/Colors";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const ServicesComponent = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-6 p-8">
      {/* Offering Section */}
      <div className="col-span-1 space-y-6">
        <h1 className={`${blueGardient} text-xl font-bold`}>Our Services</h1>
        <p className="text-5xl font-bold mb-8">
          Browse Our Services &{" "}
          <span className={`${blueGardient}`}>Offering</span>
        </p>
        <div className="">
          <Button
            buttonText={"View All"}
            icon={<ArrowRightIcon className="ml-4 h-5 w-5" />}
            key={1}
          />
        </div>
      </div>

      {/* Cards Section */}
      <FeatureCard
        title="Checking Accounts"
        description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nesciunt perspiciatis! Nihil impedit fugiat repellendus vitae? Reiciendis explicabo officia cumque praesentium esse ab voluptas accusamus in, tempora eaque reprehenderit ipsa.
        "
      />
      <FeatureCard
        title="Savings Accounts"
        description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nesciunt perspiciatis! Nihil impedit fugiat repellendus vitae? Reiciendis explicabo officia cumque praesentium esse ab voluptas accusamus in, tempora eaque reprehenderit ipsa.
        "
      />
      <FeatureCard
        title="Business Accounts"
        description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nesciunt perspiciatis! Nihil impedit fugiat repellendus vitae? Reiciendis explicabo officia cumque praesentium esse ab voluptas accusamus in, tempora eaque reprehenderit ipsa.
        "
      />
      <FeatureCard
        title="Loan Services"
        description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nesciunt perspiciatis! Nihil impedit fugiat repellendus vitae? Reiciendis explicabo officia cumque praesentium esse ab voluptas accusamus in, tempora eaque reprehenderit ipsa.
        "
      />
      <FeatureCard
        title="Investment Plans"
        description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nesciunt perspiciatis! Nihil impedit fugiat repellendus vitae? Reiciendis explicabo officia cumque praesentium esse ab voluptas accusamus in, tempora eaque reprehenderit ipsa.
        "
      />
      <FeatureCard
        title="Insurance Solutions"
        description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nesciunt perspiciatis! Nihil impedit fugiat repellendus vitae? Reiciendis explicabo officia cumque praesentium esse ab voluptas accusamus in, tempora eaque reprehenderit ipsa.
        "
      />
    </div>
  );
};

export default ServicesComponent;
