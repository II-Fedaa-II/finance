"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperComponent = () => {
  return (
    <div className={`w-full p-6 bg-gradient-to-r from-[#13a5ff] to-[#00ffee]`}>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}  // Show 3 slides at a time
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/financeX.png" alt="Slide 1" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/financeX.png" alt="Slide 2" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/financeX.png" alt="Slide 3" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/financeX.png" alt="Slide 4" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/financeX.png" alt="Slide 1" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/financeX.png" alt="Slide 2" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/financeX.png" alt="Slide 3" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/financeX.png" alt="Slide 4" className="w-full rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
