"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import OfferSlider from "@/components/sliders/OfferSlider";
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

const SliderText = [
  `BOOK DIRECTLY WITH US AND ENJOY COMPLIMENTARY BREAKFAST AND UP TO 50% OFF ON FOOD.`,
];
const Experience = ({
  title,
  description,
  images,
  button,
}: ExperienceProps) => {
  return (
    <Section className="bg-primary relative md:pb-40!">
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

                    <span className="absolute w-full bottom-0 flex justify-center bg-black/40 text-white barlow font-medium md:text-2xl text-lg uppercase">
                      {item.title}
                    </span>
                  </div>
                );
              }}
            />
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-white md:text-5xl text-3xl font-normal gilda">
              {title}
            </h2>
            <p className="text-dark barlow">{description}</p>
            <LinkButton
              href={button.href}
              label={button.label}
              className="w-full mb-3"
            />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 w-full text-white overflow-hidden flex">
        <OfferSlider
          offersTitle={SliderText}
          direction="ltr"
          wrapperClass="demo"
        />
      </div>

      <div
        className="absolute left-0 bottom-14 w-[35%] h-16 bg-no-repeat bg-contain md:block hidden"
        style={{
          backgroundImage: `url('/images/Mountains.png')`,
        }}
      />

      <div
        className="absolute right-0 bottom-14 w-8 h-20 bg-contain bg-no-repeat md:block hidden"
        style={{
          backgroundImage: `url('/images/Leaf2.png')`,
        }}
      />

      <div
        className="absolute left-0 -top-5 w-32 h-32 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Flame.png')`,
        }}
      />
    </Section>
  );
};

export default Experience;
