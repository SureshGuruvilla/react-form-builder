import React, { CSSProperties, useEffect, useRef, useState } from "react";
import cx from "classnames";
import InputError from "../InputError/InputError";
import localStyle from "./Dropdown.module.scss";
import Button from "../Button/Button";
export interface DropdownProps {
  id?: string;
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOnSelect = (option: string) => {
    onSelect && onSelect(option);
    setIsOpen(false);
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
    <div
      ref={dropdownRef}
      className={cx("field", { disabled: disabled }, id, className)}
      style={style}
    >
      <label data-label={id} htmlFor={id}>
        {label}
        {required && <span className={cx("required")}>*</span>}
      </label>
      <div
        className={cx(localStyle.dropdownContainer)}
        {...rest}
        data-opened={isOpen}
      >
        <Button
          type="button"
          className={cx(localStyle.dropdownToggle)}
          disabled={disabled}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {value || emptyText}
        </Button>
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
    </div>
  );
}

export default Dropdown;
