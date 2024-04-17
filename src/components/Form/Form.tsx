import React from 'react';
import { FormProps } from './@types';
import FormContextProvider from './FormProvider';
import FormView from './FormView';

function Form(props : FormProps) {  
  return (
    <FormContextProvider>
      <FormView {...props} />
    </FormContextProvider>
    )
}

export default Form

