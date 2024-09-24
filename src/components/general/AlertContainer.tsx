"use client";
import { useAlert } from "@/context/AlertContext";
import Alert from "./Alert";

const AlertContainer = () => {
  const { alert, hideAlert } = useAlert();
  return (
    <div>
      {alert.map((alert, index) => (
        <Alert key={index} {...alert} hideAlert={hideAlert} />
      ))}
    </div>
  );
};

export default AlertContainer;
