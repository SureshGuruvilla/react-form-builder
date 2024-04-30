import React, { CSSProperties, ChangeEvent } from "react";
import InputError from "../InputError/InputError";
import cx from "classnames";
import localStyles from "./InputField.module.scss";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type:
    | "text"
    | "number"
    | "email"
    | "date"
    | "time"
    | "datetime-local"
    | "password"
    | "color"
    | "file"
    | "range";
  id?: string;
  label?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function InputField({
  id,
  label,
  value,
  type = "text",
  required,
  disabled,
  onChange,
  error,
  style,
  className,
  ...rest
}: InputFieldProps) {
  return (
    <div
      className={cx("field", { disabled: disabled }, id, className)}
      style={style}
    >
      <label data-label={id} htmlFor={id}>
        {label}
        {required && <span className={cx("required")}>*</span>}
      </label>
      <input
        className={cx(localStyles.input)}
        disabled={disabled}
        type={type}
        name={id}
        value={value}
        onChange={(e) => onChange && onChange(e)}
        data-valid={!error}
        {...rest}
      />
      {error && (
        <InputError
          margin={type === "range" ? "small" : "large"}
          error={error}
        />
      )}
    </div>
  );
}

export default InputField;
