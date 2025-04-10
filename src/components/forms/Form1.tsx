"use client";
import { useMemo, useRef, useState } from "react";
import { OnlyButton } from "../buttons";
import useClickOutside from "@/hooks/useClickOutside";
import {
  CallIcon,
  DropDownIcon,
  HotelIcon,
  MailIcon,
  MessageIcon,
  UserIcon,
} from "@/data/icons";

const Form1 = () => {
  // const [extend, setExtend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkInOutRef = useRef<HTMLInputElement | null>(null);

  const industries = useMemo(
    () => [
      "select Industry",
      "Hotel Industry",
      "Restaurant Industry",
      "Immigration Industry",
      "Beauty Industry",
      "Clothing Industry",
      "other Industry",
    ],
    []
  );

  const [selected, setSelected] = useState(industries[0]);

  // useClickOutside(formRef, () => {
  //   if (extend) {
  //     setExtend(false);
  //   }
  // });
  useClickOutside(dropDownRef, () => {
    if (isOpen) {
      setIsOpen(false);
      setSelected(industries[0]);
    }
  });

  return (
    <form
      className={`rounded-full grid grid-cols-12 bg-bg divide-x-2 shadow-xl`}
      ref={formRef}
    >
      <div className="col-span-2 h-full flex items-center">
        <input
          type="text"
          placeholder="Full Name*"
          className="outline-none border-none w-full h-full p-6 bg-transparent"
        />
      </div>

      <div className="col-span-2 grid grid-cols-12">
        <div className="flex items-center col-span-2 pl-1">
          <span className="text-sm">+91</span>
          <span>
            <DropDownIcon />
          </span>
        </div>
        <input
          type="number"
          placeholder="Phone Number*"
          className="col-span-10 outline-none border-none w-full h-full py-6 pl-6 px-2 text-sm bg-transparent"
        />
      </div>

      <div className="col-span-2 h-full flex items-center">
        <input
          type="text"
          placeholder="Email Id*"
          className="outline-none border-none w-full h-full py-6 px-2 bg-transparent"
        />
      </div>

      <div className="col-span-2 relative flex items-center">
        <input
          type="date"
          placeholder="Check in"
          ref={checkInRef}
          className="outline-none border-none w-full h-full py-6 px-2 bg-transparent pointer-events-auto opacity-0"
        />
        <span
          className="absolute inset-0 flex items-center justify-start px-2 text-text-light cursor-pointer pointer-events-auto"
          onClick={() => {
            checkInRef?.current?.showPicker();
          }}
        >
          Check in
        </span>
      </div>

      <div className="flex col-span-2 items-center relative">
        <input
          type="date"
          placeholder="Check in"
          ref={checkInOutRef}
          className="outline-none border-none w-full h-full py-6 px-2 bg-transparent pointer-events-auto opacity-0"
        />
        <span
          className="absolute inset-0 flex items-center justify-start text-text-light cursor-pointer pointer-events-auto px-2"
          onClick={() => {
            checkInOutRef?.current?.showPicker();
          }}
        >
          Check out
        </span>
      </div>

      <div className="h-full col-span-2 flex items-center">
        <button className="text-center bg-primary w-full h-full rounded-r-full font-bold text-white">
          Book Now
        </button>
      </div>
    </form>
  );
};

export default Form1;
