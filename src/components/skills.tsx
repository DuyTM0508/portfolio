"use client";

import { skillsData } from "@/libs/data";
import useSectionInView from "@/libs/hooks/useActiveSectionInView";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({
    sectionName: "Skills",
  });

  return (
    <section
      className="mb-28 max-w-[53rem] text-center leading-7 sm:mb-40 scroll-mt-28"
      ref={ref}
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-gray-200">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white dark:bg-gray-800 border border-black/[0.1] dark:border-white/[0.2] rounded-lg px-5 py-3"
            variants={fadeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}