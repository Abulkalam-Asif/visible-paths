"use client";
import React, { useState } from "react";
import FormInputBox from "@/components/general/FormInputBox";
import { contactFormSchema } from "@/schema/contactFormSchema";
import { useAlert } from "@/context/AlertContext";

const defaultContactUsFormInput = {
  name: "",
  email: "",
  subject: "",
  contactNo: "",
  message: "",
};

const ContactUsForm = () => {
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<{
    [key: string]: string | undefined;
  }>({});

  const [contactUsFormInput, setContactUsFormInput] = useState(
    defaultContactUsFormInput,
  );

  const contactUsFormInputHandler = (key: string, value: string) => {
    setContactUsFormInput(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const validateForm = () => {
    try {
      contactFormSchema.parse(contactUsFormInput);
      setErrors({});
      return true;
    } catch (err: any) {
      const fieldErrors: { [key: string]: string } = {};
      err.errors.forEach((error: any) => {
        fieldErrors[error.path[0]] = error.message;
      });
      setErrors(fieldErrors);
      return false;
    }
  };

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      setLoading(true);
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactUsFormInput),
      });
      const responseJson = await response.json();
      if (response.ok) {
        showAlert(responseJson.message, "SUCCESS");
        setContactUsFormInput(defaultContactUsFormInput);
      } else {
        const error = responseJson.error as string | { [key: string]: string };
        if (error && typeof error === "object") {
          setErrors(error);
        } else {
          showAlert(error, "ERROR");
        }
      }
    } catch (error) {
      showAlert("Internal server error", "ERROR");
    }
    setLoading(false);
  };

  return (
    <>
      <form className="px-6 py-8 rounded-2.5xl bg-white shadow-[0px_0px_10px_4px_rgba(0,0,0,0.1)] md:px-8 md:py-10 lg:px-10 lg:py-12 lg:w-1/2">
        <div className="grid grid-cols-1 gap-y-7">
          <FormInputBox
            label="Full name"
            idHtmlFor="name"
            type="text"
            value={contactUsFormInput.name}
            name="name"
            placeholder="Full Name"
            inputHandler={contactUsFormInputHandler}
            error={errors.name}
          />
          <FormInputBox
            label="Email"
            idHtmlFor="email"
            type="email"
            value={contactUsFormInput.email}
            name="email"
            placeholder="Email"
            inputHandler={contactUsFormInputHandler}
            error={errors.email}
          />
          <FormInputBox
            label="Subject"
            idHtmlFor="subject"
            type="text"
            value={contactUsFormInput.subject}
            name="subject"
            placeholder="Subject"
            inputHandler={contactUsFormInputHandler}
            error={errors.subject}
          />
          <FormInputBox
            label="Contact Number"
            idHtmlFor="contactNo"
            type="text"
            value={contactUsFormInput.contactNo}
            name="contactNo"
            placeholder="Contact Number"
            inputHandler={contactUsFormInputHandler}
            error={errors.contactNo}
          />
          <FormInputBox
            label="Message"
            idHtmlFor="message"
            type="textarea"
            value={contactUsFormInput.message}
            name="message"
            placeholder="Message"
            inputHandler={contactUsFormInputHandler}
            error={errors.message}
          />
        </div>
        <button
          type="submit"
          onClick={submitHandler}
          className="bg-accent1 font-bold text-lg text-white py-2 px-6 mt-10 rounded-md lg:mt-12 lg:text-xl xl:text-2xl xl:py-4 xl:px-10">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactUsForm;
