import Image from "next/image";
import { Section } from "../sectionComponants";
import { LazyLoadedVideo } from "../Video";
import { footerData } from "../footer/footerdata";
import Link from "next/link";

import { FaPhoneAlt } from "react-icons/fa";
import { contact } from "@/utils/constent";
import LinkButton from "../buttons/LinkButton";
import { navUpper } from "../navbar/navData";

interface BannerProps {
  src: string;
  videoSrc?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}
const Banner: React.FC<BannerProps> = ({ src, videoSrc, title, subTitle }) => {
  return (
    <Section defaultPadding={false} className="p-3">
      <div className="relative w-full md:aspect-16/9 aspect-[4/5.5] ">
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

        <div className="absolute w-fit z-20 md:top-20 top-15 left-1/2 transform -translate-x-1/2">
          <div className="relative lg:w-100 w-60 aspect-[4/.74]">
            <Image
              src={"/images/Northwind-logo.png"}
              alt="logo"
              fill
              className="object-cover"
            />
          </div>

          {/* <Link
            href={`tel:${contact.phone[0]}`}
            target="_blank"
            className="text-white text-4xl md:hidden block"
          >
            <FaPhoneAlt size={22} />
          </Link> */}
        </div>

        <div className="absolute z-50 md:top-60 top-35 left-1/2 transform -translate-x-1/2 md:max-w-[47.5rem] text-center w-full text-white space-y-2 md:px-0 px-4">
          {/* <h2 className="md:text-2xl gap-4 barlow">
            {title} */}
          {/* <span className="w-26 h-0.5 bg-primary inline-blocks"></span> */}
          {/* </h2> */}
          <h1 className="md:text-5xl/[4rem] text-xl text-white font-mont">
            {subTitle}
          </h1>
          <Link
            href="{navUpper[0].href}"
            className="flex items-center justify-center gap-2 mt-4 md:text-xl"
          >
            <span className="">{navUpper[0].icon}</span>
            {navUpper[0].label}
          </Link>
        </div>
        <div className="absolute z-50 bottom-8 left-1/2 transform -translate-x-1/2 w-fit">
          <LinkButton
            href="/contact"
            label="Book Now"
            className="md:text-xl text-nowrap bg-white/10 backdrop-blur-sm text-white border-white border rounded-none mx-auto mt-4"
          />
        </div>

        {/* <div className="lg:block hidden absolute right-26 h-full w-fit z-50">
          <div className="flex flex-col justify-center items-center h-full gap-8 text-white">
          {footerData?.lists[1]?.links?.map((list, index) => (
            <Link href={list.href} key={index}>
                {list.icon}
              </Link>
            ))}
          </div>
        </div> */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30" /> */}
      </div>
    </Section>
  );
};

export default Banner;
