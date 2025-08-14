"use client";

import { ImageSources } from "@/assets";
import { useActiveSectionContext } from "@/context/active-section-context";
import useSectionInView from "@/libs/hooks/useActiveSectionInView";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView({
    sectionName: "Home",
  });

  const { setActiveLink, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-100"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={ImageSources.imgProfile}
              alt="Description"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-30 w-30 rounded-full border-[0.35rem] border-white dark:border-gray-800 object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 125,
        }}
      >
        <span className="font-bold">Hello, I&apos;m Duy Tran.</span>
        I&apos;m a <span className="font-bold">Front-End Developer</span> with
        experience in <span className="font-bold">React, TypeScript</span>, and
        modern web technologies. I enjoy crafting{" "}
        <span className="italic">
          responsive, high-performance web applications
        </span>
        with a strong focus on <span className="underline">UI/UX</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 125,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 dark:bg-gray-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:hover:bg-gray-600 active:scale-105 transition"
          onClick={() => {
            setActiveLink("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white dark:bg-gray-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:border-white/20"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          className="bg-white dark:bg-gray-800 p-4 text-gray-700 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-100 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:border-white/20"
          href="https://www.linkedin.com/in/duy-trần-4049212b9"
          target="_blank"
        >
          <BsLinkedin
            color="black"
            className="opacity-70 group-hover:translate-x-1 transition dark:text-gray-200"
          />
        </a>

        <a
          className="bg-white dark:bg-gray-800 p-4 text-gray-700 dark:text-gray-200 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-gray-100 active:scale-105 transition cursor-pointer borderBlack dark:border-white/20"
          href="https://github.com/DuyTM0508"
          target="_blank"
        >
          <FaGithubSquare
            color="black"
            className="opacity-70 group-hover:translate-x-1 transition dark:text-gray-200"
          />
        </a>
      </motion.div>
    </section>
  );
}
