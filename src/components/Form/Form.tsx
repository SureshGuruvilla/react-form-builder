import React from "react";
import { FormProps } from "./@types";
import FormContextProvider from "./FormProvider";
import FormView from "./FormView";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function Form(props: FormProps) {
  return (
    <ErrorBoundary>
      <FormContextProvider>
        <FormView {...props} />
      </FormContextProvider>
    </ErrorBoundary>
  );
}

export default Form;
