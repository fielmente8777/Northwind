"use client"

import Image from "next/image";
import SectionWithContainer from "../SectionComponents/SectionWithContainer";
import Link from "next/link";

const Navbar: React.FC = () => {

  return (
    <SectionWithContainer sectionClassName="bg-[#D4B01C] !py-[16px]">
      <div className="flex place-content-between items-center">
        <div className="max-w-[200px] ">
          <Image src="/logo.png" alt="logo" height={48} width={258} />
        </div>
        <Link href={"https://wa.me/+918091172065?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates."} target="_blank" rel="noreferrer" >
          <p className="bg-white text-[#262626] font-semibold barlow text-[18px] leading-[24px] px-[24px] py-[16px] max-md:text-[16px] max-md:px-[16px] max-md:py-[9px]">
            BOOK NOW
          </p>
        </Link>
      </div>
    </SectionWithContainer>
  );
};

export default Navbar;
