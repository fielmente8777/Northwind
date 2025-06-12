import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";
import MainHeading from "../Heading/MainHeading";
import { FillStar, Divider } from "@/icons/icons";
import { imageUrl } from "@/data/links";
import { TestimonialsDataProps } from "@/@types/types";

const TestimonialCard: React.FC<TestimonialsDataProps> = ({
  name,
  text,
}) => {
  return (
    <div className="w-full flex max-sm:flex-col items-center justify-center">
      <div className="max-w-sm w-full px-6">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageUrl + "Frame.webp"}
            alt="rating"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>
      {/* <div className="pe-3">
        <Image src="/Group.png" alt="rating" width={95} height={90} />
      </div> */}
      <div className="lg:pe-3 max-sm:pe-4 lg:rotate-0 rotate-90 w-fit h-[4rem] flex items-center justify-center">
        <Divider />
      </div>
      <div className="w-full flex flex-col h-full gap-4 px-4">
        <ul className="flex gap-1">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <FillStar />
            </li>
          ))}
        </ul>
        <Paragraph text=
          {text} />

        <MainHeading title={name} className="description1" />
      </div>
    </div>
  );
};

export default TestimonialCard;
