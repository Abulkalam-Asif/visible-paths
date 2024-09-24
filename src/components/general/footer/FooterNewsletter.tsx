"use client";
import { useAlert } from "@/context/AlertContext";
import { newsletterSchema } from "@/schema/newsletterSchema";
import React, { useState } from "react";

const FooterNewsletter = () => {
  const { showAlert } = useAlert();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    try {
      newsletterSchema.parse({ email });
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
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const responseJson = await response.json();
      if (response.ok) {
        showAlert(responseJson.message, "SUCCESS");
        setEmail("");
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
      <div className="text-white col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1">
        <h4 className="text-2xl font-bold mb-4">Newsletter</h4>
        <p className="text-sm mb-8">
          Stay ahead with smart tips and insights—subscribe for updates that
          empower your journey!
        </p>
        <form className="flex w-full items-center rounded-sm overflow-hidden">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="text-black py-2 px-4 w-full"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={submitHandler} className="bg-accent1 py-2 px-4">
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {Object.keys(errors).length > 0 && (
          <p className="text-white text-sm mt-2">
            <span>{errors[Object.keys(errors)[0]]} </span>
          </p>
        )}
      </div>
    </>
  );
};

export default FooterNewsletter;
