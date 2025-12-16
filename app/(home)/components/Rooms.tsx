"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";

type RoomsProps = {
  title: string;
  subTitle: string;

  items: {
    title: string;
    subTitle: string;
    description?: string;
    link: {
      label: string;
      href: string;
    };
    images: string[];
    price: string;
  }[];
};

const Rooms = ({ title, subTitle, items }: RoomsProps) => {
  return (
    <Section className="bg-[#212121] space-y-8 md:space-y-20">
      <div>
        <h2 className="text-center text-primary text-2xl barlow font-medium">
          {title}
        </h2>
        <h3 className="text-center md:text-5xl text-3xl text-white gilda">
          {subTitle}
        </h3>
      </div>

      <div className="space-y-20">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-5 grid-cols-1 gap-4 w-full items-center max-w-[1440px]
            ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
          >
            <div
              className={`rooms-card md:col-span-3 w-full h-full ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <SwiperCarousel
                autoplay={{ delay: 6000 }}
                data={item.images}
                modules={[Autoplay, Navigation]}
                navigation
                loop
                className="relative w-full after:absolute after:inset-3 after:border after:border-white after:z-1"
                renderSlide={(item) => (
                  <div className="relative w-full md:aspect-[4/2.3] aspect-4/3 ">
                    <Image
                      src={item}
                      className="object-cover"
                      fill
                      alt={"rooms-images"}
                    />
                  </div>
                )}
              />
            </div>

            <div
              className={`p-4 md:col-span-2 space-y-3 md:space-y-8 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <h2 className="text-white md:text-2xl barlow font-medium">
                {item.title}
              </h2>
              <h3 className="md:text-4xl text-3xl text-white gilda">
                {item.subTitle}
              </h3>
              <p className="text-white barlow">{item.description}</p>
              <p className="text-white md:text-xl barlow">{item.price}</p>
              <div>
                <LinkButton
                  href={item.link.href}
                  label={item.link.label}
                  className="rounded-none bg-white text-secondary "
                />
              </div>
            </div>

            {/* <div
              className={`lg:block hidden absolute -top-5 w-[35%] h-10 bg-cover bg-center ${
                index % 2 === 0 ? "left-7" : "right-7"
              }`}
              style={{
                backgroundImage: `url('/images/Mountains.png')`,
              }}
            /> */}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Rooms;
