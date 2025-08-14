"use client";

import { sendEmail } from "@/actions/sendEmail";
import useSectionInView from "@/libs/hooks/useActiveSectionInView";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView({
    sectionName: "Contact",
  });

  const { pending } = useFormStatus();

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)]"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 dark:text-gray-200 -mt-6">
        Please contact me directly at{" "}
        <a
          className="underline text-blue-500 dark:text-blue-400"
          href="mailto:duytranls.2003@gmail.com"
        >
          duytranls.2003@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="email"
          type="email"
          className="h-14 rounded-lg border border-black/10 dark:border-white/20 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Your email"
          required
        />
        <textarea
          name="description"
          className="h-52 my-3 rounded-lg border border-black/10 dark:border-white/20 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Your message"
          required
        />
        <button
          type="submit"
          className="group h-[3rem] bg-gray-900 dark:bg-gray-700 text-white rounded-full outline-none transition-all flex items-center justify-center gap-x-2 hover:bg-gray-950 dark:hover:bg-gray-600 cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
          disabled={pending}
        >
          {pending ? (
            <span className="animate-spin">Sending...</span>
          ) : (
            <FaPaperPlane className="text-lg" />
          )}
          Send
        </button>
      </form>
    </motion.section>
  );
}