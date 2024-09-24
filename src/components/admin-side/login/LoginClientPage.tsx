"use client";
import React, { useState } from "react";
import AdminButton from "../general/AdminButton";
import AdminInputBox from "../general/AdminInputBox";
import Spinner from "@/components/general/Spinner";
import { useRouter } from "next/navigation";
import { loginFormSchema } from "@/schema/loginFormSchema";
import authClientService from "@/services/auth/authClientService";
import { useAlert } from "@/context/AlertContext";

type UserData = {
  username: string;
  password: string;
};

const LoginClientPage = () => {
  const router = useRouter();
  const { showAlert } = useAlert();
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {},
  );

  const userDataInputHandler = (key: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const validateForm = () => {
    try {
      loginFormSchema.parse(userData);
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

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    const response = await authClientService(userData);

    if (response.type === "success") {
      showAlert(response.message, "SUCCESS");
      router.push("/admin");
    } else {
      showAlert(response.message, "ERROR");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={formSubmitHandler} className="space-y-4 md:space-y-6">
      <AdminInputBox
        label="Username"
        idHtmlFor="username"
        type="text"
        name="username"
        value={userData.username}
        placeholder="Username"
        inputHandler={e => userDataInputHandler("username", e.target.value)}
        required={true}
        error={errors.username}
      />
      <AdminInputBox
        label="Password"
        idHtmlFor="password"
        type="password"
        name="password"
        value={userData.password}
        placeholder="••••••••"
        inputHandler={e => userDataInputHandler("password", e.target.value)}
        required={true}
        error={errors.password}
      />
      {isLoading ? (
        <Spinner className="w-10 h-10 mx-auto" />
      ) : (
        <AdminButton
          text="Login"
          type="submit"
          disabled={isLoading}
          className="w-full"
        />
      )}
    </form>
  );
};

export default LoginClientPage;
