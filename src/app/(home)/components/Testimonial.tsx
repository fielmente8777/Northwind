"use client";
import { SectionWithContainer, SliderSwip } from "@/components";
import { RatingStar } from "@/data/icons";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { NextBtnArrow, PrevBtnArrow } from "./ThingsToDo";

const TestimonialData = [
  {
    rating: 4,
    review:
      "North Wind 57 in Bir Billing is straight-up awesome! The geodesic domes are super cool, and the mountain views and sunsets are next level. Close to the paragliding spot too, so it’s perfect if you’re into adventure. The food at their restaurant? Total win. Best glamping spot in Bir Billing for sure!",
  },
  {
    rating: 4,
    review:
      "North Wind 57 in Bir Billing is straight-up awesome! The geodesic domes are super cool, and the mountain views and sunsets are next level. Close to the paragliding spot too, so it’s perfect if you’re into adventure. The food at their restaurant? Total win. Best glamping spot in Bir Billing for sure!",
  },
  {
    rating: 4,
    review:
      "North Wind 57 in Bir Billing is straight-up awesome! The geodesic domes are super cool, and the mountain views and sunsets are next level. Close to the paragliding spot too, so it’s perfect if you’re into adventure. The food at their restaurant? Total win. Best glamping spot in Bir Billing for sure!",
  },
  {
    rating: 4,
    review:
      "North Wind 57 in Bir Billing is straight-up awesome! The geodesic domes are super cool, and the mountain views and sunsets are next level. Close to the paragliding spot too, so it’s perfect if you’re into adventure. The food at their restaurant? Total win. Best glamping spot in Bir Billing for sure!",
  },
  {
    rating: 4,
    review:
      "North Wind 57 in Bir Billing is straight-up awesome! The geodesic domes are super cool, and the mountain views and sunsets are next level. Close to the paragliding spot too, so it’s perfect if you’re into adventure. The food at their restaurant? Total win. Best glamping spot in Bir Billing for sure!",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-bg">
      <SectionWithContainer sectionClassName="md:!py-28 !py-4">
        <div className="space-y-4 max-w-[1076px] mx-auto">
          <h2 className="text-center font-medium barlow text-sm text-text-dark">
            HEAR FROM OUR
          </h2>
          <h3 className="text-center md:text-5xl text-2xl text-text-dark">
            Northwind Explorers
          </h3>
        </div>

        <div className="testimonial-swiper relative">
          <SliderSwip
            data={TestimonialData}
            slidesPerView={1}
            loop={true}
            spaceBetween={22}
            centeredSlides={true}
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".we-pagination",
            }}
            autoplay={{
              delay: 2500,
            }}
            speed={1000}
            // navigation={true}
            navigation={{
              nextEl: ".we-next",
              prevEl: ".we-prev",
            }}
            classNameSwiper={`w-full we-offer-slider `}
            classNameSwiperSlide="shadow-xl md:mt-12 mt-6"
          >
            {(card) => (
              <div>
                <div className={`max-w-[864px] mx-auto space-y-4`}>
                  <div className="flex justify-center items-center">
                    <RatingStar />
                  </div>
                  <p className="text-center barlow">{card?.review}</p>
                </div>
              </div>
            )}
          </SliderSwip>
          <div className="we-pagination flex justify-center items-center pt-14"></div>

          <div className="lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full flex lg:justify-between justify-center items-center max-lg:mt-8 z-30 gap-8">
            <button className="px-3 we-prev">
              <PrevBtnArrow />
            </button>
            <button className="px-3 we-next">
              <NextBtnArrow />
            </button>
          </div>
        </div>
      </SectionWithContainer>
    </div>
  );
};

export default Testimonial;
