import { links } from "./data";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

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

export interface Link {
  name: string;
  hash: string;
}

export interface Experience {
  title: string;
  location: string;
  description: string;
  icon: IconType;
  date: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
}

export type Skill = string;
