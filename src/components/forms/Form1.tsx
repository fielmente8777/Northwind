"use client";
import { countries } from "@/data/countryCode";
import useClickOutside from "@/hooks/useClickOutside";
import { getDateInputLimits } from "@/utils/getDateInputLimits";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";

const Form1 = () => {
  // const [extend, setExtend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formRes, setFormRes] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkInOutRef = useRef<HTMLInputElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const { min } = getDateInputLimits({
    showPast: false,
  });

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (userPhone.length !== 10) {
    //   setErrorMessage("Phone number must be exactly 10 digits.");
    //   return;
    // }
    // if (!emailRegex.test(userEmail)) {
    //   setEmailErrorMessage("Please enter a valid email address.");
    //   return;
    // }
    if (formData?.EmailId === "") return;
    try {
      setFormRes(true);

      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "sumittest", // Replace with your actual domain value
          email: formData?.EmailId,
          Name: formData?.fullName,
          Contact: formData?.PhoneNumber, // Combine country code and phone number
          Description: `Check-in ${formData?.checkIn}, Check-out: ${formData?.checkOut},`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.Status) {
        // setFormRes(true);
        // setUserName("");
        // setUserEmail("");
        // setUserMessage("");
        // setUserPhone("");
        // // setCountryCode("+91"); // Reset country code
        // if (setOpenForm) setOpenForm(false);
        // setFormRes(false);
        // router.push("/thank-you");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`rounded-full grid grid-cols-12 bg-bg divide-x divide-form-light  shadow-xl`}
      ref={formRef}
    >
      <div className="col-span-2 h-full flex items-center">
        <input
          type="text"
          placeholder="Full Name*"
          onChange={handleInputChange}
          className="outline-none border-none w-full h-full p-6 bg-transparent barlow text-lg barlow"
        />
      </div>

      <div className="col-span-2 grid grid-cols-12 items-center">
        <div className="col-span-3">
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
          onChange={handleInputChange}
          className="col-span-9 outline-none border-none w-full h-full py-6 pe-2 text-lg barlow bg-transparent"
        />
      </div>

      <div className="col-span-2 h-full flex items-center">
        <input
          type="text"
          placeholder="Email Id*"
          onChange={handleInputChange}
          className="outline-none border-none w-full h-full py-6 px-2 bg-transparent barlow text-lg"
        />
      </div>

      <div className="col-span-2 relative flex items-center">
        <input
          type="date"
          placeholder="Check in"
          name="checkIn"
          min={min}
          ref={checkInRef}
          onChange={handleInputChange}
          className={`outline-none border-none w-full h-full py-6 px-2 bg-transparent pointer-events-auto text-lg barlow opacity-0`}
        />
        <span
          className={`absolute inset-0 flex items-center justify-start px-2 text- cursor-pointer pointer-events-auto barlow text-lg font-normal text-form-light `}
          onClick={() => {
            checkInRef?.current?.showPicker();
          }}
        >
          {formData?.checkIn ? formData?.checkIn : "Check in"}
        </span>
      </div>

      <div className="flex col-span-2 items-center relative">
        <input
          type="date"
          name="checkOut"
          min={min}
          ref={checkInOutRef}
          onChange={handleInputChange}
          className={`outline-none border-none w-full h-full py-6 px-2 bg-transparent pointer-events-auto opacity-0`}
        />
        <span
          className={`absolute inset-0 flex items-center justify-start cursor-pointer pointer-events-auto px-2 barlow font-normal text-form-light barlow text-lg`}
          onClick={() => {
            checkInOutRef?.current?.showPicker();
          }}
        >
          {formData?.checkOut ? formData?.checkOut : "Check Out"}
        </span>
      </div>

      <div className="h-full col-span-2 flex items-center">
        <button className="text-center bg-primary w-full h-full rounded-r-full text-white hover:bg-secondary duration-300 transition-all ease-in-out font-semibold barlow uppercase">
          {formRes ? "Loading...." : "Book Now"}
        </button>
      </div>
    </form>
  );
};

export default Form1;
