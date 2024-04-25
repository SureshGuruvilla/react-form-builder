import React, { CSSProperties, ChangeEvent } from "react";
import cx from "classnames";
import InputError from "../InputError/InputError";
import localStyles from "./RadioButton.module.scss";

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  options: string[];
  label?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
function RadioButton({
  id,
  label,
  options,
  value,
  onChange,
  error,
  required,
  style,
  className,
  disabled,
  ...rest
}: RadioButtonProps) {
  const renderRadioButtons = (options: string[]) => {
    return options.map((option) => {
      return (
        <span key={option} className={cx(localStyles.item)}>
          <input
            disabled={disabled}
            name={id}
            id={option}
            value={option}
            checked={option === value}
            onChange={(e) => onChange && onChange(e)}
            type="radio"
            {...rest}
          />
          <span className={cx("ml-xs")}>{option}</span>
        </span>
      );
    });
  };
  return (
    <div
      className={cx("field", { disabled: disabled }, id, className)}
      style={style}
    >
      <label data-label={id} htmlFor={id}>
        {label}
        {required && <span className={cx("required")}>*</span>}
      </label>
      {renderRadioButtons(options)}
      {error && <InputError margin="small" error={error} />}
    </div>
  );
}

export default RadioButton;
