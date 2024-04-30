import React, { CSSProperties, ChangeEvent } from "react";
import InputError from "../InputError/InputError";
import cx from "classnames";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "checked"> {
  id?: string;
  label: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
function Checkbox({
  id,
  value,
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
    <div
      className={cx("field row", { disabled: disabled }, id, className)}
      style={style}
    >
      <input
        name={id}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e)}
        checked={value === "true"}
        {...rest}
        type="checkbox"
      />
      <span>
        {label}
        {required && <span className={cx("required")}>*</span>}
      </span>
      {error && <InputError marginVariant="marginSmall" error={error} />}
    </div>
  );
}

export default Checkbox;
