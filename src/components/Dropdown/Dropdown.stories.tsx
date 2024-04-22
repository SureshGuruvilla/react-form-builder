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
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;
export const Sample: Story = {
  render: ({ options, ...rest }) => {
    const [state, setState] = useState("");
    const onSelect = (val) => {
      setState(val);
    };
    return (
      <Dropdown {...rest} onSelect={onSelect} value={state} options={options} />
    );
  },
  args: {
    options: ["one", "two", "three"],
    emptyText: "Empty Text",
  },
};
