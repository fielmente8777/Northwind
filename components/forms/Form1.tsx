"use client";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import { contact, countries } from "@/utils/constent";
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
        window.open("/thank-you", "_blank");
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
      } grid-cols-2 max-md:gap-2  divide-x divide-[#E0E0E0] barlow uppercase`}
      ref={formRef}
    >
      {/* Full Name Field */}
      <div
        className={`col-span-2 h-full flex flex-col px-4 ${
          rounded && "lg:rounded-l-2xl"
        } bg-[#fff]  `}
      >
        <label
          htmlFor="fullName"
          className="text-sm max-md:py-3 text-[#343434]"
        >
          Full Name*
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Type Here ..."
          onChange={handleInputChange}
          value={formData.fullName}
          className="outline-none max-md:border-b-[.5px] w-full h-full bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.fullName && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Field */}
      <div className={`col-span-2 w-full flex flex-col px-4 bg-[#fff]`}>
        <label
          htmlFor="PhoneNumber"
          className="text-sm max-md:py-3 text-[#343434]"
        >
          Phone Number*
        </label>
        <div className="flex items-center w-full h-full max-md:border-b-[.5px]">
          <select
            aria-label="Country Code"
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`text-[#343434] placeholder:text-[#343434] focus:outline-none w-full bg-transparent`}
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
            className=" ps-1 outline-none no-spinner appearance-auto  w-full h-full text-base text-[#343434] placeholder:text-[#343434] bg-transparent"
          />
        </div>
        {error.PhoneNumber && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.PhoneNumber}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className={`col-span-2 h-full px-4 flex flex-col bg-[#fff]`}>
        <label htmlFor="EmailId" className="text-sm max-md:py-3 text-[#343434]">
          Email Id*
        </label>
        <input
          type="text"
          name="EmailId"
          aria-label="Email Id*"
          placeholder="Type Here ..."
          onChange={handleInputChange}
          value={formData.EmailId}
          className="outline-none max-md:border-b-[.5px] w-full h-full bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.EmailId && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.EmailId}
          </span>
        )}
      </div>

      {/* Date Picker Field */}
      <div className={`col-span-2 flex flex-col px-4 bg-[#fff] relative`}>
        <label htmlFor="checkIn" className="text-sm max-md:py-3 text-[#343434]">
          Check In & Check Out*
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
          className="outline-none max-md:border-b-[.5px] w-full h-full bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
          wrapperClassName="w-full h-full !flex items-center"
        />
        <div className="absolute md:right-2 right-6 md:top-1/2 top-[3.6rem] md:-translate-y-1/2 transform pointer-events-none">
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
        } ${gridView && "col-span-2"} flex items-center bg-[#fff]`}
      >
        <button
          type="submit"
          aria-label="Book Now"
          className="text-center bg-primary py-4 w-full h-full text-white md:rounded-full hover:bg-primary duration-300 transition-all ease-in-out uppercase"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
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

export const CalenderIcon = () => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.1155 21C5.65517 21 5.27083 20.8458 4.9625 20.5375C4.65417 20.2292 4.5 19.8448 4.5 19.3845V6.6155C4.5 6.15516 4.65417 5.77083 4.9625 5.4625C5.27083 5.15417 5.65517 5 6.1155 5H7.8845V2.76925H8.9615V5H16.1155V2.76925H17.1155V5H18.8845C19.3448 5 19.7292 5.15417 20.0375 5.4625C20.3458 5.77083 20.5 6.15516 20.5 6.6155V19.3845C20.5 19.8448 20.3458 20.2292 20.0375 20.5375C19.7292 20.8458 19.3448 21 18.8845 21H6.1155ZM6.1155 20H18.8845C19.0385 20 19.1796 19.9359 19.3077 19.8077C19.4359 19.6796 19.5 19.5385 19.5 19.3845V10.6155H5.5V19.3845C5.5 19.5385 5.56408 19.6796 5.69225 19.8077C5.82042 19.9359 5.9615 20 6.1155 20ZM5.5 9.61525H19.5V6.6155C19.5 6.4615 19.4359 6.32042 19.3077 6.19225C19.1796 6.06408 19.0385 6 18.8845 6H6.1155C5.9615 6 5.82042 6.06408 5.69225 6.19225C5.56408 6.32042 5.5 6.4615 5.5 6.6155V9.61525ZM12.5 14.1537C12.2937 14.1537 12.1138 14.0772 11.9605 13.924C11.8073 13.7708 11.7308 13.591 11.7308 13.3845C11.7308 13.1782 11.8073 12.9984 11.9605 12.8452C12.1138 12.6921 12.2937 12.6155 12.5 12.6155C12.7063 12.6155 12.8862 12.6921 13.0395 12.8452C13.1927 12.9984 13.2692 13.1782 13.2692 13.3845C13.2692 13.591 13.1927 13.7708 13.0395 13.924C12.8862 14.0772 12.7063 14.1537 12.5 14.1537ZM8.5 14.1537C8.29367 14.1537 8.11383 14.0772 7.9605 13.924C7.80733 13.7708 7.73075 13.591 7.73075 13.3845C7.73075 13.1782 7.80733 12.9984 7.9605 12.8452C8.11383 12.6921 8.29367 12.6155 8.5 12.6155C8.70633 12.6155 8.88617 12.6921 9.0395 12.8452C9.19267 12.9984 9.26925 13.1782 9.26925 13.3845C9.26925 13.591 9.19267 13.7708 9.0395 13.924C8.88617 14.0772 8.70633 14.1537 8.5 14.1537ZM16.5 14.1537C16.2937 14.1537 16.1138 14.0772 15.9605 13.924C15.8073 13.7708 15.7308 13.591 15.7308 13.3845C15.7308 13.1782 15.8073 12.9984 15.9605 12.8452C16.1138 12.6921 16.2937 12.6155 16.5 12.6155C16.7063 12.6155 16.8862 12.6921 17.0395 12.8452C17.1927 12.9984 17.2693 13.1782 17.2693 13.3845C17.2693 13.591 17.1927 13.7708 17.0395 13.924C16.8862 14.0772 16.7063 14.1537 16.5 14.1537ZM12.5 18C12.2937 18 12.1138 17.9234 11.9605 17.7702C11.8073 17.6171 11.7308 17.4372 11.7308 17.2307C11.7308 17.0244 11.8073 16.8446 11.9605 16.6912C12.1138 16.5381 12.2937 16.4615 12.5 16.4615C12.7063 16.4615 12.8862 16.5381 13.0395 16.6912C13.1927 16.8446 13.2692 17.0244 13.2692 17.2307C13.2692 17.4372 13.1927 17.6171 13.0395 17.7702C12.8862 17.9234 12.7063 18 12.5 18ZM8.5 18C8.29367 18 8.11383 17.9234 7.9605 17.7702C7.80733 17.6171 7.73075 17.4372 7.73075 17.2307C7.73075 17.0244 7.80733 16.8446 7.9605 16.6912C8.11383 16.5381 8.29367 16.4615 8.5 16.4615C8.70633 16.4615 8.88617 16.5381 9.0395 16.6912C9.19267 16.8446 9.26925 17.0244 9.26925 17.2307C9.26925 17.4372 9.19267 17.6171 9.0395 17.7702C8.88617 17.9234 8.70633 18 8.5 18ZM16.5 18C16.2937 18 16.1138 17.9234 15.9605 17.7702C15.8073 17.6171 15.7308 17.4372 15.7308 17.2307C15.7308 17.0244 15.8073 16.8446 15.9605 16.6912C16.1138 16.5381 16.2937 16.4615 16.5 16.4615C16.7063 16.4615 16.8862 16.5381 17.0395 16.6912C17.1927 16.8446 17.2693 17.0244 17.2693 17.2307C17.2693 17.4372 17.1927 17.6171 17.0395 17.7702C16.8862 17.9234 16.7063 18 16.5 18Z"
      fill="#232323"
    />
  </svg>
);
