"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/libs/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const description = formData.get("description");

  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(description, 1000)) {
    return {
      error: "Invalid description",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboard@resend.dev>",
      to: "duytranls.2003@gmail.com",
      subject: "New message from your portfolio",
      replyTo: email as string,
      react: React.createElement(ContactFormEmail, {
        email: email as string,
        description: description as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
