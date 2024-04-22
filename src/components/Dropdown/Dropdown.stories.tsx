import React, { useState } from "react";
import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Dropdown> = {
  title: "components/Dropdown",
  component: Dropdown,
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
type Story = StoryObj<typeof Dropdown>;
const renderDropdown = ({ options, ...rest }) => {
  const [state, setState] = useState("");
  const onSelect = (val: string) => {
    setState(val);
  };
  const err = state || !rest.required ? "" : rest.error;

  return (
    <Dropdown
      {...rest}
      error={err}
      onSelect={onSelect}
      value={state}
      options={options}
    />
  );
};
export const Sample: Story = {
  render: renderDropdown,
  args: {
    options: ["one", "two", "three"],
    emptyText: "Empty Text",
    label: "Select any value",
    required: true,
    error: "Required Field",
  },
};
export const Disabled: Story = {
  render: renderDropdown,
  args: {
    options: ["one", "two", "three"],
    disabled: true,
  },
};
