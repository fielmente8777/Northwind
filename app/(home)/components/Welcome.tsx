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
  title,
  subTitle,
  description,
  link,
  image,
  location,
}: WelcomeProps) => {
  return (
    <Section className="p-0!">
      <div className="relative w-full">
        <div
          className="absolute left-0 top-0 w-[30%] h-full bg-contain bg-center"
          style={{
            backgroundImage: `url('/images/Mountains.png')`,
          }}
        />
        <div className="flex flex-col gap-1.5 items-center">
          <span>{location.label}</span>
          <h2 className="text-center md:text-2xl text-primary">{title}</h2>
        </div>

        <div
          className="absolute right-0 top-0 w-[30%] h-full bg-contain bg-center"
          style={{
            backgroundImage: `url('/images/Mountains.png')`,
          }}
        />
      </div>

      <Section className="bg-primary">
        <Container className="grid md:grid-cols-12 items-center">
          <div className="md:col-span-4 relative max-w-96 aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover"
              fill
            />
          </div>

          <div className="md:col-span-8 space-y-5">
            <h1 className="text-3xl font-bold text-dark">{subTitle}</h1>
            <p className="text-dark">{description}</p>

            <LinkButton
              href={link.href}
              label={link.label}
              className="bg-black text-white rounded-full! border-none py-3"
            />
          </div>
        </Container>
      </Section>
    </Section>
  );
};

export default Welcome;
