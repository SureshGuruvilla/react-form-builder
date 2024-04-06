import React, { ChangeEvent } from 'react'
import InputError from './InputError';
import cx from "classnames";
import { CheckboxFieldAttr } from './Form/@types';

interface CheckboxProps extends CheckboxFieldAttr {
    id: string;
    checked: boolean;
    label?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}
function Checkbox({id, checked, label, onChange, required, error, className, style, ...rest}: CheckboxProps) {
    return (
        <label data-label={id} htmlFor={id} className={cx('field checkbox-field', id, className)} style={style}>
            <input name={id} onChange={(e)=>onChange(e)} checked={checked} {...rest} type='checkbox'/>
            <span>{label}{required && <span className='text-red ml-xs'>*</span>}</span>
            {
                error && (
                  <InputError error={error} />
                )
              }
        </label>
      )
}

export default Checkbox