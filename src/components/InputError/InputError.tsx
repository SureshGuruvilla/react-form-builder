import React from "react";
import cx from "classnames";
import localStyle from "./InputError.module.scss";

interface ErrorProps {
  error: string;
  marginVariant?: "marginLarge" | "marginSmall";
}

function Error({ error, marginVariant }: ErrorProps) {
  return <div className={cx(localStyle.error, marginVariant)}>{error}</div>;
}

export default Error;
