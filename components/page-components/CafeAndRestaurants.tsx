"use client";
import { CafeAndRestaurantsProps } from "@/@types/types";
import LinkButton from "../buttons/LinkButton";
import { SectionWithContainer } from "../sectionComponants";
import { SectionHeading } from "../typography";
import CafeSlider from "../sliders/CafeSlider";

const CafeAndRestaurants: React.FC<CafeAndRestaurantsProps> = ({
  title,
  subTitle,
  description,
  images,
  link,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 md:gap-12">
        <SectionHeading title={title} subTitle={subTitle} line />
        <CafeSlider cards={images} />
        <p className="md:text-lg text-center text-light">{description}</p>
        <LinkButton
          href={link.url}
          label={link.label}
          className="text-white bg-secondary text-nowrap mx-auto"
        />
      </div>
    </SectionWithContainer>
  );
};

export default CafeAndRestaurants;
