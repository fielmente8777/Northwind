"use client";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import { contact, countries } from "@/utils/constent";
import { ArrowUpIcons, FillMail, FillPhoneIcon, UserIcon } from "@/utils/icons";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface formProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  gridView?: boolean;
  rounded?: boolean;
}

const Form1: React.FC<formProps> = ({
  setOpen,
  gridView = false,
  rounded = false,
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91");
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
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const [startDate, endDate] = dateRange;

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

  const handleDateChange = (update: [Date | null, Date | null]) => {
    setDateRange(update);

    const [start, end] = update;
    const checkInString = start ? start.toISOString().split("T")[0] : "";
    const checkOutString = end ? end.toISOString().split("T")[0] : "";

    setFormData((prev) => ({
      ...prev,
      checkIn: checkInString,
      checkOut: checkOutString,
    }));

    // Clear date errors when date is selected
    if (error.checkIn || error.checkOut) {
      setError((prev) => ({ ...prev, checkIn: "", checkOut: "" }));
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
      newErrors.PhoneNumber = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.checkIn.trim()) {
      newErrors.checkIn = "Check-in date is required";
      isValid = false;
    }

    if (!formData.checkOut.trim()) {
      newErrors.checkOut = "Check-out date is required";
      isValid = false;
    } else if (startDate && endDate && startDate > endDate) {
      newErrors.checkOut = "Check-out must be after check-in";
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
          Domain: contact.formDomain,
          email: formData?.EmailId,
          Name: formData?.fullName,
          Contact: formData?.PhoneNumber,
          Description: `Check-in ${formData?.checkIn}, Check-out: ${formData?.checkOut},`,
          check_in: `${formData?.checkIn}`,
          check_out: `${formData?.checkOut}`,
          created_from: "website",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        // Reset form completely
        setFormData({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
        });
        setDateRange([null, null]);
        setError({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
        });

        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);

        if (setOpen) {
          setOpen(false);
        }
        window.open("/thank-you/", "_blank");
      } else {
        alert(data.message || "Something went wrong!");
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
      className={`grid ${
        !gridView ? "md:grid-cols-10" : "gap-2 bg-transparent"
      } grid-cols-2 max-md:gap-2  md:divide-x max-md:divide-y divide-[#E0E0E0] barlow`}
      ref={formRef}
    >
      {/* Full Name Field */}
      <div
        className={`col-span-2 relative h-full flex flex-col px-4 ${
          rounded && "lg:rounded-l-2xl"
        } bg-white  `}
      >
        <label
          htmlFor="fullName"
          className="text-sm max-md:py-3 text-dark uppercase"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Type Here ..."
          onChange={handleInputChange}
          value={formData.fullName}
          className="outline-none  w-full h-full bg-transparent text-base text-dark uppercase placeholder:text-extra-light"
        />
        <span className="md:right-2 right-6 absolute bottom-2">
          <UserIcon />
        </span>
        {error.fullName && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Field */}
      <div className={`col-span-2 w-full flex flex-col px-4 bg-white`}>
        <label
          htmlFor="PhoneNumber"
          className="text-sm max-md:py-3 text-dark uppercase"
        >
          Phone Number
        </label>
        <div className="flex relative items-center w-full h-full">
          <select
            aria-label="Country Code"
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`text-dark uppercase placeholder:text-extra-light focus:outline-none w-full bg-transparent`}
            style={{ width: `${countryCode.length * 2}ch` }}
          >
            {countries.map((country, index) => (
              <option
                key={index + 101}
                value={country.code}
                aria-label={country.name}
                className="bg-gray-100"
              >
                {`${country.code}`}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="PhoneNumber"
            aria-label="Phone Number*"
            placeholder="Type Here ..."
            onChange={handleInputChange}
            value={formData.PhoneNumber}
            className=" ps-1 outline-none no-spinner appearance-auto  w-full h-full text-base text-dark placeholder:text-extra-light bg-transparent"
          />
          <span className="absolute md:-right-2 right-2 bottom-2">
            <FillPhoneIcon />
          </span>
        </div>
        {error.PhoneNumber && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.PhoneNumber}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className={`col-span-2 relative h-full px-4 flex flex-col bg-white`}>
        <label
          htmlFor="EmailId"
          className="text-sm max-md:py-3 text-dark uppercase"
        >
          Email Id
        </label>
        <input
          type="text"
          name="EmailId"
          aria-label="Email Id*"
          placeholder="Type Here ..."
          onChange={handleInputChange}
          value={formData.EmailId}
          className="outline-none  w-full h-full bg-transparent text-base text-dark placeholder:text-extra-light"
        />
        <span className="absolute md:right-2 right-6 bottom-2">
          <FillMail />
        </span>
        {error.EmailId && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.EmailId}
          </span>
        )}
      </div>

      {/* Date Picker Field */}
      <div className={`col-span-2 flex flex-col px-4 bg-white relative`}>
        <label
          htmlFor="checkIn"
          className="text-sm max-md:py-3 text-dark uppercase"
        >
          Check In & Check Out
        </label>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          selectsStart
          selectsRange
          startDate={startDate}
          endDate={endDate}
          minDate={new Date(min || Date.now())}
          placeholderText="Select Date"
          className="outline-none  w-full h-full bg-transparent text-base text-dark placeholder:text-extra-light"
          wrapperClassName="w-full h-full !flex items-center"
        />
        <div className="absolute md:right-2 right-6 bottom-3 pointer-events-none">
          <CalenderIcon />
        </div>
        {(error.checkIn || error.checkOut) && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.checkIn || error.checkOut}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div
        className={`h-full col-span-2 max-md:col-span-2 md:px-2 ${
          rounded && "lg:rounded-r-2xl overflow-hidden"
        } ${gridView && "col-span-2"} flex items-center bg-white`}
      >
        <button
          type="submit"
          aria-label="Book Now"
          className="text-center bg-dark py-4 w-full h-full text-white  hover:bg-primary/95 duration-300 transition-all ease-in-out capitalize"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            <span className="flex items-center justify-center gap-2">
              Book Now
              <span>
                <ArrowUpIcons />
              </span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form1;

export const CalenderIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 19C2 20.7 3.3 22 5 22H19C20.7 22 22 20.7 22 19V11H2V19ZM19 4H17V3C17 2.4 16.6 2 16 2C15.4 2 15 2.4 15 3V4H9V3C9 2.4 8.6 2 8 2C7.4 2 7 2.4 7 3V4H5C3.3 4 2 5.3 2 7V9H22V7C22 5.3 20.7 4 19 4Z"
      fill="#3C3934"
    />
  </svg>
);
