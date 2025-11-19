"use client";
import Image from "next/image";
import { footerData, footerData2 } from "./footerdata";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkButton from "../buttons/LinkButton";
import { contact } from "@/utils/constent";
import { Container } from "../sectionComponants";

const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }

  const data = pathName !== "/" ? footerData : footerData2;

  return (
    <footer className="max_screen_width bg-primary">
      <Container>
        <div className="grid md:py-12 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          <div className="md:max-w-[300px] flex flex-col gap-4 items-center">
            <div className="w-[100px] relative md:w-[280px] aspect-4/1">
              <Image
                src={data.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain "
              />
            </div>
            <p className="text-white text-center">{data.description}</p>
          </div>
          {data.lists.map((list, index) => (
            <div
              className={`${index === 1 ? "lg:w-fit lg:ml-auto" : ""}`}
              key={index}
            >
              <h2 className="md:text-[2rem] text-white font-aboreto  text-xl mb-4">
                {list.title}
              </h2>
              <ul className={`flex flex-col gap-4`}>
                {list.links.map((item, suIndex) => (
                  <li className="flex gap-2 flex-wrap" key={suIndex}>
                    <span
                      className={`mt-1 ${
                        index === 1
                          ? "text-primary flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : "text-white inline-block"
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>
                    {item.title && (
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-aboreto text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.title}
                      </span>
                    )}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-aboreto text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="text-white -ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2"
                      >
                        <span
                          className={`${
                            index === 1
                              ? "text-white font-aboreto text-2xl my-auto"
                              : "md:text-lg text-white"
                          }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {/* {index === 1 && (
                <LinkButton
                  target="_blank"
                  rel="noopener noreferrer"
                  label={"Book Now"}
                  href={contact.WhatsappCta}
                  className="mt-6 w-full justify-center text-white bg-secondary border-secondary"
                />
              )} */}
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-secondary">
        <Container className="py-4">
          <div className="flex max-md:flex-col items-center justify-center gap-2 text-white md:text-lg">
            {" "}
            <p className="">© {new Date().getFullYear()} North Wind 57</p>
            <span className="md:block hidden">|</span>
            <p className="">All Rights Reserved</p>
            <span className="md:block hidden">|</span>
            <p className="">
              Powered by{" "}
              <Link href={"https://www.eazotel.com"} target="_blank">
                Eazotel
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
