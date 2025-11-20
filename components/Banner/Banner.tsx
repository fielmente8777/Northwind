import Image from "next/image";
import { Section } from "../sectionComponants";
import { LazyLoadedVideo } from "../Video";
import { footerData } from "../footer/footerdata";
import Link from "next/link";

import { FaPhoneAlt } from "react-icons/fa";
import { contact } from "@/utils/constent";

interface BannerProps {
  src: string;
  videoSrc?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}
const Banner: React.FC<BannerProps> = ({ src, videoSrc, title, subTitle }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full md:aspect-16/9 aspect-square flex flex-col items-center justify-center"
    >
      {videoSrc ? (
        <LazyLoadedVideo
          src={videoSrc}
          muted={true}
          autoPlay
          loop
          controls={false}
        />
      ) : (
        <Image
          src={src}
          alt="banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          loading="eager"
        />
      )}

      <div className="absolute md:w-fit w-full z-20 top-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-5 md:bg-transparent bg-primary">
        <div className="relative lg:w-[300px] w-[200px] aspect-4/1">
          <Image
            src={"/images/Northwind-logo.png"}
            alt="logo"
            fill
            className="object-contain"
          />
        </div>

        <Link
          href={`tel:${contact.phone[0]}`}
          target="_blank"
          className="text-white text-4xl md:hidden block"
        >
          <FaPhoneAlt size={22} />
        </Link>
      </div>

      <div className="absolute z-50 top-1/2 md:left-26 -translate-y-1/2 md:max-w-[609px] w-full text-white space-y-2 md:px-0 px-4">
        <h2 className="md:text-2xl flex items-center gap-4 barlow">
          {title}
          <span className="w-26 h-0.5 bg-primary inline-blocks"></span>
        </h2>
        <h3 className="md:text-6xl/[4.5rem] text-4xl bg-linear-to-b from-white to-primary bg-clip-text text-transparent font-bold barlow ">
          {subTitle}
        </h3>
      </div>

      <div className="lg:block hidden absolute right-26 h-full w-fit z-50">
        <div className="flex flex-col justify-center items-center h-full gap-8 text-white">
          {footerData?.lists[1]?.links?.map((list, index) => (
            <Link href={list.href} key={index}>
              {list.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
    </Section>
  );
};

export default Banner;
