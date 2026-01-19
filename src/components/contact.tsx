"use client";

import { sendEmail } from "@/actions/sendEmail";
import useSectionInView from "@/libs/hooks/useActiveSectionInView";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group h-[3rem] w-full sm:w-auto bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white px-8 rounded-full outline-none transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:from-gray-950 hover:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-500 focus:scale-105 hover:scale-105 active:scale-100 disabled:scale-100 disabled:opacity-65 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <span>Send Message</span>
          <FaPaperPlane className="text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
}

export default function Contact() {
  const { ref } = useSectionInView({
    sectionName: "Contact",
  });

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)]"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 dark:text-gray-300 -mt-6 text-center">
        Please contact me directly at{" "}
        <a
          className="underline text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          href="mailto:duytranls.2003@gmail.com"
        >
          duytranls.2003@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col gap-4"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          // Reset form
          const form = document.querySelector("form");
          form?.reset();
        }}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 pl-1">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="h-14 rounded-lg border border-gray-300 dark:border-white/20 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 outline-none transition-all"
            placeholder="your.email@example.com"
            required
            maxLength={500}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 pl-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="description"
            className="h-52 rounded-lg border border-gray-300 dark:border-white/20 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 outline-none transition-all resize-none"
            placeholder="Write your message here..."
            required
            maxLength={1000}
          />
        </div>

        <SubmitButton />
      </form>
    </motion.section>
  );
}