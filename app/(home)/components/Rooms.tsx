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
    <Section className="bg-bg1 space-y-8">
      <div>
        <h2 className="text-center text-primary text-2xl">{title}</h2>
        <h3 className="text-center md:text-5xl text-3xl text-dark">
          {subTitle}
        </h3>
      </div>

      <Container className="lg:flex flex-col gap-10 hidden">
        {items.map((item, index) => (
          <div key={index} className={`relative w-full aspect-[16/7.5]`}>
            <div
              className={`absolute top-1/2 -translate-y-1/2 lg:w-[75%] w-full h-full  p-5 z-50 ${
                index % 2 === 0 ? "left-0" : "right-0"
              }`}
            >
              <div className="w-full h-full bg-white p-3">
                <div className="h-full rooms-card">
                  <SwiperCarousel
                    autoplay={{ delay: 6000 }}
                    data={item.images}
                    modules={[Autoplay, Navigation]}
                    navigation
                    renderSlide={(item) => (
                      <div className="relative w-full md:aspect-[16/9.6]">
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
              </div>
            </div>

            <div
              className={`bg-primary absolute right-0 top-0 lg:w-[45%] w-full h-full z-40 ${
                index % 2 === 0 ? "right-0" : "left-0"
              }`}
            >
              <div
                className={`flex justify-end ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-80 p-4 space-y-3">
                  <h2 className="text-white md:text-2xl">{item.title}</h2>
                  <h3 className="md:text-3xl text-dark">{item.subTitle}</h3>
                  <p className="text-dark">{item.description}</p>
                  <p className="text-white md:text-xl">{item.price}</p>
                  <div>
                    <LinkButton
                      href={item.link.href}
                      label={item.link.label}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`lg:block hidden absolute -top-5 w-[35%] h-10 bg-cover bg-center ${
                index % 2 === 0 ? "left-0" : "right-0"
              }`}
              style={{
                backgroundImage: `url('/images/Mountains.png')`,
              }}
            />
          </div>
        ))}
      </Container>

      <Container className="lg:hidden flex flex-col gap-10">
        {items.map((item, index) => (
          <div key={index} className={`w-full`}>
            <div className={` w-full h-full `}>
              <div className="w-full h-full bg-white">
                <div className="h-full">
                  <SwiperCarousel
                    autoplay={{ delay: 6000 }}
                    data={item.images}
                    modules={[Autoplay, Navigation]}
                    renderSlide={(item) => (
                      <div className="relative w-full md:aspect-[16/9.6] aspect-16/10">
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
              </div>
            </div>

            <div className="bg-primary">
              <div className="p-4 space-y-3">
                <h2 className="text-white md:text-2xl">{item.title}</h2>
                <h3 className="md:text-3xl text-dark">{item.subTitle}</h3>
                <p className="text-dark">{item.description}</p>
                <p className="text-white md:text-xl">{item.price}</p>
                <div>
                  <LinkButton
                    href={item.link.href}
                    label={item.link.label}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* <div
              className={`lg:block hidden absolute -top-5 w-[35%] h-10 bg-cover bg-center ${
                index % 2 === 0 ? "left-0" : "right-0"
              }`}
              style={{
                backgroundImage: `url('/images/Mountains.png')`,
              }}
            /> */}
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default Rooms;
