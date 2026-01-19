"use client";

import { projectsData } from "@/libs/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectDataProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectDataProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section
        className="bg-gray-100 dark:bg-gray-800 max-w-[42rem] border border-black/5 dark:border-white/20 overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition group-even:pl-8"
      >
        <div
          className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-1/2 flex flex-col h-full pb-8 group-even:ml-[18rem]"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-black/[0.7] dark:bg-white/[0.1] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-gray-200 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={452}
            height={300}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:-translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:-right-[initial] group-even:-left-40"
          />
        )}
      </section>
    </motion.div>
  );
}