"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString, validateEmail } from "@/libs/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export const sendEmail = async (
  formData: FormData
): Promise<{ error?: string; data?: unknown }> => {
  const email = formData.get("email");
  const description = formData.get("description");

  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured in environment variables");
    return {
      error: "Email service is not configured. Please contact the administrator.",
    };
  }

  // Validate email format
  if (!validateEmail(email)) {
    return {
      error: "Invalid email address",
    };
  }

  // Validate description
  if (!validateString(description, 1000)) {
    return {
      error: "Invalid message. Please keep it under 1000 characters.",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboard@resend.dev>",
      to: process.env.RECIPIENT_EMAIL || "duytranls.2003@gmail.com",
      subject: "New message from your portfolio",
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        email: email,
        description: description,
      }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
