import { FeatureCardProps } from "@/@types/types";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center mb-4">
        <span className="p-8 rounded-full aspect-square shadow-xl relative z-10 bg-white">
          {icon}
        </span>
      </div>
      <MainHeading
        h3
        h2={false}
        className="text-center text-white font-semibold description1"
        title={title}
      />
      <Paragraph className="text-center text-white description2" text={subtitle} />
    </div>
  );
};

export default FeatureCard;
