import { BannerProps } from "@/@types/type";
import Image from "next/image";
import { Container, Section, SectionWithContainer } from "../sectionComponents";
import CheckInOut from "@/app/(home)/components/Check-in-out";
import { Form } from "../forms";

const Banner: React.FC<BannerProps> = ({
  title,
  subTitle,

  src,
}) => {
  return (
    <Section className="relative !py-0">
      <div className="relative w-full md:aspect-[4/1.7] aspect-[4/2.4]">
        <Image
          src={src}
          alt={title ? title : "banner"}
          fill
          className="object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-black opacity-80"></div> */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <Container>
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              <div className="w-full space-y-4">
                <h1 className="lg:text-3xl text-xl text-white text-center uppercase">
                  {title}
                </h1>

                <h2 className="lg:text-6xl md:text-5xl text-3xl font-normal text-white text-center">
                  {subTitle}
                </h2>
              </div>
              {/* <p className="heading3 text-white text-center max-w-4xl tracking-wide w-full max-lg:hidden">
                {description}
              </p> */}
            </div>
          </Container>
        </div>
      </div>

      <div className="hidden md:block max-w-[1100px] w-full -bottom-8 px-4 mx-auto absolute left-1/2 -translate-x-1/2">
        <CheckInOut />
      </div>

      <SectionWithContainer sectionClassName="md:hidden block">
        <Form />
      </SectionWithContainer>
    </Section>
  );
};

export default Banner;
