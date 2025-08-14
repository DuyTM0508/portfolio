"use client";

import { projectsData } from "@/libs/data";
import useSectionInView from "@/libs/hooks/useActiveSectionInView";
import React from "react";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView({
    sectionName: "Projects",
    threshold: 0.5,
  });

  return (
    <section className="scroll-mt-28 mb-28" id="projects" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
