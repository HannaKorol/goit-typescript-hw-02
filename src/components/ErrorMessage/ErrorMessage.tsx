import React from "react";
import s from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types.ts"


const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={s.error}>{message}</p>;
};

export default ErrorMessage;
