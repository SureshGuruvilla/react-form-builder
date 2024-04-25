import React from "react";
import Form from "./Form";
import { FormSpecProps, FormField } from "./@types";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Form> = {
  title: "Form/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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

const signUpFormSpecs = ({ resetData }: FormSpecProps) => {
  const formFields: FormField[] = [
    {
      id: "name",
      type: "row",
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
        {
          type: "column",
          id: "dt",
          fields: [
            {
              id: "date",
              type: "date",
              label: "Select date",
            },
            {
              id: "time",
              type: "time",
              label: "Select time",
            },
          ],
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
        },
        {
          id: "phoneno",
          type: "text",
          label: "Enter phoneno",
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
      id: "cta",
      type: "row",
      className: "no-responsive",
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
const handleSubmit = (isFormValid: boolean, data: any) => {
  console.log(isFormValid, data);
};
export const SignUpForm: Story = {
  args: {
    formSpecs: signUpFormSpecs,
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
