import React, {ChangeEvent, CSSProperties, MouseEventHandler} from "react";


export interface FormSpecProps{
    data: FormDataType;
    updateData: FormDataUpdateType;
    resetData: FormDataResetType;
}
export interface FormProps extends Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,'onSubmit'>{
    formSpecs: (props: FormSpecProps) => FormFieldAttrType[];
    onSubmit: (isFormValid: boolean, data: FormDataType) =>void;
}

export interface FormInputValidatorType {
    message: string;
    validate: (value:string)=>boolean;
}

interface CommonInputFieldAttr extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    value?: string;
    required?:boolean;
    className?: string;
    style?: CSSProperties;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    validator?: FormInputValidatorType[];
}
export interface InputFieldAttr  extends CommonInputFieldAttr {
    type: 'text'| 'email' | 'date' | 'time' | 'datetime-local' | 'password' | 'color' | 'file';
}
export interface RadioButtonFieldAttr extends CommonInputFieldAttr {
    type: 'radio';
    options: string[];
}
export interface CheckboxFieldAttr extends Omit<CommonInputFieldAttr,'value'>{
    type: 'checkbox';
    checked?: boolean;
}
export interface DropdownFieldAttr{
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
}
interface CommonButtonFieldAttr extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'label'>{
    id: string;
    value: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export interface ButtonFieldAtt extends CommonButtonFieldAttr{
    type: 'button';
}
export interface SubmitFieldAttr extends Omit<CommonButtonFieldAttr,'onClick'>{
    type: 'submit';
}


interface CommonLayoutFieldAttr extends React.HTMLAttributes<HTMLDivElement>{
    id: string;
    fields: FormFieldAttrType[];
}
interface FormRowLayoutFieldAttr extends CommonLayoutFieldAttr{
    type: "row-layout";
}
interface FormColLayoutFieldAttr extends CommonLayoutFieldAttr{
    type: "col-layout";
}

type FormInputFieldAttr = InputFieldAttr | RadioButtonFieldAttr | CheckboxFieldAttr | DropdownFieldAttr;
export type FormButtonFieldAttr = ButtonFieldAtt | SubmitFieldAttr;
export type FormLayoutFieldAttr = FormRowLayoutFieldAttr | FormColLayoutFieldAttr;

export type FormFieldAttrType = FormInputFieldAttr | FormButtonFieldAttr | FormLayoutFieldAttr;

export interface FormDataType {
  [key: string]: {
    value: string,
    valid: boolean,
    error: string
  }
}
export interface FormDataUpdateType{
    (data: FormDataType): void
}
export interface FormDataResetType{
    (): void
}