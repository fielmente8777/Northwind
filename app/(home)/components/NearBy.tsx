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
    <Section defaultPadding={false} className="relative pt-16">
      <div className="space-y-6 md:space-y-16">
        <Container className="">
          <div className="max-w-xl mx-auto text-secondary space-y-2">
            <h2 className="text-center md:text-xl">{title}</h2>
            <h3 className="text-center md:text-4xl text-3xl gilda">
              {subTitle}
            </h3>
          </div>
        </Container>

        <div className="nearby-card">
          <SwiperCarousel
            data={cards}
            // loop
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
            speed={800}
            spaceBetween={0}
            navigation
            modules={[Navigation]}
            renderSlide={(item) => {
              return (
                <div className=" w-full">
                  <div className="relative w-full aspect-[4/5.5] overflow-hidden group">
                    <Image
                      src={item.src}
                      alt="nearby-images"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="bg-black/50 py-3 flex justify-center text-white text-xl z-10 absolute bottom-0 w-full">
                      <span>{item.title}</span>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </div>

        {/* <LinkButton
          href={button.href}
          label={button.label}
          className="mx-auto bg-white rounded-none"
        /> */}
      </div>

      {/* <div
        className="absolute left-0 bottom-0 w-[35%] h-16 bg-no-repeat bg-contain md:block hidden"
        style={{
          backgroundImage: `url('/images/Mountains.png')`,
        }}
      />

      <div
        className="absolute right-0 bottom-0 w-20 h-20 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Tree.png')`,
        }}
      />

      <div
        className="absolute left-0 -top-5 w-32 h-32 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Flame.png')`,
        }}
      /> */}
    </Section>
  );
};

export default NearBy;
