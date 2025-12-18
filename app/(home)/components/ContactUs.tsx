import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { contact } from "@/utils/constent";
import Image from "next/image";
import { JSX } from "react";

interface IConnectivity {
  title: string;
  src: string;
  items: {
    icons: JSX.Element;
    title: string;
    distance: string;
  }[];
  link: {
    text: string;
    href: string;
  };
}
const ContactUs: React.FC<IConnectivity> = ({ title, src, items }) => {
  return (
    <SectionWithContainer sectionClassName="">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="md:grid grid-cols-2 md:items-center flex flex-col-reverse gap-8 w-full mt-8">
          <div className="flex flex-col gap-8 ">
            <h2 className="text-primary md:text-4xl text-3xl gilda">
              {title}{" "}
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {items?.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="">{item.icons}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl text-light font-lore font-semibold gilda">
                      {item.title}
                    </h3>
                    {/* <SectionHeading subTitle={item.distance} subTitleClassName="description1 !text-primary" /> */}
                    <p className="text-light">{item.distance}</p>
                  </div>
                </div>
              ))}
            </div>
            <LinkButton
              href={contact.WhatsappCta}
              label={"Book Now"}
              className=" border-primary rounded-full! bg-dark text-white"
            />
          </div>

          <div className=" relative lg:aspect-[4/2.5] rounded-sm overflow-hidden aspect-[4/3]  w-full">
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d408.4344585967186!2d76.717101!3d32.043019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b9aae345a3e1%3A0xa782a7ade89d23d8!2sNorthwind%2057%20glamping%20resort!5e1!3m2!1sen!2sin!4v1763635103997!5m2!1sen!2sin"
              }
              loading="lazy"
              className="w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUs;
