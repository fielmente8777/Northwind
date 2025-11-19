import { TestimonialsProps } from "@/@types/types";
import { RatingIcon } from "@/utils/icons";
import Image from "next/image";

const TestimonialCard2: React.FC<TestimonialsProps["cards"][0]> = ({
  src: image,
  title: name,
  description,
}) => {
  return (
    <div className="w-full bg-white px-6 py-10 gap-6 flex flex-col rounded-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4 text-primary">
          <h3 className="text-xl font-semibold font-lora">{name}</h3>
          {/* reating icon 5 stars */}
          <ul className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <RatingIcon />
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-[62px] aspect-square">
          <Image src={image} alt="review logo" fill className="object-cover" />
        </div>
      </div>
      <div className="w-full h-px bg-secondary" />
      <p className="text-light">{description}</p>
    </div>
  );
};

export default TestimonialCard2;
