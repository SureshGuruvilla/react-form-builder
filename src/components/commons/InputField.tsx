import React, { ChangeEvent, useState } from 'react'
import InputError from './InputError';
import cx from "classnames";
import { InputFieldAttr } from './Form/@types';

interface InputFieldProps extends Omit<InputFieldAttr,'label' | 'type'> {
    label?: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

function InputField({ id, label, value, type = "text", required, onChange, error, style, className, ...rest }:InputFieldProps) {
  console.log('id',id);
  
  return (
        <label 
          data-label={id} 
          htmlFor={id} 
          className={
            cx(
              'field input-field',
              id,
              className
            )
          } 
          style={style} 
        >
          <span>{label}{required && <span className='text-red ml-xs'>*</span>}</span>
          <input
            type={type} 
            name={id}
            value={value} 
            onChange={(e)=> onChange(e)} 
            data-valid={!error} 
            {...rest} 
          />
          {
            error && (
              <InputError error={error} />
            )
          }
        </label>
  )
}

export default InputField