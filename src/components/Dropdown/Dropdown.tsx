import React, { CSSProperties, useEffect, useRef, useState } from "react";
import cx from "classnames";
import InputError from "../InputError/InputError";
import localStyle from "./Dropdown.module.scss";
export interface DropdownProps {
  type: "dropdown";
  id: string;
  label?: string;
  options: string[];
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onSelect?: (option: string) => void;
  emptyText?: string;
  error?: string;
}
function Dropdown({
  id,
  value,
  options,
  error,
  label,
  style,
  className,
  required,
  disabled,
  onSelect,
  emptyText = "Select an option",
  ...rest
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLabelElement>(null);

  const handleOnSelect = (option: string) => {
    onSelect && onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <label
      ref={dropdownRef}
      data-label={id}
      htmlFor={id}
      className={cx("field", id, className)}
      style={style}
    >
      <span>
        {label}
        {required && <span className={cx("required")}>*</span>}
      </span>
      <div
        className={cx(localStyle.dropdownContainer)}
        {...rest}
        data-opened={isOpen}
      >
        <button
          type="button"
          className={cx(localStyle.dropdownToggle)}
          disabled={disabled}
          onClick={(e) => {
            setIsOpen(!isOpen);
          }}
        >
          {value || emptyText}
        </button>
        {isOpen && (
          <ul className={cx(localStyle.dropdownMenu)}>
            {value !== "" && (
              <li key={-1} onClick={(e) => handleOnSelect("")}>
                {emptyText}
              </li>
            )}
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOnSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <InputError error={error} />}
    </label>
  );
}

export default Dropdown;
