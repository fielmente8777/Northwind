"use client";
import { FacilitiesProps } from "@/@types/types";
import { Autoplay, Pagination } from "swiper/modules";
import WhyChooseUsCard from "../cards/WhyChooseUsCard";
import SwiperCarousel from "./SwiperCarousel";

interface ICommonSlider {
  cards: FacilitiesProps["cards"];
  warperClass?: string;
  paginationClassName?: string;
}

const CommonSlider: React.FC<ICommonSlider> = ({
  cards,
  warperClass = "",
  paginationClassName = "",
}) => {

  const data = cards.length < 5 ? [...cards, ...cards, ...cards] : cards;
  return (
    <div className={`w-full ${warperClass}`}>
      <SwiperCarousel
        data={data || []}
        slidesPerView={1}
        spaceBetween={8}
        loop
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          el: paginationClassName && `.${paginationClassName}`,
        }}
        autoplay={{ delay: 2500 }}
        speed={1000}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        className="w-full"
        renderSlide={(item) => <WhyChooseUsCard {...item} />}
      />
      {paginationClassName && (
        <div
          className={`${paginationClassName} flex items-center justify-center mt-6`}
        ></div>
      )}
    </div>
  );
};

export default CommonSlider;
