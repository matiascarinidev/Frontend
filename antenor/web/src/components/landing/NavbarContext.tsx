"use client";
import { createContext, useContext, useState, useMemo } from "react";

type NavbarContextType = {
  scrollProgress: number;
  setScrollProgress: (value: number) => void;
};

const NavbarContext = createContext<NavbarContextType>({
  scrollProgress: 0,
  setScrollProgress: () => {},
});

export const useNavbarContext = () => useContext(NavbarContext);

export function NavbarProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const contextValue = useMemo(
    () => ({ scrollProgress, setScrollProgress }),
    [scrollProgress]
  );

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
}
