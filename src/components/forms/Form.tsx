"use client";
import { countries } from "@/data/countryCode";
import useClickOutside from "@/hooks/useClickOutside";
import axios from "axios";
import React, { useRef, useState } from "react";

const Form = () => {
  // const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [isOpen1, setIsOpen1] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkInOutRef = useRef<HTMLInputElement | null>(null);
  const dropDownRef3 = useRef<HTMLDivElement | null>(null);
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

  useClickOutside(dropDownRef3, () => isOpen1 && setIsOpen1(false));

  // const [selected, setSelected] = useState(industries[0]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "northwind57",
          // Domain: "testmulti", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: userPhone, // Combine country code and phone number
          Description: userMessage,
          created_from: "website",
          "check_in": `${checkInDate}`,
          "check_out": `${checkOutDate}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setErrorMessage("");
        setEmailErrorMessage("");
        setCheckInDate("");
        setCheckOutDate("");
        // setCountryCode("+91"); // Reset country code
        setFormRes(false);
        window.open("/thank-you", "_blank");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      tag: "input",
      type: "text",
      name: "name",
      placeholder: "Your full name*",
      required: true,
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      },
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      name: "phone",
      placeholder: "Mobile number**",
      required: true,
      content: (
        <div className="flex gap-2 text-base">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={` bg-transparent rounded-lg text-[#333333] focus:outline-none ps-2`}
            style={{ width: `${countryCode.length * 3.9}ch` }}
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-black bg-gray-100"
              >
                {`${country.code} ${country.name}`}
              </option>
            ))}
          </select>

          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Mobile number*"
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent border-l border-light px-2 py-3 placeholder:text-[#4C4C4C] text-black no-spinner focus:outline-none barlow"
          />
        </div>
      ),
    },
    {
      tag: "input",
      type: "email",
      name: "email",
      placeholder: "Email ID*",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
    },
    {
      tag: "div",
      required: true,
      content: (
        <div className="w-full grid grid-cols-2" ref={dropDownRef3}>
          <div className="relative flex items-center">
            <input
              type="date"
              placeholder="Check in"
              ref={checkInRef}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="outline-none border-none w-full h-full px-2 bg-transparent pointer-events-auto opacity-0"
            />
            <span
              className="absolute inset-0 flex items-center justify-start px-3 text-text-light cursor-pointer pointer-events-auto barlow opacity-1"
              onClick={() => {
                checkInRef?.current?.showPicker();
              }}
            >
              {checkInDate ? checkInDate : " Check in"}
            </span>
          </div>

          <div className="flex items-center relative">
            <input
              type="date"
              ref={checkInOutRef}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="outline-none border-none w-full h-full py-4 px-6 bg-transparent pointer-events-auto opacity-0"
            />
            <span
              className="absolute inset-0 flex items-center justify-start text-text-light cursor-pointer pointer-events-auto px-3 barlow"
              onClick={() => {
                checkInOutRef?.current?.showPicker();
              }}
            >
              {checkOutDate ? checkOutDate : "Check out*"}
            </span>
          </div>
        </div>
      ),
    },

    {
      tag: "textarea",
      type: "text",
      name: "",
      placeholder: "Enquiry now to get additional discounts!",
      required: true,
      value: userMessage,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
      },
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full gap-4 bg-secondary max-md:px-4 p-6 max-md:mt-6 text-base rounded-2xl w-full"
      id="contact"
    >
      <h3 className="text-xl lg:text-[2rem]/[2.5rem] font-normal text-white">
        Contact Us Now!
      </h3>

      {formData.map((data, index) => (
        <div key={index} className="flex flex-col gap-1 ">
          <div className="flex gap-2 bg-white rounded-lg">
            {data.tag === "div"
              ? data.content
              : React.createElement(data.tag, {
                  id: data.name,
                  type: data.type,
                  name: data.name,
                  value: data.value,
                  onChange: data.onChange,
                  placeholder: data.placeholder,
                  required: data.required,
                  autoComplete: "off",
                  spellCheck: "false",
                  rows: "3",
                  className:
                    "w-full bg-transparent no-spinner p-3 resize-none placeholder:text-[#4C4C4C] text-black focus:outline-none valid:outline-blue-primary invalid:outline-Saffron-primary barlow",
                })}
          </div>
          {data.name === "phone" && errorMessage && (
            <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
          )}
          {data.name === "email" && emailErrorMessage && (
            <p className="text-sm text-red-500 mt-2">{emailErrorMessage}</p>
          )}
        </div>
      ))}

      <button
        className={`raleway  bg-primary text-white hover:bg-secondary/80 flex justify-center items-center gap-1 rounded-lg py-3 px- font-semibold `}
      >
        {formRes ? "Loading...." : "BOOK YOUR STAY"}
      </button>
    </form>
  );
};

export default Form;
