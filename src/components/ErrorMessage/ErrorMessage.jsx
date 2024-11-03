import React from 'react'
import s from "./ErrorMessage.module.css"

const ErrorMessage = ({message}) => {
    return <p className={s.error}>Something went wrong! Try again!</p>;
};

export default ErrorMessage;
