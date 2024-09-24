"use client";
import React, { useState } from "react";
import ContactInput from "./ContactInput";
import { contactFormSchema } from "@/schema/contactFormSchema";
import { useAlert } from "@/context/AlertContext";

const ContactForm = () => {
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    contactNo: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    [key: string]: string | undefined;
  }>({});

  const contactFormDataInputHandler = (key: string, value: string) => {
    setContactFormData(prev => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const validateForm = () => {
    try {
      contactFormSchema.parse(contactFormData);
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
        body: JSON.stringify(contactFormData),
      });
      const responseJson = await response.json();
      if (response.ok) {
        showAlert(responseJson.message, "SUCCESS");
        setContactFormData({
          name: "",
          email: "",
          subject: "",
          contactNo: "",
          message: "",
        });
      } else {
        const error = responseJson.error as string | { [key: string]: string };
        if (error && typeof error === "object") {
          setErrors(error);
          showAlert("Please fill the form correctly", "ERROR");
        } else {
          showAlert(error, "ERROR");
        }
      }
    } catch (error) {
      showAlert("Something went wrong", "ERROR");
    }
    setLoading(false);
  };

  return (
    <>
      <form className="flex flex-col gap-4 w-full lg:w-1/2 lg:gap-6 xl:gap-8">
        <ContactInput
          name="name"
          type="text"
          placeholder="Name"
          value={contactFormData.name}
          inputHandler={e =>
            contactFormDataInputHandler("name", e.target.value)
          }
          error={errors.name}
        />
        <ContactInput
          name="email"
          type="email"
          placeholder="Email"
          value={contactFormData.email}
          inputHandler={e =>
            contactFormDataInputHandler("email", e.target.value)
          }
          error={errors.email}
        />
        <ContactInput
          name="subject"
          type="text"
          placeholder="Subject"
          value={contactFormData.subject}
          inputHandler={e =>
            contactFormDataInputHandler("subject", e.target.value)
          }
          error={errors.subject}
        />
        <ContactInput
          name="contactNo"
          type="text"
          placeholder="Contact Number"
          value={contactFormData.contactNo}
          inputHandler={e =>
            contactFormDataInputHandler("contactNo", e.target.value)
          }
          error={errors.contactNo}
        />
        <ContactInput
          name="message"
          type="textarea"
          placeholder="Message"
          value={contactFormData.message}
          inputHandler={e =>
            contactFormDataInputHandler("message", e.target.value)
          }
          error={errors.message}
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="bg-accent1 px-6 font-bold text-lg text-white py-3 mt-2 rounded-md lg:mt-4 lg:mr-auto lg:text-xl xl:text-2xl xl:py-4 xl:px-6 xl:mt-8">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
