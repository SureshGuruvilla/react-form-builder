import type { Meta, StoryObj } from "@storybook/react";
import RadioButton, { RadioButtonProps } from "./RadioButton";
import { ChangeEvent, useState } from "react";
import React from "react";

const meta: Meta<typeof RadioButton> = {
  title: "components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
    },
    options: {
      control: "object",
    },
    value: {
      control: "text",
    },
    label: {
      control: "text",
    },
    className: {
      control: "text",
    },
    style: {
      control: "object",
    },
    required: {
      control: "boolean",
    },
    error: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

const renderRadioButton = ({
  id,
  options,
  value,
  ...rest
}: RadioButtonProps) => {
  const [val, setVal] = useState(value);
  const err = val || !rest.required ? "" : rest.error;
  return (
    <RadioButton
      {...rest}
      id={id}
      error={err}
      options={options}
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
      }}
    />
  );
};

export const Default: Story = {
  render: renderRadioButton,
  args: {
    id: "option",
    value: "two",
    options: ["one", "two"],
    required: true,
    error: "Required Field",
    label: "Select any value",
  },
};
export const Disabled: Story = {
  render: renderRadioButton,
  args: {
    id: "option",
    options: ["one", "two"],
    disabled: true,
    label: "Select any value",
  },
};
