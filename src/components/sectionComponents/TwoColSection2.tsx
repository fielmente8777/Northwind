"use client";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { LinkButton } from "../buttons";
import SliderSwip from "../SliderSwip";
import SectionWithContainer from "./SectionWithContainer";

export interface TwoColSectionProps {
  title: string;
  subTitle?: string;
  desc?: string;
  price?: string;
  images: {
    src: string;
    alt: string;
  }[];
  button?: {
    label: string;
    href: string;
  };
  btnCss?: boolean;
  index?: number;
  key?: number;
}

const TwoColSection2: React.FC<TwoColSectionProps> = ({
  title,
  desc,
  price,
  images,
  index,
  button,
}) => {
  return (
    <SectionWithContainer sectionClassName="md:!py-16">
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 md:gap-6 items-center">
        <div
          className={`w-full md:col-span-4 col-span-2 room-button  ${
            index
              ? index % 2 === 0
                ? "md:order-1 order-2"
                : "md:order-2 order-1"
              : ""
          }`}
        >
          <SliderSwip
            data={images}
            slidesPerView={1}
            spaceBetween={22}
            modules={[Autoplay, Navigation]}
            navigation={true}
            classNameSwiper={`w-full ${index && index % 2 !== 0 ? "border-shadow-right" : "border-shadow-left"}`}
            // classNameSwiperSlide="shadow-xl"
          >
            {(card) => (
              <div
                className={`relative max-w-full md:aspect-[3/1.85] aspect-[4/2.5]`}
              >
                <Image
                  src={card?.src}
                  alt={card?.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            )}
          </SliderSwip>
        </div>

        <div
          className={`flex flex-col gap-4 col-span-2 ${index !== undefined && index % 2 === 0 ? "md:order-2 order-1" : "md:order-1 order-2"}`}
        >
          <h2 className="md:text-3xl text-2xl">{title}</h2>
          <p className="text-text-light text-lg leading-6 barlow">{desc}</p>
          <p className="text-tertiary barlow text-2xl">{price}</p>
          {button && (
            <LinkButton href={button?.href}>
              <button className="bg-primary px-4 py-2 hover:bg-secondary text-white rounded-md barlow text-sm duration-300 transition-all ease-in-out shadow-md">
                {button.label}
              </button>
            </LinkButton>
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TwoColSection2;
