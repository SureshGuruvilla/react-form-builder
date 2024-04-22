import type { Meta, StoryObj } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import { useEffect, useState } from "react";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const renderCheckbox = ({ checked, ...rest }: CheckboxProps) => {
  const [check, setCheck] = useState(checked);
  useEffect(() => {
    setCheck(checked);
  }, [checked]);
  const handleCheck = () => {
    setCheck(!check);
  };
  const err = check || !rest.required ? "" : rest.error;
  return (
    <Checkbox {...rest} error={err} checked={check} onChange={handleCheck} />
  );
};
export const Valid: Story = {
  render: renderCheckbox,
  args: {
    label: "Label",
    error: "Required Field",
    required: true,
    checked: true,
  },
};
export const Invalid: Story = {
  render: renderCheckbox,
  args: {
    label: "Label",
    error: "Required Field",
    required: true,
  },
};
export const Diasbled: Story = {
  render: renderCheckbox,
  args: {
    label: "Label",
    disabled: true,
  },
};
