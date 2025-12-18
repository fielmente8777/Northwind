"use client";
import { createContext, useContext, useState } from "react";

interface IWebContextProps {
  isOpenPopup: boolean;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const WebContext = createContext<IWebContextProps | undefined>(undefined);

export const WebProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <WebContext.Provider value={{ isOpenPopup, setIsOpenPopup }}>
      {children}
    </WebContext.Provider>
  );
};

// ✅ Custom hook (recommended)
export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context) throw new Error("useWebContext must be used within WebProvider");
  return context;
};
