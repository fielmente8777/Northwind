"use client";
import React, { useCallback, useEffect, useRef } from "react";
import PopUP from "../PopUp/PopUp";
import { usePathname } from "next/navigation";

const GlobalPopup = () => {
  const patheName = usePathname();
  const [openNewsLetter, setOpenNewsLetter] = React.useState(false);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  // Set interval only once on mount
  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setOpenNewsLetter(true);
    }, 60000);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  const closeModal = useCallback(() => {
    setOpenNewsLetter(false);
    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setOpenNewsLetter]);

  return (
    <>
      {patheName !== "/thank-you" && (
        <PopUP openNewsLetter={openNewsLetter} setOpenNewsLetter={closeModal} />
      )}
    </>
  );
};

export default GlobalPopup;
