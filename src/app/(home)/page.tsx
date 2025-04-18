"use client";

import { Banner, Form, Section, SectionWithContainer } from "@/components";
import PopUP from "@/components/PopUp/PopUp";
import { homePageData } from "@/data/pagedata";
import Image from "next/image";
import { useState } from "react";
import CheckInOut from "./components/Check-in-out";
import ExploreGlampStay from "./components/ExploreGlampStay";
import Testimonial from "./components/Testimonial";
import ThingsToDo from "./components/ThingsToDo";

export default function Home() {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <main>
      {/* home banner section  */}
      <Banner {...homePageData.bannnerData} />

      {/* welcome to romancy at northwind section  */}
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
            Himachal Pradesh. Our glamping campsite provides a perfect escape
            from the hustle and bustle of daily life, allowing you to immerse
            yourself in the serene beauty of the Himalayas. Wake up to
            breathtaking views of the mighty mountains, enjoy trekking and
            paragliding, and unwind with live music sessions around a bonfire
            under the starlit sky. Whether you seek adventure or tranquility,
            Northwind guarantees an unforgettable experience
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

      {/* explore glamp stay section  */}
      <ExploreGlampStay />

      {/* things to do section  */}
      <ThingsToDo />

      {/* big banner  */}
      <Section className="!py-0 relative">
        <div className="w-full relative aspect-[5/3]">
          <Image
            src={"/Northwind/big-camp.png"}
            fill
            className="object-cover"
            alt="big-camp-image"
          />
        </div>

        <div className="hidden md:block max-w-[1100px] w-full absolute -bottom-8 left-1/2 -translate-x-1/2 px-2">
          <CheckInOut />
        </div>

        <SectionWithContainer sectionClassName="md:hidden block">
          <Form />
        </SectionWithContainer>
      </Section>

      {/* testimonial section  */}
      <Testimonial />
    </main>
  );
}
