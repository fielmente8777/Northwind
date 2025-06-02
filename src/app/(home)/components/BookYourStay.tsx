"use client";
import { SectionWithContainer } from "@/components";
import PopUP from "@/components/PopUp/PopUp";
import React, { useState } from "react";

const BookYourStay = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  return (
    <SectionWithContainer sectionClassName="md:!py-20">
      <div className="space-y-4 max-w-[1076px] mx-auto">
        <h2 className="text-center font-medium barlow text-sm text-text-dark">
          WELCOME TO ROMANCY
        </h2>

        <h3 className="text-center md:text-5xl text-2xl text-text-dark">
          At Northwind
        </h3>

        <p className="text-text-light text-center barlow">
          We offer a unique blend of luxury and adventure in the heart of Bir,
          Himachal Pradesh. Our glamping campsite provides a perfect escape from
          the hustle and bustle of daily life, allowing you to immerse yourself
          in the serene beauty of the Himalayas. Wake up to breathtaking views
          of the mighty mountains, enjoy trekking and paragliding, and unwind
          with live music sessions around a bonfire under the starlit sky.
          Whether you seek adventure or tranquility, Northwind guarantees an
          unforgettable experience
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => setOpenPopUp(true)}
            className="bg-primary hover:bg-secondary mx-auto duration-300 transition-all ease-in-out px-4 py-2 text-sm text-white barlow rounded-md "
          >
            BOOK YOUR STAY
          </button>
        </div>

        <PopUP openNewsLetter={openPopUp} setOpenNewsLetter={setOpenPopUp} />
      </div>
    </SectionWithContainer>
  );
};

export default BookYourStay;
