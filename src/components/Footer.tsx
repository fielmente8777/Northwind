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
          <div className="flex flex-col gap-[24px] barlow">
            <p className="text-center text-[18px] font-normal leading-[24px]">Location: Mouza Bir Khasra No 464 ,Bir, near Zostel, Baijnath, Himachal Pradesh 176077</p>
            <p className="text-center text-[18px] font-normal leading-[24px]">Call: <Link href={"tel:+918091172065"}>+91 8091172065</Link></p>
            <p className="text-center text-[18px] font-normal leading-[24px]">Email: <Link href={"mailto:northwind0057@gmail.com"}>northwind0057@gmail.com</Link></p>
          </div>
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-[#D4B01C] !py-4 text-[#363636]">
        <div className="flex items-center justify-center">
          <ul className="list-disc flex lg:gap-10 gap-5 max-md:flex-col barlow">
            <li className="text-[18px] font-normal leading-[24px]">© North Wind</li>
            <li className="text-[18px] font-normal leading-[24px]">All Rights Reserved</li>
            <li className="text-[18px] font-normal leading-[24px]">Designed & Developed by <Link href={"https://eazotel.com"} target="blank">Eazotel.com</Link></li>
          </ul>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
