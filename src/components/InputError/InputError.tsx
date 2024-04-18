import React from "react";
import localStyle from "./InputError.module.scss";
interface ErrorProps {
    error: string;
}

function Error({error}: ErrorProps) {
  return (
    <div className={localStyle.error}>{error}</div>
  )
}

export default Error