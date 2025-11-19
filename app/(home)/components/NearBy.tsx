"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";

type NearByProps = {
  title: string;
  subTitle: string;

  cards: {
    src: string;
    title: string;
  }[];

  button: {
    label: string;
    href: string;
  };
};

const NearBy = ({ title, subTitle, cards, button }: NearByProps) => {
  return (
    <Section className="bg-primary">
      <Container className="space-y-6">
        <div className="max-w-xl mx-auto text-white">
          <h2 className="text-center md:text-xl">{title}</h2>
          <h3 className="text-center md:text-4xl text-3xl">{subTitle}</h3>
        </div>

        <div className="nearby-card">
          <SwiperCarousel
            data={cards}
            // loop
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            speed={800}
            spaceBetween={15}
            navigation
            modules={[Navigation]}
            renderSlide={(item) => {
              return (
                <div className=" w-full">
                  <div className="relative w-full aspect-[4/3.5]">
                    <Image
                      src={item.src}
                      alt="nearby-images"
                      fill
                      className="object-cover rounded-t-md"
                    />
                  </div>

                  <div className="bg-white py-3 flex justify-center rounded-b-md">
                    <span>{item.title}</span>
                  </div>
                </div>
              );
            }}
          />
        </div>

        <div className="flex justify-center">
          <LinkButton href={button.href} label={button.label} />
        </div>
      </Container>
    </Section>
  );
};

export default NearBy;
