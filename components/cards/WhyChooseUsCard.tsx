import { FacilitiesProps } from "@/@types/types";
import Image from "next/image";
import { FC } from "react";

const WhyChooseUsCard: FC<FacilitiesProps["cards"][0]> = ({ title, src }) => {
  return (
    <div className="relative w-full aspect-[4/4]">
      <Image src={src} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute bottom-4 inset-x-4">
        <h3 className="text-2xl text-white font-aboreto text-center text-wrap">{title}</h3>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
