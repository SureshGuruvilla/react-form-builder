import React, {createContext, useState} from "react";
import { FormDataResetType, FormDataType, FormDataUpdateType } from "./@types";

export interface FormContextType {
    data: FormDataType;
    updateData: FormDataUpdateType;
    resetData: FormDataResetType;
}

export const FormContext = createContext<FormContextType | null>(null);

const FormContextProvider:React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [data, setData] = useState<FormDataType>({});
    // const data = {};
    const updateData = (data: FormDataType) => {
        setData({...data})
    }
    const resetData = () => updateData({});
    return (
        <FormContext.Provider value={{data, updateData, resetData}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider
