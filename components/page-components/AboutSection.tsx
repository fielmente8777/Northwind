"use client";
import { AboutSectionProps } from "@/@types/types";
import { useWebContext } from "@/contextApi/WebContext";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import OnlyButton from "../buttons/OnlyButton";
import { SectionWithContainer } from "../sectionComponants";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { SectionHeading } from "../typography";

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subTitle,
  description,
  link,
  src,
  images,
}) => {
  const gridPattern = [
    "row-span-4",
    "row-span-2",
    "row-span-3",
    "row-span-2",
    "row-span-3",
    "row-span-3",
    "row-span-4",
    "row-span-3",
    "row-span-2",
    "row-span-2",
  ];
  const { setIsOpenPopup } = useWebContext();
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="">
          <div className="w-[100px] aspect-[4/2] relative mx-auto">
            <Image
              src={src}
              alt={title ? title : ""}
              fill
              sizes="100%"
              quality={100}
              className="object-contain"
            />
          </div>
          <SectionHeading title={title ?? ""} subTitle={subTitle} line />
        </div>
        <div className="lg:grid hidden grid-cols-4 grid-flow-row auto-rows-[6.5rem] gap-4">
          {images.map((image, index) => (
            <div
              className={`relative w-full h-full aspect-auto ${gridPattern[index]}`}
              key={index}
            >
              <Image
                src={image}
                alt={title ? title : image}
                fill
                sizes="100%"
                className="object-cover object-center rounded-[20px]"
              />
            </div>
          ))}
        </div>
        <div className="lg:hidden block">
          <SwiperCarousel
            data={images}
            slidesPerView={1}
            spaceBetween={20}
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 2500 }}
            className="w-full"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            renderSlide={(src) => (
              <div className={`relative w-full aspect-[4/3]`}>
                <Image
                  src={src}
                  alt={title ? title : src}
                  fill
                  sizes="100%"
                  className="object-cover object-center rounded-[20px]"
                />
              </div>
            )}
          />
        </div>
        <p className="text-center text-dark md:text-lg lg:max-w-[69rem] mx-auto">
          {description}
        </p>
        {/* <LinkButton
          href={link.url}
          label={link.label}
          className=" text-white bg-secondary text-nowrap border-secondary mx-auto"
        /> */}
        <OnlyButton
          label={link.label}
          className="bg-secondary border-secondary text-white mx-auto"
          onclick={() => setIsOpenPopup(true)}
        />
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
