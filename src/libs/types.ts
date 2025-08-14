import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeLink: SectionName;
  setActiveLink: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
