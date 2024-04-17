import { FormButtonFieldAttr } from "../Form/@types";
import cx from "classnames";
import TextToHTML from "../TextToHTML/TextToHTML";
import React from "react";
import localStyles from "./Button.module.scss";

function Button({ id, className, value, ...props }: FormButtonFieldAttr) {
  return (
    <button className={cx(id, localStyles.button, className)} {...props}>
      <TextToHTML text={value as string}/>
    </button>
  );
}

export default Button