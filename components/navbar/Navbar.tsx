"use client";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Container } from "../sectionComponants";
import { navUpper } from "./navData";
import { footerData } from "../footer/footerdata";
const Navbar: React.FC = () => {
  const pathName = usePathname();

  useEffect(() => {
    const hideWidgetLink = () => {
      const widget = document.querySelector(
        ".elfsight-app-e3e6d9a0-7d7f-4530-8524-7ef96c38507c a"
      ) as HTMLElement | null;
      if (widget) {
        widget.style.setProperty("display", "none", "important");
      }
    };
    hideWidgetLink();

    const observer = new MutationObserver(hideWidgetLink);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const iframe = document.querySelector(
      ".elfsight-app-e3e6d9a0-7d7f-4530-8524-7ef96c38507c iframe"
    ) as HTMLIFrameElement | null;
    if (iframe) {
      iframe.onload = () => {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow?.document;
        const link = iframeDoc?.querySelector(
          'a[style*="display: flex"]'
        ) as HTMLElement | null;
        if (link) {
          link.style.setProperty("display", "none", "important");
        }
      };
    }
  }, []);

  // Weather state
  const [temp, setTemp] = useState<number | null>(null);

  // Memoized function to fetch weather
  const getTemp = useCallback(async () => {
    try {
      const apiKey = "8611baa95180437492f54121230505";
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000); // Set a timeout for the request

      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=30.438097377179943, 78.19056825767129`,
        { signal: controller.signal }
      );

      clearTimeout(timeout);
      setTemp(response?.data?.current?.temp_c);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setTemp(null); // Handle error gracefully
    }
  }, []);

  // Fetch weather only user's location
  useEffect(() => {
    getTemp();
  }, [getTemp]);


  if(pathName === "/thank-you/"){
    return null;
  }

  return (
    <div
      className="max-w-[1600px] mx-auto"
      style={{ boxShadow: "0px 7px 29px 0px #64646F33" }}
    >
      <nav className="bg-primary hidden md:block py-4 ">
        <Container>
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-4">
              <li className="">
                {temp && (
                  <div className="flex items-center gap-2">
                    <span>
                      <span className="sr-only">Weather icon</span>
                      <TemperatureIcon />
                    </span>
                    <span className="text-white">{temp}°C</span>
                  </div>
                )}
              </li>
              {navUpper?.slice(0, 2).map((link, index) => (
                <li key={index} className="flex items-center text-white gap-2">
                  <span>{link.icon}</span>
                  <Link href={link.href? link.href : "#"} className="text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* <div
                id="widget"
                className="absolute right-[10px] md:right-20 top-[10px] md:top-5 text-white text-[26px] max-md:text-[20px] z-[100]"
              >
                <div
                  className="elfsight-app-e3e6d9a0-7d7f-4530-8524-7ef96c38507c"
                  data-elfsight-app-lazy
                ></div>
              </div> */}
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span>{navUpper[2].icon}</span>
                <Link
                  href={navUpper[2].href}
                  className="flex flex-col text-white"
                >
                  <span className="">Call Us Now</span>
                  {navUpper[2].label}
                </Link>
              </div>
              <div className="w-[1px] h-10 bg-white"></div>
              <ul className="flex items-center gap-4">
                {footerData.lists[1].links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-white"
                    >
                      <span className="sr-only">{link.label}</span>
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;


export const TemperatureIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1450_72)">
      <path
        d="M8.79297 13.4933V7.97803C8.79297 7.54654 8.4432 7.19678 8.01172 7.19678C7.58023 7.19678 7.23047 7.54654 7.23047 7.97803V13.4933C6.32027 13.8151 5.66797 14.6828 5.66797 15.7032C5.66797 16.9976 6.7173 18.0469 8.01172 18.0469C9.30613 18.0469 10.3555 16.9976 10.3555 15.7032C10.3555 14.6828 9.7032 13.8151 8.79297 13.4933Z"
        fill="white"
      />
      <path
        d="M10.3555 12.5787V2.73438C10.3555 1.44203 9.30406 0.390625 8.01172 0.390625C6.71937 0.390625 5.66797 1.44203 5.66797 2.73438V12.5787C4.70336 13.3038 4.10547 14.4543 4.10547 15.7031C4.10547 17.8571 5.85781 19.6094 8.01172 19.6094C10.1656 19.6094 11.918 17.8571 11.918 15.7031C11.918 14.4543 11.3201 13.3038 10.3555 12.5787Z"
        stroke="white"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 2.26562H2.5"
        stroke="white"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 4.42615H2.5"
        stroke="white"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 6.58655H2.5"
        stroke="white"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 8.74707H2.5"
        stroke="white"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 10.9076H2.5"
        stroke="white"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.582 0.390625C12.1505 0.390625 11.8008 0.740391 11.8008 1.17188C11.8008 1.60336 12.1505 1.95312 12.582 1.95312C13.0135 1.95312 13.3633 1.60336 13.3633 1.17188C13.3633 0.740391 13.0135 0.390625 12.582 0.390625Z"
        stroke="white"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4993 1.57197C17.1858 1.36572 16.8107 1.24548 16.4074 1.24548C15.3087 1.24548 14.418 2.13619 14.418 3.23494C14.418 4.33369 15.3087 5.22439 16.4074 5.22439C16.8537 5.22439 17.2207 5.07748 17.4993 4.82935"
        stroke="white"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1450_72">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
