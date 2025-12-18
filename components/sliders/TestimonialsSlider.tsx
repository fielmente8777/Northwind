"use client";
import { TestimonialsProps } from "@/@types/types";
// import { BtnNextIcon, BtnPrevIcon } from '@/utils/icons';
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { TestimonialCard2 } from "../cards";
import SwiperCarousel from "./SwiperCarousel";

interface TestimonialsSliderProps {
  cards: TestimonialsProps["cards"];
}
const TestimonialsSlider: FC<TestimonialsSliderProps> = ({ cards }) => {
  return (
    <div className="">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="w-full"
        renderSlide={(card) => <TestimonialCard2 {...card} />}
      />
      
    </div>
  );
};

export default TestimonialsSlider;
