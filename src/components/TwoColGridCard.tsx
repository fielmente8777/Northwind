import Image from "next/image";
import Paragraph from "./Paragraph/Paragraph";
import { AboutUsDataProps } from "@/@types/types";
import Link from "next/link";

const TwoColGridCard: React.FC<AboutUsDataProps> = ({
  title,
  title1,
  subtitle,
  desc,
  desc1,
  src,
  label,
  href,
  index = 0,
}) => {

  console.log(src)
  return (
    <>
      <div
        className={`lg:grid grid-cols-2 lg:items-center gap-6 ${index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"}`}
      >
        <div
          className={`col-span-1 w-full h-full ${index % 2 === 0 ? "order-1 max-md:mt-4" : "order-2 max-md:mb-4"}`}
        >
          {src && (
            <div
              className={` relative w-full aspect-[4/2.88] rounded-lg overflow-hidden `}
            >
              <Image
                src={src}
                alt="Image 1"
                className="object-cover object-top"
                sizes="100vw"
                fill
              />
            </div>
          )}
        </div>
        <div
          className={` flex justify-center flex-col gap-4 col-span-1  ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          {title && (
            <div className="flex flex-col gap-2">
              <h3 className="capitalize text-[#363636] heading3 font-semibold max-md:mt-2">
                {subtitle}
              </h3>
              {title1 && (
                <div className="flex flex-col gap-2">
                  <h1 className="capitalize  text-secondary semiLargeHeading ">
                    {title1}
                  </h1>
                </div>
              )}
              <h1 className="capitalize  text-primary semiLargeHeading ">
                {title}
              </h1>
            </div>
          )}
          {desc && <Paragraph text={desc} />}
          {desc1 && <p className="text-[#727272] font-semibold">{desc1}</p>}
          {false && label && href && (
            <div className="flex items-center gap-4">
              <Link
                href={href}
                target="blank"
                className=" bg-[#a52323] rounded-md w-fit px-6 flex gap-3 h-[48px] items-center content-center"
              >
                <p className="text-white">{label}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#E8EAED" />
                </svg>
              </Link>
              <Link href="">
                <p className="text-[#A52323] font-semibold underline">Contact us</p>
              </Link>
            </div>

          )}


        </div>
      </div>
    </>
  );
};

export default TwoColGridCard;
