"use client";
import { useCallback, useEffect, useRef } from "react";
import { Form } from "../forms";

interface NewsLetterPopUPProps {
  openNewsLetter: boolean;
  setOpenNewsLetter: React.Dispatch<React.SetStateAction<boolean>>;
}
const PopUP: React.FC<NewsLetterPopUPProps> = ({
  openNewsLetter,
  setOpenNewsLetter,
}) => {
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (openNewsLetter) {
      document.body.style.overflow = "hidden";
    }
    intervalIdRef.current = setInterval(() => {
      setOpenNewsLetter(true);
      document.body.style.overflow = "hidden";
    }, 600000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setOpenNewsLetter, openNewsLetter]);

  const closeModal = useCallback(() => {
    setOpenNewsLetter(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setOpenNewsLetter]);

  return (
    <div
      className={`fixed bg-black/50 ${openNewsLetter ? "inset-0 w-full h-full scale-100 opacity-100" : "opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 scale-0"} duration-300 transition-all ease-in-out flex items-center justify-center z-50`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="max-w-96 w-full max-lg:px-4 relative">
        <Form />

        <div
          className="absolute -right-2 -top-2 size-10 bg-white rounded-full flex justify-center items-center font-bold barlow text-lg cursor-pointer"
          onClick={closeModal}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default PopUP;
