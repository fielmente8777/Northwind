"use client";
import { RoomsProps } from "@/@types/types";
import Image from "next/image";
import { FC } from "react";
import SwiperCarousel from "../sliders/SwiperCarousel";
import LinkButton from "../buttons/LinkButton";
import { Navigation } from "swiper/modules";
// import { Navigation } from "swiper/modules";

const RoomCard: FC<RoomsProps["cards"][0]> = ({
  title,
  noOfBadRooms,
  description,
  images,
  link,
  listOfIcons,
  textColor,
}) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden room-card">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={true}
        className="w-full "
        renderSlide={(src) => (
          <div className="w-full relative aspect-[4/3.5]">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        )}
      />
      <div className="space-y-2 px-4 pb-4">
        <div className="flex items-center justify-between gap-4">
          <h3
            className={`md:text-[2.5rem] text-2xl text-${
              textColor ? textColor : "white"
            } font-aboreto`}
          >
            {title}
          </h3>
          <div className="w-full h-px bg-secondary" />
          <ul className="flex items-center gap-1">
            {listOfIcons?.map((item, index) => (
              <li
                key={index}
                aria-label={item.title}
                className={`text-${textColor ? textColor : "white"}`}
              >
                {item.icons}
              </li>
            ))}
          </ul>
        </div>
        <p
          className={`text-xl text-${
            textColor ? textColor : "white"
          } font-medium`}
        >
          {noOfBadRooms}
        </p>
        {description && <p className="text-white ">{description}</p>}
        {link && (
          <LinkButton
            href={link.url}
            label={link.label}
            className="mt-4 text-white"
          />
        )}
      </div>
    </div>
  );
};

export default RoomCard;
