import React, { useState, useEffect } from "react";
import Checkbox from "../Checkbox";
import InputField from "../InputField";
import RadioButton from "../RadioButton";
import {
  ButtonFieldAtt,
    CheckboxFieldAttr,
    DropdownFieldAttr,
    FormDataType,
    FormFieldAttrType,
    FormInputValidatorType,
    FormLayoutFieldAttr,
    FormProps, InputFieldAttr,
    RadioButtonFieldAttr,
    SubmitFieldAttr,
} from "./@types";
import { useFormContext } from "./FormContext";
import Button from "../Button";
import { AllInputTypeList, TextInputTypeList } from "./@enums";
import cx from "classnames";
import Dropdown from "../Dropdown";
import { isEmptyObject } from "../../../utils/CommonUtils";
import { validateFields } from "../../../utils/FormUtils";

function FormView({id, className, formSpecs, method , onSubmit, ...rest }: FormProps){
  
    const { data, updateData,resetData } = useFormContext();
    const [showValidationMessage, setShowValidationMessage] = useState(false);

    useEffect(() => {
        if(isEmptyObject(data)){            
            const defineState = (fields: FormFieldAttrType[]): FormDataType => {
              let initState : FormDataType = {};
              fields.forEach((field) => {
                if(initState[field.id]){
                  throw new Error(`Duplicate form field found. Each form field need to have unique id. Duplicate field - ${field.id}`);
                }
                if(AllInputTypeList.includes(field.type)) {
                  const validator: FormInputValidatorType[] = 'validator' in field && field.validator ? field.validator : [];
                  const required: boolean = 'required' in field && field.required ? field.required : false;
                  let val: string = 'value' in field && field.value ? field.value : '';
                    if(field.type === 'checkbox'){
                        val = field.checked? field.checked.toString() : 'false';
                    }

                    const [isValid,error] = validateFields(field.type, val, required, validator);
                    
                    initState[field.id] = {
                        value : val,
                        valid : isValid,
                        error : error
                    }
                }
                if(field.type === 'row-layout' || field.type === 'col-layout'){
                  const innerState = defineState(field.fields)
                  initState = {...initState,...innerState}
                }
              })
              return initState;
            } 
            const initData = defineState(formSpecs({data,updateData,resetData}));
            console.log(initData);
            
            updateData(initData);
        }
    }, [data]);
    

  
    const renderInputField = ({...rest}: FormFieldAttrType) => {
      const id = rest.id;
      const type = rest.type;     
        const handleInputOnChange = (type: string, value: string, required?: boolean, validator?: FormInputValidatorType[]) => {
        data[id].value = value;
        const [isValid,error] = validateFields(type, value, required, validator);
        updateData({
          ...data,
          [id]: {
            value: value,
            valid: isValid,
            error: error
          }
        });
      }
      if(type === 'checkbox') {
        const checkBoxRest = rest as CheckboxFieldAttr;
        return (
          <Checkbox
            {...checkBoxRest}
            onChange={(e) => {
              handleInputOnChange(type,e.target.checked.toString(),checkBoxRest.required);
              checkBoxRest.onChange && checkBoxRest.onChange(e);
            }}
            error={showValidationMessage ? data[id].error : ""}
            key={id}
            checked={data[id].value === 'true'}
          />
        )
      }
      else if(type === 'radio'){
        const radioButtonRest = rest as RadioButtonFieldAttr;
        return (
          <RadioButton
            {...radioButtonRest}         
            onChange={(e) =>{
              handleInputOnChange(type, e.target.value, radioButtonRest.required);
              radioButtonRest.onChange && radioButtonRest.onChange(e);            
            }}
            error={showValidationMessage ? data[id].error : ""}
          />
        )
      }
      else if(type === 'button'){
        return (
          <Button key={id} {...rest as ButtonFieldAtt} />
        )
      }
      else if(type === 'submit'){
        return (
          <Button key={id} {...rest as SubmitFieldAttr} />
        )
      }
      else if(type === 'dropdown'){
        const dropDownRest = rest as DropdownFieldAttr;
        return (
          <Dropdown 
            value={data[id].value}
            onSelect={(option) =>{
              handleInputOnChange(type,option,dropDownRest.required);
              dropDownRest.onSelect && dropDownRest.onSelect(option);
            }}
            key={id}
            error={showValidationMessage ? data[id].error : ""}
            {...dropDownRest}
            />
        )
      }
      else if(TextInputTypeList.includes(type)){
        const inputFieldRest = rest as InputFieldAttr;
        return (
            <InputField
              {...inputFieldRest}
              value={data[id].value}
              error={showValidationMessage ? data[id].error : ""}
              key={id}
              onChange={(e) => {
                handleInputOnChange(type,e.target.value,inputFieldRest.required,inputFieldRest.validator);
                inputFieldRest.onChange && inputFieldRest.onChange(e);
              }}       
            /> 
        )
      }
      else {
        return null;
      }
    }
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!showValidationMessage) {
        setShowValidationMessage(true);
      }
      onSubmit(Object.values(data).every(value => value.valid), data);
    }

    const renderFields = (fields: FormFieldAttrType[]): JSX.Element | (JSX.Element | null)[] => {
      const formFields = fields.map((field: FormFieldAttrType) => {
        const { type, id,  ...rest } = field;
        if(type === 'col-layout'){
          const {fields, className, ...restcol} = rest as FormLayoutFieldAttr;
          return <div key={id} {...restcol} className={cx("layout row", id, className)}>{renderFields(fields)}</div>
        }
        if(type === 'row-layout'){
          const {fields, className, ...restrow} = rest as FormLayoutFieldAttr;
          return <div key={id} {...restrow} className={cx("layout col", id, className)}>{renderFields(fields)}</div>
        }
        return renderInputField(field)
      })
      return formFields;
    }

    return (
      <form className={cx(id, className)} id={id} method={method} onSubmit={handleSubmit} {...rest}>
          <div className="flex flex-wrap">
            { !isEmptyObject(data) && renderFields(formSpecs({data,updateData,resetData})) }
          </div>
      </form>
  )  
}
  
export default FormView  
