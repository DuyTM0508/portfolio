"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="text-3xl font-medium capitalize mb-8 text-center text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}