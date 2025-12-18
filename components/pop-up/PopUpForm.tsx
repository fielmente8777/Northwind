"use client";

import { useWebContext } from "@/contextApi/WebContext";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import Form2 from "../forms/Form2";

const PopUpForm = () => {
  const { isOpenPopup, setIsOpenPopup } = useWebContext();

  useEffect(() => {
    if (isOpenPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenPopup]);

  return (
    <div
      className={`fixed max-md:px-4 inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur transition-all duration-300 ${
        isOpenPopup
          ? "opacity-100 scale-100 visible"
          : "opacity-0 scale-95 invisible"
      }`}
    >
      <div className="relative max-w-[400px] w-full bg-white px-4 pt-12 pb-4 shadow-2xl rounded-2xl">
        <button
          onClick={() => setIsOpenPopup(false)}
          className="absolute top-4 right-4 rounded-full bg-secondary p-2 text-white"
        >
          <MdClose />
        </button>
        {/* <Form2 setOpen={setIsOpenPopup} gridView /> */}
      </div>
    </div>
  );
};

export default PopUpForm;
