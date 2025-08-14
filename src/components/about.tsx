"use client";

import useSectionInView from "@/libs/hooks/useActiveSectionInView";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView({
    sectionName: "About",
  });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28 text-gray-950 dark:text-gray-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-gray-700 dark:text-gray-400">
        I&apos;m{" "}
        <span className="font-medium text-gray-950 dark:text-gray-300">
          Duy Tran
        </span>
        , a passionate{" "}
        <span className="font-medium text-gray-950 dark:text-gray-300">
          Front-End Developer {" "}
        </span>
        currently pursuing a degree in{" "}
        <span className="font-medium text-gray-950 dark:text-gray-300">
          Software Engineering{" "}
        </span>
        at FPT University. With hands-on experience from internships and
        multiple personal projects, I specialize in building{" "}
        <span className="italic">
          responsive, high-performance web applications
        </span>
        using modern technologies like{" "}
        <span className="font-medium text-gray-950 dark:text-gray-300">
          React, Next.js, TypeScript, and Tailwind CSS
        </span>
        .
      </p>

      <p className="mb-3 text-gray-700 dark:text-gray-400">
        I&apos;ve worked on diverse projects—from e-commerce platforms and
        blogging systems to AI-powered online examination tools—focusing on{" "}
        <span className="underline">
          UI/UX design, API integration, and performance optimization
        </span>
        . I also have experience with{" "}
        <span className="font-medium text-gray-950 dark:text-gray-300">
          RESTful APIs, Azure Blob, and PayOS integration
        </span>
        . I enjoy turning complex problems into elegant, user-friendly
        solutions.
      </p>

      <p className="text-gray-700 dark:text-gray-400">
        <span className="italic">When I&apos;m not coding</span>, I like
        exploring new technologies, learning about{" "}
        <span className="font-medium text-gray-950 dark:text-gray-300">
          system design and modern frameworks
        </span>
        , watching tech talks, and occasionally diving into gaming or movies.
        I’m always eager to{" "}
        <span className="font-medium text-gray-950 dark:text-gray-300">
          learn, adapt, and create
        </span>
        better digital experiences.
      </p>
    </motion.section>
  );
}
