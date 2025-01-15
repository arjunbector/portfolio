"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type NavbarContextType = {
  changeColor: string;
  setChangeColor: (value: string) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [changeColor, setChangeColor] = useState("light");

  return (
    <NavbarContext.Provider value={{ changeColor, setChangeColor }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}
