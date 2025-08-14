"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/libs/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  //!State
  const { activeLink, setActiveLink, setTimeOfLastClick } =
    useActiveSectionContext();

  //!Functions

  //!Render
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none 
                    border border-white border-opacity-40 
                    bg-white/50 shadow-lg shadow-black/[0.33] 
                    backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] 
                    sm:w-[36rem] sm:rounded-full
                    dark:border-gray-700 dark:border-opacity-40 
                    dark:bg-gray-800/50 dark:shadow-black/[0.5]"
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-gray-400">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition hover:cursor-pointer dark:hover:text-gray-50`,
                  {
                    "text-gray-950 font-semibold relative dark:text-gray-50":
                      link.name === activeLink,
                    "text-gray-500 dark:text-gray-400": link.name !== activeLink,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveLink(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeLink && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
                    layoutId="active-link"
                    transition={{ type: "spring", stiffness: 300, damping: 40 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;