import React, { CSSProperties, ChangeEvent } from "react";
import InputError from "../InputError/InputError";
import cx from "classnames";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
  checked: boolean;
  required?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
function Checkbox({
  id,
  checked,
  label,
  onChange,
  required,
  error,
  className,
  style,
  disabled,
  ...rest
}: CheckboxProps) {
  return (
    <label
      data-label={id}
      htmlFor={id}
      className={cx("field row", { disabled: disabled }, id, className)}
      style={style}
    >
      <input
        name={id}
        disabled={disabled}
        onChange={(e) => onChange(e)}
        checked={checked}
        {...rest}
        type="checkbox"
      />
      <span>
        {label}
        {required && <span className={cx("required")}>*</span>}
      </span>
      {error && <InputError error={error} />}
    </label>
  );
}

export default Checkbox;
