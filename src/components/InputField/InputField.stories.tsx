import React, { useState } from "react";
import InputField, { InputFieldProps } from "./InputField";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof InputField> = {
  title: "components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
const renderInputField = ({ value, ...rest }: InputFieldProps) => {
  const [val, setVal] = useState(value);
  const err = val || !rest.required ? "" : rest.error;
  return (
    <InputField
      {...rest}
      error={err}
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
      }}
    />
  );
};
export default meta;
type Story = StoryObj<typeof InputField>;
export const Default: Story = {
  render: renderInputField,
  args: {
    type: "text",
    label: "Enter the value",
    required: true,
    error: "Required",
  },
};
export const Disabled: Story = {
  render: renderInputField,
  args: {
    type: "text",
    label: "Enter the value",
    disabled: true,
  },
};
