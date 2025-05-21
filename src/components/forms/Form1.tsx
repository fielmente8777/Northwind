"use client";
import { countries } from "@/data/countryCode";
import { getDateInputLimits } from "@/utils/getDateInputLimits";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";

const Form1 = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkInOutRef = useRef<HTMLInputElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const { min } = getDateInputLimits({
    showPast: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
  });

  const [error, setError] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      checkIn: "",
      checkOut: "",
      fullName: "",
      PhoneNumber: "",
      EmailId: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    if (!formData.EmailId.trim()) {
      newErrors.EmailId = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.EmailId)) {
      newErrors.EmailId = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber =
        "phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.checkIn.trim()) {
      newErrors.checkIn = "check-in date is required";
      isValid = false;
    }

    if (!formData.checkOut.trim()) {
      newErrors.checkOut = "check-out date is required";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "northwind57", // Replace with your actual domain value
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
        setFormData({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
        });
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        setFormData({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
        });
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`rounded-full grid grid-cols-12 bg-bg divide-x divide-form-light  shadow-xl`}
      ref={formRef}
    >
      <div className="col-span-2 h-full flex flex-col items-center">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
          onChange={handleInputChange}
          className="outline-none border-none w-full h-full p-6 bg-transparent barlow text-lg barlow"
        />
        {error.fullName && (
          <span className="text-red-500 text-[0.5rem">{error.fullName}</span>
        )}
      </div>

      <div className="col-span-2 w-full flex flex-col items-center ">
        <div className="grid grid-cols-12 items-center py-7 ps-1">
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
                <option
                  key={index}
                  value={country.code}
                  className=" bg-gray-100"
                >
                  {`${country.code} ${country.name}`}
                </option>
              ))}
            </select>
          </div>

          <input
            type="number"
            name="PhoneNumber"
            placeholder="Phone Number*"
            onChange={handleInputChange}
            className="col-span-9 ps-1 outline-none border-none w-full h-full  text-lg barlow bg-transparent"
          />
        </div>
        {error.PhoneNumber && (
          <span className="text-red-500 text-xs">{error.PhoneNumber}</span>
        )}
      </div>

      <div className="col-span-2 h-full flex flex-col items-center">
        <input
          type="text"
          name="EmailId"
          placeholder="Email Id*"
          onChange={handleInputChange}
          className="outline-none border-none w-full h-full py-6 px-2 bg-transparent barlow text-lg"
        />
        {error.EmailId && (
          <span className="text-red-500 text-xs">{error.EmailId}</span>
        )}
      </div>

      <div className="col-span-2 relative flex flex-col items-center">
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
        {error.checkIn && (
          <span className="text-red-500 text-xs">{error.checkIn}</span>
        )}
      </div>

      <div className="flex flex-col col-span-2 items-center relative">
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
        {error.checkOut && (
          <span className="text-red-500 text-xs">{error.checkOut}</span>
        )}
      </div>

      <div className="h-full col-span-2 flex items-center">
        <button className="text-center bg-primary w-full h-full rounded-r-full text-white hover:bg-secondary duration-300 transition-all ease-in-out font-semibold barlow uppercase">
          {isSubmitting ? (
            <span className="border-t-2 border-primary w-6 h-6 rounded-full animate-spin " />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            "Book Now"
          )}
        </button>
      </div>
    </form>
  );
};

export default Form1;
