"use client";
import { SectionWithContainer } from "@/components";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const ThankUPopUp = () => {
  const router = useRouter();

  const redirectToHome = () => {
    router.push("/");
  };

  useEffect(() => {
    // Google Ads Conversion Tracking
    const script = document.createElement("script");
    script.innerHTML = `
        gtag('event', 'conversion', {'send_to': 'AW-10892529660/SE_1CNTCpf0ZEPyf-8ko'});
    `;
    document.head.appendChild(script);
  }, []);

  //   const socialMediaData = [
  //     {
  //       icon: <FillFacebook />,
  //       name: "Facebook",
  //       link: "https://www.facebook.com/ebc.mussoorie/",
  //     },
  //     {
  //       icon: <FillInsta />,
  //       name: "Instagram",
  //       link: "https://www.instagram.com/ebcmussoorie/",
  //     },
  //     {
  //       icon: <FillTripadvisor />,
  //       name: "Tripadvisor",
  //       link: "https://www.tripadvisor.in/Hotel_Review-g297689-d23292009-Reviews-Everest_Base_Camp_Mussoorie-Mussoorie_Dehradun_District_Uttarakhand.html",
  //     },

  //     {
  //       icon: <FillYoutube />,
  //       name: "Youtube",
  //       link: "https://www.youtube.com/@EverestBaseCampMussoorie",
  //     },
  //   ];

  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-4 items-center justify-center h-[60vh]">
        <div className="">
          <Image src="/mail.png" alt="mail" width={120} height={84} />
        </div>

        <div className="flex flex-col w-full items-center  justify-center gap-4">
          <h1 className="lg:text-4xl text-2xl font-semibold text-[#D4B01C]">
            Thanks for submitting!
          </h1>
          <p className="lg:text-2xl italic text-[#D4B01C]">
            we will get back to you shortly!
          </p>
          <button
            className="bg-[#D4B01C] text-white w-max py-2 px-6 lg:text-[1.375rem]/[2rem] text-xl rounded-md hover:[#D4B01C  ]/80 transition duration-200"
            onClick={redirectToHome}
          >
            Go Home
          </button>

          <div className="flex flex-row gap-4 mt-4">
            {/* {socialMediaData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-primary p-2 flex items-center justify-center   border border-primary rounded-full hover:scale-95 active:scale-105 hover:text-secondary hover:bg-primary transition duration-200"
              >
                {item.icon}
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ThankUPopUp;
