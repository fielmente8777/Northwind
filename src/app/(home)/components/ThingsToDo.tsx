"use client";

import { Section, SectionWithContainer, SliderSwip } from "@/components";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";

const SliderData = [
  {
    label: "Snowboarding",
    src: "/Northwind/snowbording.jpg",
  },
  {
    label: "Star Gazing",
    src: "/Northwind/star.jpg",
  },
  {
    label: "Paragliding",
    src: "/Northwind/paragliding.jpg",
  },
];

const data =
  SliderData.length > 4 ? SliderData : [...SliderData, ...SliderData];

const ThingsToDo = () => {
  return (
    <div className="bg-white">
      <SectionWithContainer>
        <div className="max-w-[552px] mx-auto space-y-4">
          <h2 className="barlow text-text-dark text-center">THINGS TO DO</h2>
          <h3 className="md:text-5xl text-2xl text-center">
            Experience the Best of Bir
          </h3>
        </div>
      </SectionWithContainer>

      <Section>
        <SliderSwip
          data={data}
          slidesPerView={1}
          loop={true}
          spaceBetween={22}
          centeredSlides={true}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".we-next",
            prevEl: ".we-prev",
          }}
          autoplay={{
            delay: 3000,
          }}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          classNameSwiper={`w-full we-offer-slider`}
        >
          {(card) => (
            <div>
              <div className={`relative max-w-full aspect-[4/2.2]`}>
                <Image
                  src={card?.src}
                  alt={card?.label}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <h3 className="text-center text-text-dark md:text-3xl mt-6">
                {card?.label}
              </h3>
            </div>
          )}
        </SliderSwip>

        <div className="flex justify-center items-center gap-8 w-full mt-7">
          <button className="px-3 we-prev active:scale-75 duration-150">
            <PrevBtnArrow />
          </button>
          {/* <div className="flex gap-2 mt-1">
            <div className="we-pagination"></div>
          </div> */}
          <button className="px-3 we-next active:scale-75 duration-150">
            <NextBtnArrow />
          </button>
        </div>
      </Section>
    </div>
  );
};

export const PrevBtnArrow = () => {
  return (
    <svg
      width="18"
      height="32"
      viewBox="0 0 18 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6654 31.1667L17.082 29.75L3.33203 16L17.082 2.25004L15.6654 0.833374L0.498697 16L15.6654 31.1667Z"
        fill="#D4B01C"
      />
    </svg>
  );
};

export const NextBtnArrow = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3346 35.1667L11.918 33.75L25.668 20L11.918 6.25004L13.3346 4.83337L28.5013 20L13.3346 35.1667Z"
        fill="#D4B01C"
      />
    </svg>
  );
};

export default ThingsToDo;
