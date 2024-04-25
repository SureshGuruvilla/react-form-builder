import React from "react";
import localStyle from "./InputError.module.scss";
import { cva, type VariantProps } from "class-variance-authority";
const errorStyle = cva(localStyle.error, {
  variants: {
    margin: {
      large: localStyle.marginLarge,
      small: localStyle.marginSmall,
    },
  },
  defaultVariants: {
    margin: "large",
  },
});
interface ErrorProps extends VariantProps<typeof errorStyle> {
  error: string;
}

function Error({ error, margin }: ErrorProps) {
  return <div className={errorStyle({ margin })}>{error}</div>;
}

export default Error;
