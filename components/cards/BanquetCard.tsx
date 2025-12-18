import { BanquetsProps } from "@/@types/types";
import Image from "next/image";
import { FC } from "react";

const BanquetCard: FC<BanquetsProps["cards"][0]> = ({
  src,
  title,
  description,
}) => {
  return (
    <div className="w-full box-shadow h-full overflow-hidden rounded-[20px] box-shadow bg-bg1">
      <div className="w-full relative aspect-[4/2.5]">
        <Image src={src} alt={title} fill className="object-cover box-shadow rounded-[20px]" />
      </div>
      <div className="px-6 py-5 ">
        <h3 className="text-[1.375rem] text-primary font-lora font-semibold">{title}</h3>
        <p className="md:text-lg text-light">{description}</p>
      </div>
    </div>
  );
};

export default BanquetCard;
