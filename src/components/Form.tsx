"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { countries } from "@/data/countryCode";
import OTPPopup from "./OtpPopup";
import axios from "axios";

const ContactForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
    userPhone: "",
    countryCode: "+91",
    checkIn: "",
    checkOut: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "userPhone" ? value.replace(/\D/g, "") : value,
    }));

    if (name === "userPhone" && value.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid number");
    } else {
      setErrorMessage("");
    }

    if (name === "userEmail") {
      setEmailErrorMessage(
        !emailRegex.test(value) ? "Please enter a valid email address" : ""
      );
    }
  };

  const SendOtpFunction = async (number: string) => {
    try {
      const response = await fetch("https://nexon.eazotel.com/sports/signupenduser", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ number }),
      });
      const json = await response.json();
      if (json.Status === true) {
        setOtpSent(true);
      } else {
        alert("Some problem occurred while sending OTP.");
      }
    } catch (err) {
      console.error("Send OTP Error:", err);
    }
  };

  const VerifyPhoneNumber = async (number: string) => {
    try {
      const response = await fetch(`https://nexon.eazotel.com/sports/checkenduser/number/${number}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (json.Status === true) {
        await submit();
      } else {
        SendOtpFunction(number);
      }
    } catch (err) {
      console.error("Verify Phone Error:", err);
    }
  };

  const VerifyOtpFunction = async (otp: string) => {
    try {
      const response = await fetch("https://nexon.eazotel.com/sports/signinenduser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number: formData.userPhone, otp }),
      });
      const json = await response.json();
      if (json.Status === true) {
        setOtpSent(false);
        submit();
      } else {
        alert("Wrong OTP");
      }
    } catch (err) {
      console.error("OTP Verify Error:", err);
    }
  };

  const submit = async () => {
    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "smartspendhub",
          email: formData.userEmail,
          Name: formData.userName,
          Contact: formData.userPhone,
          Description: `Check-in: ${formData.checkIn}, Check-out: ${formData.checkOut}`,
          Remark: formData.userMessage,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data.Status) {
        setFormRes(false);
        alert("Form submitted successfully!");
        router.push("/thank-you/");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setFormRes(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (formData.userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      setFormRes(false);
      return;
    }

    if (!emailRegex.test(formData.userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      setFormRes(false);
      return;
    }

    VerifyPhoneNumber(formData.userPhone);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black rounded-md w-full max-w-xl mx-auto text-white flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold">Contact Us Now!</h2>

      <input
        name="userName"
        placeholder="Your full name*"
        value={formData.userName}
        onChange={handleChange}
        required
        className="w-full bg-white text-black px-4 py-3 rounded-md outline-none"
      />

      <div className="flex gap-2">
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          required
          className="bg-white text-black px-3 py-3 rounded-md"
        >
          {countries.map((c, i) => (
            <option key={i} value={c.code}>
              {c.code}
            </option>
          ))}
        </select>
        <input
          name="userPhone"
          placeholder="Mobile number*"
          value={formData.userPhone}
          onChange={handleChange}
          required
          maxLength={10}
          className="flex-1 bg-white text-black px-4 py-3 rounded-md outline-none"
        />
      </div>
      {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}

      <input
        name="userEmail"
        placeholder="Email Id*"
        value={formData.userEmail}
        onChange={handleChange}
        required
        className="w-full bg-white text-black px-4 py-3 rounded-md outline-none"
      />
      {emailErrorMessage && <p className="text-red-400 text-sm">{emailErrorMessage}</p>}

      <div className="flex flex-col md:flex-row gap-2">
        <input
          name="checkIn"
          type="date"
          value={formData.checkIn}
          onChange={handleChange}
          required
          className="w-full bg-white text-black px-4 py-3 rounded-md outline-none"
        />
        <input
          name="checkOut"
          type="date"
          value={formData.checkOut}
          onChange={handleChange}
          required
          className="w-full bg-white text-black px-4 py-3 rounded-md outline-none"
        />
      </div>

      <textarea
        name="userMessage"
        placeholder="Enquiry now to get additional discounts!"
        rows={3}
        value={formData.userMessage}
        onChange={handleChange}
        className="w-full bg-white text-black px-4 py-3 rounded-md outline-none resize-none"
      />

      <button
        type="submit"
        className="bg-[#D4AF37] text-black font-semibold py-3 rounded-md hover:bg-[#caa732] transition"
      >
        {formRes ? "Submitting..." : "BOOK YOUR STAY"}
      </button>

      <OTPPopup
        isOpen={otpSent}
        onClose={() => setOtpSent(false)}
        onSubmit={(otp) => VerifyOtpFunction(otp)}
      />
    </form>
  );
};

export default ContactForm;
