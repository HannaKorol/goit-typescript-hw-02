import React from "react";
import s from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "formik";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message:string }) => {
  return <p className={s.error}>{message}</p>;
};

export default ErrorMessage;
