"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import { Section } from "../sectionComponants";

const OfferSlider: React.FC<{
  offersTitle: string[];
  wrapperClass?: string;
  direction?: "rtl" | "ltr";
}> = ({ offersTitle, wrapperClass, direction }) => {
  const data =
    offersTitle.length < 1
      ? offersTitle
      : [...offersTitle, ...offersTitle, ...offersTitle];
  return (
    <Section
      defaultPadding={false}
      className={`bg-secondary !py-0 ${wrapperClass}`}
    >
      <SwiperCarousel
        data={data}
        speed={12000}
        loop={true}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={0.3}
        spaceBetween={0}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        dir={direction}
        renderSlide={(item, index) => (
          <div key={index} className="py-3 w-full">
            <p className="text-white text-nowrap text-xl text-center max-sm:px-12">
              {item}
            </p>
          </div>
        )}
      />
    </Section>
  );
};

export default OfferSlider;
