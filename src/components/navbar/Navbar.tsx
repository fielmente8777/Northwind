"use client";

import { OutlinePhone } from "@/data/icons";
import { whatsAppNumber } from "@/data/pagedata";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PopUP from "../PopUp/PopUp";
import { Container } from "../sectionComponents";

const Navbar = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <header className="max_screen bg-primary">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="">
            <Link
              href={"/"}
              className="flex relative md:h-[5rem] h-[2.5rem] md:aspect-[4/1.8] aspect-[3/1.5]"
            >
              <Image
                src="/logo.png"
                alt="one shot logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <Link
            href={`https://wa.me/+91${whatsAppNumber}?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.`}
            target="_blank"

            // onclick={() => {
            //   setOpenPopUp(true);
            // }}
          >
            {/* <span className="">
              <OutlinePhone className="fill-current stroke-currentColor md:w-7 aspect-square" />
            </span> */}
            <span className="md:flex hidden md:px-4 md:py-2 md:hover:box-shadow items-center gap-1 md:border border-primary bg-white text-text-dark rounded-lg hover:bg-secondary hover:text-white duration-300 transition-all ease-in-out barlow font-semibold text-lg uppercase">
              Book Now
            </span>
            <span className="md:hidden block">
              <OutlinePhone />
            </span>
          </Link>
        </nav>
        <PopUP openNewsLetter={openPopUp} setOpenNewsLetter={setOpenPopUp} />
      </Container>
    </header>
  );
};

export default Navbar;
