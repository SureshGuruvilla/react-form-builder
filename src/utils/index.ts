import { FormInputValidatorType } from "../components/Form/@types";

export function isEmptyObject(obj: Object){
    return obj && Object.keys(obj).length <= 0;
}

export const validateFields = (type:string, value: string, required?: boolean, validator?: FormInputValidatorType[]): [isValid:boolean, error: string] => {
    let error = "";
    let valid = true;
    if(required && (value.length === 0 || (type === 'checkbox' && value === 'false'))) {
        valid = false;
        error = "Required Field";
    }
    if (valid && validator) {
        for (const { validate, message } of validator) {
            if (validate(value)) {
                valid = false;
                error = message;
                break;
            }
        }
    }
    return [valid,error];
}