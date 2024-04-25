import React, { CSSProperties, ReactNode } from "react";
import cx from "classnames";
import localStyle from "./Stack.module.scss";
export interface StackProps {
  type: "row" | "column";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}
const Stack = ({ id, type, children, className, style }: StackProps) => {
  return (
    <div
      className={cx(localStyle.stack, localStyle[type], id, className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default Stack;
