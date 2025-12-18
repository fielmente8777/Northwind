"use client";
import { RoomsProps } from "@/@types/types";
import OnlyButton from "../buttons/OnlyButton";
import { Section } from "../sectionComponants";
import { RoomsSlider } from "../sliders";
import { SectionHeading } from "../typography";
import { useWebContext } from "@/contextApi/WebContext";

const Rooms: React.FC<RoomsProps> = ({ title, subTitle, cards, link, bg }) => {
  const { setIsOpenPopup } = useWebContext();
  return (
    <Section className={`${bg ? `bg-[#F9FFEB]` : "bg-primary"}`}>
      <div className="flex flex-col md:gap-14 gap-8">
        <SectionHeading
          title={title}
          subTitle={subTitle}
          titleColor={`${bg ? `primary` : "white"}`}
          subTitleColor={`${bg ? `primary` : "white"}`}
          wrapperClassName="max_width"
          line
        />
        <RoomsSlider cards={cards} bg={bg} />
        {link && (
          // <LinkButton
          //   href={link.url}
          //   label={link.label}
          //   className="text-nowrap text-white bg-secondary border-secondary mx-auto"
          // />
          <OnlyButton
            label={link.label}
            className="text-nowrap text-white bg-secondary border-secondary mx-auto"
            onclick={() => setIsOpenPopup(true)}
          />
        )}
      </div>
    </Section>
  );
};

export default Rooms;
