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
      "North Wind 57 in Bir Billing offers a truly one-of-a-kind glamping experience, blending comfort with stunning natural surroundings. The dome rooms are cozy and beautifully designed, perfect for a unique mountain retreat. Shilank’s thoughtful hospitality stands out, ensuring every guest feels right at home. With a lovely restaurant and serene lawn space, it’s an unforgettable escape for both relaxation and adventure.",
  },
  {
    rating: 4,
    review:
      "Ideal place to plan your stay during your visit to bir billing - a adventure escape in himachal.Clean rooms, affordable tasty food,hospitality and humble staff is a addition to it. It's a haven for bird watchers and butterfly lovers.We just stayed 1 night and was memorable.",
  },
  {
    rating: 4,
    review:
      "North Wind 57 in Bir Billing is straight-up awesome! The geodesic domes are super cool, and the mountain views and sunsets are next level. Close to the paragliding spot too, so it’s perfect if you’re into adventure. The food at their restaurant? Total win. Best glamping spot in Bir Billing for sure!",
  },
  {
    rating: 4,
    review:
      "North Wind 57 stands out among the best mountain hotels in Bir for its breathtaking mountain views, cozy ambiance, and excellent service. Located in Bir, Himachal Pradesh, this hotel offers easy access to popular attractions like paragliding in Bir Billing, making it an ideal choice for both nature lovers and adventure enthusiasts. The rooms are comfortable, well-equipped, and provide panoramic vistas, while the on-site restaurant serves delicious local cuisine. If you’re searching for a top-rated hotel in Bir, North Wind 57 is the perfect blend of comfort, scenic beauty, and convenience, making it one of the best Bir Billing hotels for a memorable mountain escape.",
  },
  {
    rating: 4,
    review:
      "The location is just the right perfect, away from the main road but also a 3-4 minute walk leads you to the best eateries. Very quiet. Their common room provides views of scenic sunsets. My wife and I travelled with no itinerary, but Shilank was kind enough to welcome us, and spend time and provide us with cues on spots to visit and eat. All of them were great or exceeded our expectations.",
  },

  {
    rating: 4,
    review:
      "North Wind 57 in Bir Billing is a gem for nature lovers and adventure seekers alike. The geodesic dome rooms provide a unique, cozy experience with breathtaking mountain views. Shilank’s warm hospitality makes the stay feel even more special, always attentive to guests’ needs. The on-site restaurant and small lawn area add to the peaceful charm, making it an ideal spot near the paragliding action.",
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
            classNameSwiperSlide=" md:mt-12 mt-6"
          >
            {(card) => (
              <div className="md:min-h-52">
                <div className={`max-w-[864px] mx-auto space-y-4 p-5`}>
                  <div className="flex justify-center items-center">
                    <RatingStar />
                  </div>
                  <p className="text-center barlow text-text-light">
                    {card?.review}
                  </p>
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
