"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

type ExperienceProps = {
  title: string;
  subTitle?: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  images: { title: string; src: string }[];
};

const Experience = ({
  title,
  description,
  images,
  button,
}: ExperienceProps) => {
  return (
      <Section className="bg-[#F5F0E0] box-shadow relative md:pb-40!">
      <Container>
        <div className="flex justify-end ">
          <div className="flex flex-col gap-6 items-end max-w-[40rem] w-full">
            <h2 className="text-secondary md:text-end text-center md:text-5xl text-3xl font-normal gilda">
              {title}
            </h2>
            <p className="text-dark barlow md:text-end text-center max-w-[35.9rem] w-full">{description}</p>
          </div>
        </div>
        {/* desktop view */}
        <div className="lg:grid hidden md:grid-cols-3 gap-5 mt-12">
          {images.map((card, index) => (
            <div
              key={index}
              className={`relative w-full aspect-4/5 group overflow-hidden ${
                index == 1 && `mt-16`
              } ${index == 2 && `mt-32`}`}
            >
              <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />

              <div className="absolute bottom-0 bg-white/10 backdrop-blur-sm w-full flex justify-center py-2">
                <h2 className="gilda text-xl uppercase font-medium text-white" >{card.title}</h2>
              </div>
            </div>
          ))}
        </div>
        {/* mobile view */}
        <div className="lg:hidden block mt-12">
          <SwiperCarousel
            data={images}
            className="w-full h-full"
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            renderSlide={(card, index) => (
              <div
                key={index}
                className={`relative w-full aspect-[4/4.4]`}
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-0 bg-white/60 w-full flex justify-center py-2">
                  <h2 className="avenir">{card.title}</h2>
                </div>
              </div>
            )}
          />
        </div>
        <LinkButton
          href={button.href}
          label={button.label}
          className="mt-10 mx-auto bg-secondary text-white rounded-none"
        />
      </Container>

      {/* <div
        className="absolute left-0 bottom-14 w-[35%] h-16 bg-no-repeat bg-contain md:block hidden"
        style={{
          backgroundImage: `url('/images/Mountains.png')`,
        }}
      /> */}

      {/* <div
        className="absolute right-0 bottom-14 w-8 h-20 bg-contain bg-no-repeat md:block hidden"
        style={{
          backgroundImage: `url('/images/Leaf2.png')`,
        }}
      />

      <div
        className="absolute left-0 -top-5 w-32 h-32 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Flame.png')`,
        }}
      /> */}
    </Section>
  );
};

export default Experience;
