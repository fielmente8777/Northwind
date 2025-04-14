"use client";
import { countries } from "@/data/countryCode";
import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";

const Form1 = () => {
  // const [extend, setExtend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkInOutRef = useRef<HTMLInputElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code

  // const industries = useMemo(
  //   () => [
  //     "select Industry",
  //     "Hotel Industry",
  //     "Restaurant Industry",
  //     "Immigration Industry",
  //     "Beauty Industry",
  //     "Clothing Industry",
  //     "other Industry",
  //   ],
  //   []
  // );

  // const [selected, setSelected] = useState(industries[0]);

  // useClickOutside(formRef, () => {
  //   if (extend) {
  //     setExtend(false);
  //   }
  // });
  useClickOutside(dropDownRef, () => {
    if (isOpen) {
      setIsOpen(false);
      // setSelected(industries[0]);
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

      <div className="col-span-2 grid grid-cols-12 items-center">
        <div className="col-span-4">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`rounded-lg text-[#333333] focus:outline-none w-full bg-transparent`}
            style={{ width: `${countryCode.length * 1.7}ch` }}
          >
            {countries.map((country, index) => (
              <option key={index} value={country.code} className=" bg-gray-100">
                {`${country.code} ${country.name}`}
              </option>
            ))}
          </select>
        </div>

        <input
          type="number"
          placeholder="Phone Number*"
          className="col-span-8  outline-none border-none w-full h-full py-6 pe-2 text-sm bg-transparent"
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
        <button className="text-center bg-primary w-full h-full rounded-r-full font-bold text-white hover:bg-secondary duration-300 transition-all ease-in-out">
          Book Now
        </button>
      </div>
    </form>
  );
};

export default Form1;
