import React from "react";
import Form from "./Form";
import { FormSpecProps, FormField, FormDataType } from "./@types";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Form> = {
  title: "Form/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    formSpecs: {
      control: "object",
    },
    style: {
      control: "object",
    },
    className: {
      control: "text",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Form>;

const signupFormFields: FormField[] = [
  {
    id: "name",
    type: "row",
    fields: [
      {
        id: "firstName",
        type: "text",
        label: "Enter firstName",
        required: true,
      },
      {
        id: "lastname",
        type: "text",
        label: "Enter lastName",
      },
    ],
  },
  {
    id: "contact",
    type: "row",
    fields: [
      {
        id: "email",
        type: "text",
        label: "Enter email",
        required: true,
        validator: [
          {
            message: "Enter valid email address",
            validate: (val) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
          },
        ],
      },
      {
        id: "phoneno",
        type: "text",
        label: "Enter phoneno",
        required: true,
        validator: [
          {
            message: "Phone number should be 10 character length",
            validate: (val) => val.length !== 10,
          },
          {
            message: "Enter a valid phone number",
            validate: (val) => !/^[6-9]\d{9}$/.test(val),
          },
        ],
      },
    ],
  },
  {
    id: "info",
    type: "row",
    fields: [
      {
        type: "radio",
        id: "gender",
        label: "Select your gender",
        options: ["Male", "Female"],
        required: true,
      },
      {
        type: "dropdown",
        id: "occupation",
        label: "Select your occupation",
        options: ["Student", "Working"],
        required: true,
      },
    ],
  },
  {
    id: "pass",
    type: "row",
    fields: [
      {
        id: "password",
        type: "password",
        label: "Choose your password",
        required: true,
        validator: [
          {
            message: "Password should be atlease six character length",
            validate: (val) => val.length < 6,
          },
        ],
      },
      {
        id: "confirmPassword",
        type: "password",
        label: "Confirm your password",
        required: true,
        validator: [
          {
            message: "Password should be atlease six character length",
            validate: (val) => val.length < 6,
          },
        ],
      },
    ],
  },
  {
    id: "terms",
    type: "checkbox",
    label: "Accept the terms and conditions",
    required: true,
  },
  {
    id: "submit",
    type: "submit",
    children: "Submit",
  },
];
const loginFormSpecs = ({}: FormSpecProps) => {
  const formFields: FormField[] = [
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
const handleSubmit = (isFormValid: boolean, data: FormDataType) => {
  console.log(isFormValid, data);
};
export const SignUpForm: Story = {
  args: {
    formSpecs: signupFormFields,
    onSubmit: handleSubmit,
    style: {
      width: "400px",
    },
  },
};

export const LoginForm: Story = {
  args: {
    formSpecs: loginFormSpecs,
    onSubmit: handleSubmit,
  },
};
