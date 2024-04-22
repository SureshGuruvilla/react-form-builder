import React from "react";
import InputField from "./InputField";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof InputField> = {
  title: "components/InputField",
  component: InputField,
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
    type: {
      options: [
        "text",
        "password",
        "color",
        "number",
        "datetime-local",
        "file",
      ],
      control: "select",
    },
    required: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;
export const Text: Story = {
  args: {
    type: "text",
  },
};
export const Password: Story = {
  args: {
    type: "password",
  },
};
export const Color: Story = {
  args: {
    type: "color",
  },
};
export const Number: Story = {
  args: {
    type: "number",
  },
};
export const DateTime: Story = {
  args: {
    type: "datetime-local",
    min: "2022-01-01T00:00",
    max: "2022-12-31T23:59",
  },
};
export const File: Story = {
  args: {
    type: "file",
  },
};
