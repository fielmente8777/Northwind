"use client";

import SwiperCarousel from "@/components/SwiperCarousel";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";

interface RoomItem {
  heading: string;
  description: string;
  cost: number;
  id: number;
  imageUrls: string[];
  position: string;
}

interface RoomsProps {
  item: RoomItem;
}

const Rooms: React.FC<RoomsProps> = ({ item }) => {
  const isLeft = item.position === "left";
  const leftBtn = `leftEl-${item.id}`;
  const rightBtn = `rightEl-${item.id}`;

  return (
    <div
      className={`flex w-full h-auto ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } max-md:flex-col`}
    >
      {/* Image Section */}
      <div className="relative w-1/2 max-md:w-full h-[546px] max-md:h-[300px] bg-[#D4B01C]">
        <div
          className={`absolute z-10 w-full h-full ${
            isLeft
              ? "top-[10px] left-[10px] max-md:left-[5px]"
              : "top-[10px] right-[10px] max-md:right-[5px]"
          }`}
        >
          <SwiperCarousel
            data={item.imageUrls}
            modules={[Navigation]}
            loop
            navigation={{
              prevEl: `.${leftBtn}`,
              nextEl: `.${rightBtn}`,
            }}
            autoplay={{ delay: 5000 }}
            className="w-full h-full"
            renderSlide={(url) => (
              <Image
                src={url}
                alt={item.heading}
                fill
                className="object-cover rounded-md"
              />
            )}
          />
        </div>

        {/* Navigation Arrows */}
        <div
          className={`absolute left-5 top-1/2 transform -translate-y-1/2 z-20 ${leftBtn}`}
        >
          <div className="text-yellow-400 text-4xl cursor-pointer">&#x276E;</div>
        </div>
        <div
          className={`absolute right-5 top-1/2 transform -translate-y-1/2 z-20 ${rightBtn}`}
        >
          <div className="text-yellow-400 text-4xl cursor-pointer">&#x276F;</div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-1/2 max-md:w-full bg-[#FFFBED] text-black px-10 py-10 flex flex-col justify-center gap-6">
        <h2 className="text-4xl font-semibold text-[#262626]">{item.heading}</h2>
        <p className="text-[#6D6D6D] text-[16px] leading-7">{item.description}</p>
        <h3 className="text-[#D98600] text-xl font-semibold mt-4">
          Price starting @ ₹{item.cost}/-
        </h3>
        <button className="bg-[#D4B01C] text-white font-semibold px-6 py-3 rounded-md w-fit mt-4 hover:bg-yellow-500 transition">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Rooms;
