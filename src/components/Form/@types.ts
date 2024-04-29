import React, { CSSProperties } from "react";
import { ButtonProps } from "../Button/Button";
import { CheckboxProps } from "../Checkbox/Checkbox";
import { DropdownProps } from "../Dropdown/Dropdown";
import { InputFieldProps } from "../InputField/InputField";
import { RadioButtonProps } from "../RadioButton/RadioButton";
import { StackProps } from "../Stack/Stack";

export interface FormSpecProps {
  data: FormDataType;
  updateData: FormDataUpdateType;
  resetData: FormDataResetType;
}
export interface FormProps
  extends Omit<
    React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    >,
    "onSubmit"
  > {
  formSpecs: ((props: FormSpecProps) => FormField[]) | FormField[];
  onSubmit: (isFormValid: boolean, data: FormDataType) => void;
  className?: string;
  style?: CSSProperties;
}

export interface FormInputValidatorType {
  message: string;
  validate: (value: string) => boolean;
}

type CommonFormFieldId = {
  id: string;
};
type CommonFormFieldLabel = {
  label: string;
};
type CommonFormFieldValidator = {
  validator?: FormInputValidatorType[];
};
type ButtonFieldAttr = ButtonProps & CommonFormFieldId;
type CheckboxFieldAttr = CheckboxProps &
  CommonFormFieldId &
  CommonFormFieldLabel &
  CommonFormFieldValidator & {
    type: "checkbox";
  };
type DropdownFieldAttr = DropdownProps &
  CommonFormFieldId &
  CommonFormFieldLabel & {
    type: "dropdown";
  };
type InputFieldAttr = InputFieldProps &
  CommonFormFieldId &
  CommonFormFieldLabel &
  CommonFormFieldValidator;

type RadiobuttonFieldAttr = RadioButtonProps &
  CommonFormFieldId &
  CommonFormFieldLabel & {
    type: "radio";
  };
type StackFieldAttr = Omit<StackProps, "children"> &
  CommonFormFieldId & {
    fields: FormField[];
  };

export type FormField =
  | ButtonFieldAttr
  | CheckboxFieldAttr
  | DropdownFieldAttr
  | InputFieldAttr
  | RadiobuttonFieldAttr
  | StackFieldAttr;

export interface FormDataType {
  [key: string]: {
    value: string;
    valid: boolean;
    error: string;
  };
}
export interface FormDataUpdateType {
  (data: FormDataType): void;
}
export interface FormDataResetType {
  (): void;
}
