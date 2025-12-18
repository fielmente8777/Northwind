import { OnlinePlatformsPropsTypes } from "@/app/(home)/components/OnlinePlatforms";
import Image from "next/image";
import { FC } from "react";

const OnlinePlatformsCard: FC<OnlinePlatformsPropsTypes["cards"][0]> = ({
  icon,
  ratings,
  partnerName,
  src,
}) => {
  return (
    <div
      className="flex items-center justify-center gap-6 p-6  rounded-lg 
              transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
    >
      <div>{icon}</div>
      <div className="text-lg flex flex-col gap-2 font-medium  text-clr uppercase tracking-wide">
        <span className="text-ternary">{ratings}</span>
        <div className="relative w-36 aspect-4/1">
          <Image src={src} alt={partnerName} fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default OnlinePlatformsCard;
