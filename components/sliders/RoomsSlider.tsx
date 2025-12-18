"use client";
import { RoomsProps } from "@/@types/types";
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import { RoomCard } from "../cards";
import { Container } from "../sectionComponants";
import { NextBtn, PrevBtn } from "@/utils/icons";

interface RoomsSliderProps {
  cards: RoomsProps["cards"];
  bg?: string;
}
const RoomsSlider: FC<RoomsSliderProps> = ({ cards, bg }) => {
  return (
    <div className="w-full flex items-center lg:px-4">
      <button className={`rooms-prev lg:block hidden ${
          bg ? "text-primary" : "text-white"
        }`}>
        <PrevBtn />
        <span className="sr-only">button icon prev</span>
      </button>
      <Container>
        <SwiperCarousel
          data={cards}
          slidesPerView={1.5}
          spaceBetween={24}
          loop
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".rooms-next",
            prevEl: ".rooms-prev",
          }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
              autoplay: false,
            },
          }}
          className="w-full"
          renderSlide={(card) => <RoomCard {...card} />}
        />
      </Container>
      <button
        className={`rooms-next lg:block hidden ${
          bg ? "text-primary" : "text-white"
        }`}
      >
        <NextBtn />
        <span className="sr-only">button icon next</span>
      </button>
    </div>
  );
};

export default RoomsSlider;
