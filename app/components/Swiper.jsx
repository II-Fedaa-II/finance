"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useRef } from "react";
import FeedbackCard from "./FeedbackCrad"; // Ensure this path is correct

const SwiperComponent = ({ swiperRef }) => {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab
  const swiperInstance = useRef(null); // Create a reference to the swiper instance

  // Pass the swiper instance to the parent via the prop
  swiperRef(swiperInstance.current);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={80} // Adjust spacing between slides
        slidesPerView={4} // Show 4 slides at a time
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          clickable: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)} // Track active slide
        onSwiper={(swiper) => (swiperInstance.current = swiper)} // Set the swiper instance
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="p-4"> {/* Optional padding around the card */}
              <FeedbackCard
                name={`Feedback ${index + 1}`}
                job={"Software Developer"}
                profileImage={"/financeX.png"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam, sapiente aut nostrum recusandae perferendis at rem fuga qui ipsam amet dolorem accusantium eum nam quia voluptatum voluptatem aperiam voluptatibus."
                }
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tab Buttons for Slide Navigation */}
      <div className="flex justify-center mt-4">
        {[...Array(8)].map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-2 rounded-full transition-colors duration-300 ${
              activeTab === index ? "bg-[#000]" : "bg-gray-300"
            }`}
            onClick={() => swiperInstance.current?.slideTo(index)} // Navigate to selected tab
          />
        ))}
      </div>
    </div>
  );
};

export default SwiperComponent;
