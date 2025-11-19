"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";

type ExperienceProps = {
  title: string;
  subTitle?: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  images: { title: string; src: string }[];
};
const Experience = ({
  title,
  description,
  images,
  button,
}: ExperienceProps) => {
  return (
    <Section className="bg-primary relative">
      <Container>
        <div className="lg:grid grid-cols-12 gap-4">
          <div className="lg:col-span-9 experience-card">
            <SwiperCarousel
              // direction={"rtl"}
              dir="rtl"
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                },
              }}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 6000 }}
              navigation
              data={images}
              renderSlide={(item) => {
                return (
                  <div className="relative w-full aspect-[4/2.2]">
                    <Image
                      src={item.src}
                      alt="images"
                      fill
                      className="object-cover"
                    />

                    <span className="absolute w-full bottom-0 flex justify-center bg-black/40 text-white">
                      {item.title}
                    </span>
                  </div>
                );
              }}
            />
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-white md:text-5xl font-normal">{title}</h2>
            <p className="text-dark">{description}</p>
            <LinkButton
              href={button.href}
              label={button.label}
              className="w-full mb-3"
            />
          </div>
        </div>
      </Container>

      <div className="bg-black absolute bottom-0 w-full py-4 text-white overflow-hidden flex ">
        <div className="marquee">
          BOOK DIRECTLY WITH US AND ENJOY COMPLIMENTARY BREAKFAST AND UP TO 50%
          OFF ON FOOD.
        </div>
      </div>
    </Section>
  );
};

export default Experience;
