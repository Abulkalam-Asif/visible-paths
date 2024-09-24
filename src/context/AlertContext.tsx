"use client";
import { createContext, useState, ReactNode, useContext } from "react";

type AlertContextType = {
  alert: AlertType[];
  showAlert: (
    message: string,
    type: "SUCCESS" | "ERROR" | "WARNING" | "INFO",
  ) => void;
  hideAlert: () => void;
};

export const AlertContext = createContext({} as AlertContextType);

type AlertType = {
  message: string;
  type: "SUCCESS" | "ERROR" | "WARNING" | "INFO";
};

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertType[]>([]);

  const showAlert = (
    message: string,
    type: "SUCCESS" | "ERROR" | "WARNING" | "INFO",
  ) => {
    setAlert([{ message, type }]);

    setTimeout(() => {
      hideAlert();
    }, 5000);
  };

  const hideAlert = () => {
    setAlert([]);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
