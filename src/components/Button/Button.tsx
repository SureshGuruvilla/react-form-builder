import cx from "classnames";
import React, { MouseEventHandler, ReactNode } from "react";
import localStyles from "./Button.module.scss";

interface CommonButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}
interface GenericButton extends CommonButton {
  type: "button";
}
interface SubmitButton extends Omit<CommonButton, ""> {
  type: "submit";
}
export type ButtonProps = GenericButton | SubmitButton;

function Button({
  id,
  type,
  style,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      style={style}
      className={cx(localStyles.button, id, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
