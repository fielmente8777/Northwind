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
        <div className="md:grid grid-cols-5 md:items-center flex flex-col-reverse gap-8 w-full mt-8">
          <div className="flex flex-col gap-8 col-span-2">
            <h2 className="text-primary md:text-4xl text-3xl">{title} </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {items?.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="">{item.icons}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl text-light font-lore font-semibold">
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

          <div className="col-span-3 relative lg:aspect-[4/2.5] rounded-sm overflow-hidden aspect-[4/3]  w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433021.55902033363!2d77.0932314!3d28.6440837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e1!3m2!1sen!2snp!4v1763540868497!5m2!1sen!2snp"
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
