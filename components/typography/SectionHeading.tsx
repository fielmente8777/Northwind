import Image from "next/image";
import Headings from "./Headings";

interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  textCenter?: boolean;
  mdTextCenter?: boolean;
  smTextCenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  line?: boolean;
}

const SectionHeading: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  line = false,
  textCenter = line ? true : false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  mdTextCenter = false,
  wrapperClassName = "",
  titleClassName = "",
  subTitleClassName = "",
}) => {
  return (
    <div className={`flex flex-col w-full ${wrapperClassName}`}>
      {title && (
        <Headings
          level={2}
          className={`${titleClassName} ${
            mdTextCenter ? "md:text-center" : ""
          } ${textCenter ? "text-center mx-auto" : ""} ${
            smTextCenter ? "max-md:text-center" : ""
          } ${
            titleColor ? `text-${titleColor}` : "text-primary"
          } text-xl font-medium`}
          heading={title}
        />
      )}

      <div className="mt-8">
        <Image
          src={"/images/Google.png"}
          alt="google"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      <div className={`${line && "lg:flex items-center gap-4 mx-auto"}`}>
        {line && (
          <span className="lg:block hidden">
            <LineRight />
          </span>
        )}
        {subTitle && (
          <Headings
            level={3}
            className={`${subTitleClassName} ${
              mdTextCenter ? "md:text-center" : ""
            } ${textCenter ? "text-center" : ""} ${
              smTextCenter ? "max-md:text-center" : ""
            } ${
              subTitleColor ? `text-${subTitleColor}` : "text-primary"
            } uppercase md:text-[2.5rem] text-3xl font-aboreto`}
            heading={subTitle}
          />
        )}
        {line && (
          <span className="lg:block hidden">
            <LineLeft />
          </span>
        )}
        {line && (
          <span className="lg:hidden block mx-auto mt-2 w-fit">
            <BottomLine />
          </span>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;

export const LineRight = () => (
  <svg
    width={84}
    height={11}
    viewBox="0 0 84 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.5" width={60} height={2} fill="#E8B716" />
    <rect x={24} y="8.5" width={60} height={2} fill="#E8B716" />
  </svg>
);

export const LineLeft = () => (
  <svg
    width={84}
    height={11}
    viewBox="0 0 84 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x={24} y="0.5" width={60} height={2} fill="#E8B716" />
    <rect y="8.5" width={60} height={2} fill="#E8B716" />
  </svg>
);

export const BottomLine = () => (
  <svg
    width={180}
    height={11}
    viewBox="0 0 180 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y={1} width={180} height={2} fill="#E8B716" />
    <rect x={52} y={9} width={76} height={2} fill="#E8B716" />
  </svg>
);
