"use client";

import React from "react";
import SectionHeading from "./section-heading";
import useSectionInView from "@/libs/hooks/useActiveSectionInView";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/libs/data";

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: "Experience",
  });

  return (
    <section ref={ref} id="experience" className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="#e5e7eb" className="dark:line-dark">
        {experiencesData.map((data) => (
          <React.Fragment key={`${data.title}-${data.date}`}>
            <VerticalTimelineElement
              icon={<data.icon />}
              contentStyle={{
                background: "#f3f4f6",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: "#1f2937",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={data.date}
              dateClassName="text-gray-700 dark:text-gray-200"
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="vertical-timeline-element-title font-semibold capitalize text-gray-900 dark:text-gray-100">
                {data.title}
              </h3>
              <p className="vertical-timeline-element-subtitle font-normal !mt-0 text-gray-700 dark:text-gray-300">
                {data.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-600 dark:text-gray-400">
                {data.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}