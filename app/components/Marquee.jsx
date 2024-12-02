import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const images = [
  { src: "/financeX.png", width: 200, height: 200, alt: "Finance X" },
  { src: "/financeX.png", width: 200, height: 200, alt: "financeX1" },
  { src: "/financeX.png", width: 200, height: 200, alt: "financeX2" },
  { src: "/financeX.png", width: 200, height: 200, alt: "financeX3" },
];

const MarqueeComponent = () => {
  return (
    <Marquee
      speed={50}
      className="bg-gradient-to-r from-[#13a5ff] to-[#00ffee] p-8"
    >
      {images.map((image, index) => (
        <span key={index} className="inline-block mx-6">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </span>
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
