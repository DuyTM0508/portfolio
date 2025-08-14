"use client";

import {
  ActiveSectionContextProps,
  ActiveSectionContextType,
  SectionName,
} from "@/libs/types";
import React, { useContext, useState } from "react";

export const ActiveSectionContext = React.createContext<
  ActiveSectionContextType | undefined
>(undefined);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProps) {
  const [activeLink, setActiveLink] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeLink, setActiveLink, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === undefined) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
