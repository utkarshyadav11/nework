"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string | null;
  const message = formData.get("message") as string | null;
  const senderName = formData.get("senderName") as string | null;

  // simple server-side validation
  if (!senderEmail || !validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!senderName || !validateString(senderName, 500)) {
    return {
      error: "Invalid name",
    };
  }
  if (!message || !validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "utkarshyadav6745@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderName: senderName,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
