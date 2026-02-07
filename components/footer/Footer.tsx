"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../sectionComponants";
import { footerData } from "./footerdata";
import LinkButton from "../buttons/LinkButton";

const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }

  const data = footerData;

  return (
    <footer className="max_screen_width bg-secondary/90 md:pt-10 pt-0 relative">
      <Container>
        <div className="grid md:py-12 py-8 text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          <div className="md:max-w-75 flex flex-col gap-4 items-center">
            <div className="w-75 relative md:w-74 aspect-[4/.75]">
              <Image
                src={data.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center">{data.description}</p>
            <LinkButton href={data.link.href} label={data.link.label} className="bg-white rounded-none text-secondary mt-2" />
          </div>
          {data.lists.map((list, index) => (
            <div
              className={`${index === 1 ? "lg:w-fit lg:ml-auto" : ""}`}
              key={index}
            >
              <h2 className="md:text-[2rem]  font-aboreto  text-2xl mb-4 gilda">
                {list.title}
              </h2>
              <ul className={`flex flex-col gap-4`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${suIndex === 3 && "gilda"}`}
                    key={suIndex}
                  >
                    <span
                      className={`mt-1 ${
                        index === 1
                          ? "text-white flex items-center justify-center rounded-sm bg-secondary w-10 aspect-square gilda"
                          : ""
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>
                    {item.title && (
                      <span
                        className={`${
                          index === 1
                            ? " font-aboreto text-2xl my-auto"
                            : "md:text-lg  inline-block"
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
                            ? " text-2xl my-auto"
                            : "md:text-lg  inline-block"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className=" -ml-1">,</span>}
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
                              ? " font-aboreto text-2xl my-auto"
                              : "md:text-lg "
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
              {/* <Link href={"https://www.eazotel.com"} target="_blank">
                Eazotel
              </Link> */}
               <Link
                href="https://www.fielmente.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fielmente
              </Link>
            </p>
          </div>
        </Container>
      </div>

      {/* <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[35%] h-44 bg-no-repeat bg-contain bg-center md:block hidden"
        style={{
          backgroundImage: `url('/images/Mountains.png')`,
        }}
      />

      <div
        className="absolute right-0 md:bottom-16 bottom-30 w-20 h-20 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Tree.png')`,
        }}
      />

      <div
        className="absolute left-0 bottom-16 w-20 h-20 bg-contain bg-no-repeat md:block hidden"
        style={{
          backgroundImage: `url('/images/Leaf.png')`,
        }}
      /> */}
    </footer>
  );
};

export default Footer;
