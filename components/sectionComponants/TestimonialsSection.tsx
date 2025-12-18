"use client";
import { TestimonialsProps } from "@/@types/types";
import Image from "next/image";
import { TestimonialsSlider } from "../sliders";
import SectionWithContainer from "./SectionWithContainer";
import { RatingIcon } from "@/utils/icons";

const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title,
  cards,
  reviewPartners,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-secondary">
      <div className="flex flex-col md:gap-14 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-5 gap-4">
          <div className="col-span-1 lg:col-span-3">
            <h2 className="text-3xl md:text-5xl max-w-md font-semibold text-white font-lora">
              {title}
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="relative max-w-[28rem] ml-auto border border-primary rounded-[20px]">
              {/* Blur background */}
              <div className="absolute inset-0 rounded-[20px]  bg-white/20 backdrop-blur-[20px] z-0" />
              {/* Content */}
              <div className="relative md:grid  grid-cols-2 py-6 box-shadow rounded-[20px] max-md:px-4 md:divide-x-[0.5px] max-md:divide-y-[0.5px] divide-primary z-10">
                {reviewPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 md:px-4 max-md:py-4"
                  >
                    <div className="w-full max-w-[2.5rem] aspect-square relative">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-auto"
                        fill
                        sizes="100vw"
                        priority
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-bold text-white text-nowrap">
                        {partner.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-white">{partner.rating}</p>
                        <div className="flex items-center gap-2">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className="text-white">
                              <RatingIcon />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* testimonials slider */}
        <TestimonialsSlider cards={cards} />
      </div>
    </SectionWithContainer>
  );
};

export default TestimonialsSection;
