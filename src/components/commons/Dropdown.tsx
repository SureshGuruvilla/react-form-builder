import React, { useEffect, useRef, useState } from 'react'
import { DropdownFieldAttr } from './Form/@types';
import cx from "classnames";
import InputError from './InputError';

interface DropdownFieldProps extends DropdownFieldAttr {
    error?: string;
    onSelect: (value: string) => void;
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
    emptyText = 'Select an option',
    ...rest
}: DropdownFieldProps) {
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLabelElement>(null);

  const handleOnSelect = (option: string) => {
    onSelect(option);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {      
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])
  
  return (
    <label 
          ref={dropdownRef}
          data-label={id} 
          htmlFor={id} 
          className={
            cx(
              'field dropdown',
              id,
              className
            )
          } 
          style={style} 
        >
        <span>{label}{required && <span className='text-red ml-xs'>*</span>}</span>
        <div className="dropdown-container" {...rest} data-opened={isOpen}>
            <button 
                type='button'
                className="dropdown-toggle" 
                disabled={disabled} 
                onClick={(e) => {
                    setIsOpen(!isOpen)}
                }
                >
                {value || emptyText}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li key={-1} onClick={(e) => handleOnSelect("")}>{emptyText}</li>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOnSelect(option)}>
                        {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        {
            error && (
              <InputError error={error} />
            )
        }
        </label>
  )
}

export default Dropdown