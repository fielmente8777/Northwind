"use client";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {

  return (
    <footer className="max-screen w-full">
      <SectionWithContainer sectionClassName="bg-[#1B1B1B] text-[#FFFFFF]">
        <div className="flex flex-col gap-[40px] items-center">
          <Image src={"/logo.png"} alt="logo" height={48} width={258} className="mx-auto" />
          <div className="flex flex-col justify-center items-center gap-[24px] barlow">
            <p className="text-center">Location: Mouza Bir Khasra No 464 ,Bir, near Zostel, Baijnath, Himachal Pradesh 176077</p>
            <p className="">Call: <Link href={"tel:+918091172065"}>+91 8091172065</Link></p>
            <p className="">Email: <Link href={"mailto:northwind0057@gmail.com"}>northwind0057@gmail.com</Link></p>
          </div>
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-[#D4B01C] !py-4 text-[#363636]">
        <div className="flex items-center justify-center">
          <div className="flex max-md:flex-wrap justify-center gap-3 md:flex-row md:gap-2 items-center barlow">
            <span className="flex items-center gap-1"><p className="text-2xl">©</p> North Wind</span>

            <span className="">• {" "} All Rights Reserved</span>

            <span className="">• {" "} Designed & Developed by <Link href={"https://eazotel.com"} target="blank">Eazotel.com</Link></span>
          </div>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
