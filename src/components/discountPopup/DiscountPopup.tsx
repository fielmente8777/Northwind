"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./discount.css";
interface DiscountPopupProps {
  logo: {
    src: string;
    alt: string;
  };

  content: {
    title: string;
    subTitle?: string;
    _html?: string;
    // description: string;
    discount?: number;
    borderColor?: string;
  };

  contact: {
    label: string;
    href: string;
    bgColor?: string;
    textColor?: string;
  };

  image?: {
    src: string;
    alt: string;
  };
}

const DiscountPopup = ({
  image,
  logo,
  contact,
  content,
}: DiscountPopupProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(id);
  }, []);
  return (
    show && (
      <div className="fixed inset-0 bg-black/40 flex items-center z-50">
        <div
          className="max-w-4xl w-full rounded-md p-6 mx-auto flex flex-col items-center justify-center bg-white bg-cover bg-center bg-no-repeat min-h-[540px] relative"
          style={{
            backgroundImage: `url(${image?.src})`,
          }}
        >
          <div className="max-w-[440px] flex flex-col justify-center items-center w-full mx-auto space-y-8 z-50">
            {logo && (
              <div className="relative max-w-56 w-full aspect-[6/2.5]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  fill
                />
              </div>
            )}
            {/* main content  */}
            <div
              className="grid relative sm:grid-cols-12 rounded-md border-2 border-[#9A846F] p-7 w-full sm:divide-x-2 divide-[#9A846F] gap-3 items-center text-white"
              style={{
                borderColor: content.borderColor || "#9A846F",
              }}
            >
              {content.discount && (
                <>
                  <div className="sm:col-span-4 text-white">
                    <h2 className="text-5xl font-medium purple-purse">
                      {content?.discount}%
                    </h2>
                    <p className="uppercase text-lg questrial-regular">
                      Discount
                    </p>
                  </div>

                  <div className="sm:col-span-8">
                    {content._html && (
                      <div
                        dangerouslySetInnerHTML={{ __html: content._html }}
                      />
                    )}

                    <p className="text-4xl/[3rem] questrial-regular">
                      {content.subTitle}
                    </p>
                  </div>
                </>
              )}

              {!content.discount && (
                <div className="sm:col-span-12 flex flex-col gap-2 items-center">
                  <p className="text-2xl">Contact for best price</p>
                </div>
              )}

              {/* <div className="sm:col-span-4 text-white">
                <h2 className="text-5xl font-medium purple-purse">
                  {content?.discount}%
                </h2>
                <p className="uppercase text-lg questrial-regular">Discount</p>
              </div>

              <div className="sm:col-span-8">
                {content._html && (
                  <div dangerouslySetInnerHTML={{ __html: content._html }} />
                )}

                <p className="text-4xl/[3rem] questrial-regular">
                  {content.subTitle}
                </p>
              </div> */}

              {/* <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[#9A846F] uppercase py-1.5 tracking-widest px-2 rounded-lg">
                <p className="text-sm">{content.title}</p>
              </div> */}
            </div>

            {/* contact button  */}
            <div>
              <Link
                className="flex items-center gap-1.5 justify-center px-3 py-3.5 rounded-md questrial-regular text-lg "
                href={contact.href}
                style={{
                  backgroundColor: contact?.bgColor,
                  color: contact?.textColor,
                }}
              >
                <PhoneIcon />
                {contact?.label}
              </Link>
            </div>
          </div>

          <div
            className="absolute left-2 top-2 cursor-pointer z-50"
            onClick={() => setShow(false)}
          >
            <CrossIcon />
          </div>

          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    )
  );
};

export default DiscountPopup;

const PhoneIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.45 21.5C18.3667 21.5 16.3083 21.0458 14.275 20.1375C12.2417 19.2292 10.3917 17.9417 8.725 16.275C7.05833 14.6083 5.77083 12.7583 4.8625 10.725C3.95417 8.69167 3.5 6.63333 3.5 4.55C3.5 4.25 3.6 4 3.8 3.8C4 3.6 4.25 3.5 4.55 3.5H8.6C8.83333 3.5 9.04167 3.57917 9.225 3.7375C9.40833 3.89583 9.51667 4.08333 9.55 4.3L10.2 7.8C10.2333 8.06667 10.225 8.29167 10.175 8.475C10.125 8.65833 10.0333 8.81667 9.9 8.95L7.475 11.4C7.80833 12.0167 8.20417 12.6125 8.6625 13.1875C9.12083 13.7625 9.625 14.3167 10.175 14.85C10.6917 15.3667 11.2333 15.8458 11.8 16.2875C12.3667 16.7292 12.9667 17.1333 13.6 17.5L15.95 15.15C16.1 15 16.2958 14.8875 16.5375 14.8125C16.7792 14.7375 17.0167 14.7167 17.25 14.75L20.7 15.45C20.9333 15.5167 21.125 15.6375 21.275 15.8125C21.425 15.9875 21.5 16.1833 21.5 16.4V20.45C21.5 20.75 21.4 21 21.2 21.2C21 21.4 20.75 21.5 20.45 21.5Z"
        fill="white"
      />
    </svg>
  );
};

const CrossIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.53366 25.3334L6.66699 23.4667L14.1337 16L6.66699 8.53335L8.53366 6.66669L16.0003 14.1334L23.467 6.66669L25.3337 8.53335L17.867 16L25.3337 23.4667L23.467 25.3334L16.0003 17.8667L8.53366 25.3334Z"
        fill="#E8EAED"
      />
    </svg>
  );
};
