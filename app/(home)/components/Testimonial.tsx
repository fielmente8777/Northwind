"use client";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

type TestimonialProps = {
  title?: string;
  subTitle: string;
  description?: string;
  images: string;
  testimonials: { title: string; description: string }[];
  link: {
    label: string;
    url: string;
  };
  orderChange?: boolean;
};

const Testimonial: React.FC<TestimonialProps> = ({
  title,
  subTitle,
  description,
  images,
  link,
  testimonials,
  orderChange,
}) => {
  // const gridPatteren = [
  //   "row-span-4",
  //   "row-span-2",
  //   "row-span-3",
  //   "row-span-3",
  //   "row-span-4",
  //   "row-span-3",
  //   "row-span-2",
  // ];

  return (
    <Section defaultPadding={false} >
      <div className="grid lg:grid-cols-6 grid-cols-1 max-md:gap-6 items-center">
        <div
          className={`md:col-span-4 ${
            orderChange ? "order-last" : "order-first"
          }`}
        >
          {/* <div className="grid md:grid-cols-3 grid-cols-2 gap-4 grid-flow-row auto-rows-[70px]"> */}
          <div className={`relative w-full aspect-square md:aspect-[4/3] overflow-hidden`}>
            <Image
              src={images}
              alt={images}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          {/* </div> */}
        </div>
        <div
          className={`md:col-span-2 ${
            orderChange ? "order-first" : "order-last"
          }`}
        >
          <div className="flex flex-col gap-8 md:px-8">
            <div className="flex items-center gap-3">
              <div className="">
                {/* <p className="text-dark text-xl font-medium">{title}</p> */}
                <SectionHeading
                  title={subTitle}
                  titleColor="primary"
                  titleClassName="text-4xl!"
                />
              </div>
            </div>
            {/* <p className="md:text-lg text-light">{description}</p> */}

            <div>
              <SwiperCarousel
                data={testimonials}
                autoplay={{ delay: 12000 }}
                modules={[Autoplay]}
                speed={800}
                renderSlide={(card) => (
                  <div className="space-y-4">
                    <p className="md:text-lg text-light">{card?.description}</p>
                    {/* <h2 className="text-ternary text-lg font-medium">
                      {card?.title}
                    </h2> */}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
