import React from "react";

export interface SectionHeadingPropsTypes {
  title?: string;
  subtitle?: string;
  description?: string;
  span?: string;
  Color?: boolean;
}

function SectionHeading({
  title,
  description,
  span,
  Color,
}: SectionHeadingPropsTypes) {
  return (
    <div className="flex flex-col gap-5">
      {description === "AMENITIES" && <p
        className={`text-lg text-center font-semibold text-[#363636] lg:w-[70%] mx-auto ${Color && "text-[#363636]"
          }`}
      >
        {description}
      </p>}
      {title && (
        <h2
          className={`text-center md:text-4xl font-go  font-bold text-3xl last-word text-white bauman-font  ${Color && "!text-[#363636]"
            } md:w-[85%] mx-auto`}
        >
          {title} <span className="!text-[#A52323] bauman-font">{span}</span>
        </h2>
      )}
      {description !== "AMENITIES" && (
        <p
          className={`text-lg text-center text-[#363636] lg:w-[70%] mx-auto ${Color && "text-[#797979]"
            }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
