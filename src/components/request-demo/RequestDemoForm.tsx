"use client";
import React, { useState } from "react";
import FormInputBox from "@/components/general/FormInputBox";
import states from "@/../public/json/states.json";
import RequestDemoSelect from "./RequestDemoSelect";
import { requestDemoFormSchema } from "@/schema/requestDemoFormSchema";
import { useAlert } from "@/context/AlertContext";

const defaultRequestDemoFormInput = {
  email: "",
  company: "",
  firstName: "",
  lastName: "",
  phone: "",
  jobTitle: "",
  state: states[0],
  zipCode: "",
  info: "",
};

const RequestDemoForm = () => {
  const { showAlert } = useAlert();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    [key: string]: string | undefined;
  }>({});

  const [requestDemoFormInput, setRequestDemoFormInput] = useState(
    defaultRequestDemoFormInput,
  );

  const requestDemoFormInputHandler = (key: string, value: string) => {
    setRequestDemoFormInput(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const validateForm = () => {
    try {
      requestDemoFormSchema.parse(requestDemoFormInput);
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
      const response = await fetch("/api/request-demo-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestDemoFormInput),
      });
      const responseJson = await response.json();
      if (response.ok) {
        showAlert(responseJson.message, "SUCCESS");
        setRequestDemoFormInput(defaultRequestDemoFormInput);
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
      <form className="px-6 py-8 rounded-2.5xl bg-white shadow-[0px_0px_10px_4px_rgba(0,0,0,0.1)] md:px-8 md:py-10 lg:px-10 lg:py-12 lg:w-3/5">
        <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-6">
          <FormInputBox
            label="Email"
            idHtmlFor="email"
            type="email"
            value={requestDemoFormInput.email}
            name="email"
            placeholder="info@yourcompany.com"
            inputHandler={requestDemoFormInputHandler}
            error={errors.email}
          />
          <FormInputBox
            label="Company"
            type="email"
            idHtmlFor="company"
            value={requestDemoFormInput.company}
            name="company"
            placeholder="Company Name"
            inputHandler={requestDemoFormInputHandler}
            error={errors.company}
          />
          <FormInputBox
            label="First Name"
            type="text"
            idHtmlFor="firstName"
            value={requestDemoFormInput.firstName}
            name="firstName"
            placeholder="First Name"
            inputHandler={requestDemoFormInputHandler}
            error={errors.firstName}
          />
          <FormInputBox
            label="Last Name"
            type="text"
            idHtmlFor="lastName"
            value={requestDemoFormInput.lastName}
            name="lastName"
            placeholder="Last Name"
            inputHandler={requestDemoFormInputHandler}
            error={errors.lastName}
          />
          <FormInputBox
            label="Phone"
            type="tel"
            idHtmlFor="phone"
            value={requestDemoFormInput.phone}
            name="phone"
            placeholder="Phone"
            inputHandler={requestDemoFormInputHandler}
            error={errors.phone}
          />
          <FormInputBox
            label="Job Title"
            type="text"
            idHtmlFor="jobTitle"
            value={requestDemoFormInput.jobTitle}
            name="jobTitle"
            placeholder="Job Title"
            inputHandler={requestDemoFormInputHandler}
            error={errors.jobTitle}
          />
          <RequestDemoSelect
            label="States/Province"
            idHtmlFor="state"
            value={requestDemoFormInput.state}
            name="state"
            options={states.map(state => ({
              label: state,
              value: state,
            }))}
            inputHandler={requestDemoFormInputHandler}
            error={errors.state}
          />
          <FormInputBox
            label="Zip/Postal Code"
            type="text"
            idHtmlFor="zipCode"
            value={requestDemoFormInput.zipCode}
            name="zipCode"
            placeholder="Zip/Postal Code"
            inputHandler={requestDemoFormInputHandler}
            error={errors.zipCode}
          />
          <FormInputBox
            label="Additional information related to your business needs"
            type="textarea"
            idHtmlFor="info"
            value={requestDemoFormInput.info}
            name="info"
            placeholder="Additional Information"
            inputHandler={requestDemoFormInputHandler}
            className="md:col-span-2"
            error={errors.info}
          />
        </div>
        <button
          type="submit"
          onClick={submitHandler}
          className="bg-accent1 font-bold text-lg text-white py-2 px-6 mt-10 rounded-md lg:mt-12 lg:text-xl xl:text-2xl xl:py-4 xl:px-10">
          {loading ? "Submitting..." : "Submit Now"}
        </button>
      </form>
    </>
  );
};

export default RequestDemoForm;
