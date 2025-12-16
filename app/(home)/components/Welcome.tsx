import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";
import { pageData } from "../pageData";
import OnlinePlatforms from "./OnlinePlatforms";

type WelcomeProps = {
  title: string;
  subTitle: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  location: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

const Welcome = ({
  subTitle,
  description,
  link,
  image,
}: WelcomeProps) => {
  return (
    <Section defaultPadding={false} className="">
      {/* <div className="relative w-full">
        <div
          className="absolute left-0 md:top-0 w-[35%] h-full bg-cover bg-center md:block hidden"
          style={{
            backgroundImage: `url('/images/Mountains.png')`,
          }}
        />

        <div className="flex flex-col gap-1.5 items-center barlow">
          <span>{location.label}</span>
          <h2 className="text-center md:text-2xl text-primary font-medium">
            {title}
          </h2>
        </div>

        <div
          className="absolute right-0 top-0 w-[35%] h-full bg-cover bg-center md:block hidden"
          style={{
            backgroundImage: `url('/images/Mountains.png')`,
          }}
        />
      </div> */}

      <Section className="bg-[#F5F0E0] pt-26">
        <div className="grid md:grid-cols-[1.8fr_1fr] gap-4 md:gap-8 items-center max-w-350 mr-auto">
          <div className="relative w-full aspect-square md:aspect-[4/2.5] after:absolute after:inset-3 after:border after:border-white after:z-10">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover"
              fill
            />
          </div>

          <div className="space-y-5 md:space-y-8 w-full">
            <h2 className="md:text-5xl/[3.5rem] text-3xl font-bold text-center text-dark gilda">
              {subTitle}
            </h2>
            <p className="text-dark barlow md:text-lg text-center">{description}.</p>

            <LinkButton
              href={link.href}
              label={link.label}
              className="bg-black text-white mx-auto rounded-none border-none py-3"
            />
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default Welcome;
