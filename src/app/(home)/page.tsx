"use client";
import { Banner, Form, Section, SectionWithContainer } from "@/components";
import { homePageData } from "@/data/pagedata";
import Image from "next/image";
import CheckInOut from "./components/Check-in-out";
import ExploreGlampStay from "./components/ExploreGlampStay";
import Testimonial from "./components/Testimonial";
import ThingsToDo from "./components/ThingsToDo";
import BookYourStay from "./components/BookYourStay";

export default function Home() {
  return (
    <main>
      {/* home banner section  */}
      <Banner {...homePageData.bannnerData} />

      {/* welcome to romancy at northwind section  */}
      <BookYourStay />

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
