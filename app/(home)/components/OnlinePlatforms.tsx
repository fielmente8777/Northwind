"use client";

import OnlinePlatformsCard from "@/components/cards/OnlinePlatformsCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { FC, JSX } from "react";
import { Autoplay } from "swiper/modules";

export type OnlinePlatformsPropsTypes = {
  title?: string;
  defaultPadding?: boolean;
  cards: {
    icon: JSX.Element;
    src: string;
    partnerName: string;
    ratings: string;
  }[];
};

const OnlinePlatforms: FC<OnlinePlatformsPropsTypes> = ({ title, cards }) => {
  return (
    <SectionWithContainer sectionClassName="md:p-8! p-0!">
      <div className="">
        <div className="md:grid hidden grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <OnlinePlatformsCard key={index} {...card} />
          ))}
        </div>
        {/* slider */}
        <div className="md:hidden block">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={16}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            renderSlide={(card, index) => (
              <OnlinePlatformsCard key={index} {...card} />
            )}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OnlinePlatforms;
