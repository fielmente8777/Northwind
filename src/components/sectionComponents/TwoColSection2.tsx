"use client";
import Image from "next/image";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import SectionWithContainer from "./SectionWithContainer";
import { LinkButton } from "../buttons";
import SliderSwip from "../SliderSwip";
import { Autoplay, Navigation } from "swiper/modules";

export interface TwoColSectionProps {
  title: string;
  subTitle?: string;
  desc?: string[];
  images: {
    src: "";
    alt: "";
  }[];
  links?: {
    name: string;
    href: string;
  }[];
  btnCss?: boolean;
  index?: number;
}
const TwoColSection2: React.FC<TwoColSectionProps> = ({
  title,
  subTitle,
  desc,
  links,
  images,
  btnCss = false,
  index,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-6 grid-cols-1 gap-4 md:gap-6">
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
            breakpoints={
              {
                // 768: {
                //   slidesPerView: 1,
                //   spaceBetween: 24,
                // },
                // 640: {
                //   slidesPerView: 2,
                //   spaceBetween: 22,
                // },
              }
            }
            classNameSwiper={`w-full border-t-[8px] ${index && index % 2 !== 0 ? "border-r-[8px]" : "border-l-[8px]"} border-primary`}
            classNameSwiperSlide="shadow-xl"
          >
            {(card) => (
              <div
                className={`relative max-w-full md:aspect-[3/1.85] aspect-[4/2.5]`}
              >
                <Image
                  src={card?.src}
                  alt={card?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </SliderSwip>
        </div>

        <div
          className={`flex flex-col gap-4 col-span-2 ${index !== undefined && index % 2 === 0 ? "md:order-2 order-1" : "md:order-1 order-2"}`}
        >
          <h2>{title}</h2>
          {/* <SectionTitleSubTitle
            title={title}
            subTitle={subTitle}
            subTitleClassName="text-dark md:pe-4"
          /> */}

          <p className="heading4 text-dark">{desc}</p>

          {/* {desc.map((item, index) => (
            <p
              key={index}
              className="heading4 text-dark"
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          ))} */}

          {/* <ul className="flex max-lg:flex-col items-center gap-2 mt-auto">
            {links.map((link, index) => (
              <li key={index} className="flex items-center gap-1">
                <LinkButton
                  href={link.href}
                  className={`raleway ${index === 0 ? `${btnCss ? "bg-dark " : "bg-secondary"} text-white hover:box-shadow flex items-center gap-1 rounded-lg py-3 px-6` : "text-dark underline underline-offset-4 hover:text-primary"} font-semibold `}
                >
                  {link.name}
                </LinkButton>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TwoColSection2;
