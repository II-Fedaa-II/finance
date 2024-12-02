"use client";
import SwiperComponent from "@/app/components/Swiper";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import React, { useRef } from "react";

const Feedbacks = () => {
  const swiperRef = useRef(null); // Create a reference to store Swiper instance

  // Create a function to set the swiper reference from child
  const setSwiperRef = (swiperInstance) => {
    swiperRef.current = swiperInstance;
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-[#1381ff] to-[#5bc0ff] h-[120vh] py-16 space-y-10 relative">
      {/* Background squares */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Square 1 */}
        <div className="absolute top-10 left-10 w-48 h-48 border-4 border-white opacity-20 animate-pulse" />
        {/* Square 2 */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-white opacity-25 animate-pulse" />
        {/* Square 3 */}
        <div className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-white opacity-30 animate-pulse" />
        {/* Square 4 */}
        <div className="absolute top-3/4 left-1/3 w-40 h-40 border-4 border-white opacity-40 animate-pulse" />
        {/* Square 5 */}
        <div className="absolute top-12 right-12 w-56 h-56 border-4 border-white opacity-15 animate-pulse" />
        {/* Square 6 */}
        <div className="absolute top-2/3 right-16 w-52 h-52 border-4 border-white opacity-35 animate-pulse" />
        {/* Square 7 */}
        <div className="absolute top-1/4 right-5 w-36 h-36 border-4 border-white opacity-30 animate-pulse" />
        {/* Square 8 */}
        <div className="absolute bottom-10 left-16 w-80 h-80 border-4 border-white opacity-20 animate-pulse" />
        {/* Square 9 */}
        <div className="absolute bottom-24 left-36 w-48 h-48 border-4 border-white opacity-25 animate-pulse" />
        {/* Square 10 */}
        <div className="absolute bottom-16 right-28 w-60 h-60 border-4 border-white opacity-30 animate-pulse" />
      </div>

      <div className="px-28 space-y-6 z-10">
        <h1 className="text-xl font-bold">Feedbacks</h1>
        <div className="flex flex-row items-center justify-between">
          <p className="text-6xl w-[600px] font-bold font-sarif">Global businesses love FinanceX</p>
          <div className="flex space-x-4">
            {/* Swiper Navigation Buttons */}
            <button
              className="swiper-button-prev px-4 py-4 border-2 border-white bg-transparent hover:cursor-pointer hover:text-black hover:bg-white rounded-full shadow"
              onClick={() => swiperRef.current?.slidePrev()} // Navigate to previous slide
            >
              <ChevronLeftIcon className="h-6 w-6 stroke-2" />
            </button>
            <button
              className="swiper-button-next px-4 py-4 border-2 border-white bg-transparent hover:cursor-pointer hover:text-black hover:bg-white rounded-full shadow"
              onClick={() => swiperRef.current?.slideNext()} // Navigate to next slide
            >
              <ChevronRightIcon className="h-6 w-6 stroke-2" />
            </button>
          </div>
        </div>
      </div>
      <SwiperComponent swiperRef={setSwiperRef} />
    </div>
  );
};

export default Feedbacks;
