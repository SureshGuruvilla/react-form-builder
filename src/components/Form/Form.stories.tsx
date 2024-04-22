import React from "react";
import Form from "./Form";
import { FormSpecProps, FormFieldAttrType, FormDataType } from "./@types";

export default {
  title: "Form",
  component: Form,
};
const signUpFormSpecs = ({ resetData }: FormSpecProps) => {
  const formFields: FormFieldAttrType[] = [
    {
      id: "name",
      type: "col-layout",
      fields: [
        {
          id: "firstName",
          type: "text",
          label: "Enter firstName",
          required: true,
          onChange: () => {
            console.log("onchnage");
          },
        },
        {
          id: "lastName",
          type: "text",
          label: "Enter lastName",
        },
      ],
    },
    {
      id: "email",
      type: "text",
      label: "Enter email",
    },
    {
      id: "phoneno",
      type: "text",
      label: "Enter phoneno",
    },
    {
      id: "pass",
      type: "col-layout",
      fields: [
        {
          id: "password",
          type: "password",
          label: "Choose your password",
          required: true,
          validator: [
            {
              message: "Password should be atlease six character length",
              validate: function (value: string): boolean {
                throw new Error("Function not implemented.");
              },
            },
          ],
        },
        {
          id: "confirmPassword",
          type: "password",
          label: "Confirm your password",
          required: true,
        },
      ],
    },
    {
      id: "cta",
      type: "col-layout",
      className: "justify-end",
      fields: [
        {
          id: "clear",
          type: "button",
          children: "Reset",
          onClick: () => {
            resetData();
          },
        },
        {
          id: "submit",
          type: "submit",
          children: "Submit",
        },
      ],
    },
  ];
  return formFields;
};
const loginFormSpecs = ({}: FormSpecProps) => {
  const formFields: FormFieldAttrType[] = [
    {
      id: "email",
      type: "text",
      label: "Enter email",
      required: true,
    },
    {
      id: "password",
      type: "password",
      label: "Enter your password",
      required: true,
    },
    {
      id: "submit",
      type: "submit",
      children: "Login",
    },
  ];
  return formFields;
};
const handleSubmit = (isFormValid: boolean, data: any) => {
  console.log(isFormValid, data);
};
export const SignUpForm = () => (
  <Form formSpecs={signUpFormSpecs} onSubmit={handleSubmit} />
);

export const LoginForm = () => (
  <Form formSpecs={loginFormSpecs} onSubmit={handleSubmit} />
);
