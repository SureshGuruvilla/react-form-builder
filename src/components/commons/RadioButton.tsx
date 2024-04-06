import React, { ChangeEvent } from 'react';
import cx from "classnames";
import InputError from './InputError';
import { RadioButtonFieldAttr } from './Form/@types';

interface RadioButtonProps extends RadioButtonFieldAttr {
    id: string;
    options: string[];
    label?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}
function RadioButton({id, label, options = [], onChange, error, required, style, className, ...rest}: RadioButtonProps) {
  const renderRadioButtons = (options: string[]) => {
    return options.map((option) => {
        return (
            <span key={option}>
                <input 
                    name={id}
                    id={option}
                    value={option}
                    onChange={(e)=> onChange(e)}
                    {...rest}
                />
                <span className='ml-xs'>{option}</span>
            </span>
        )
    })
  }
  return (
    <label data-label={id} htmlFor={id} className={cx('field radiobutton-field', id, className)} style={style}>
        <span>{label}{required && <span className='text-red ml-xs'>*</span>}</span>
        {renderRadioButtons(options)}
        {
            error && (
              <InputError error={error} />
            )
          }
    </label>
  )
}

export default RadioButton