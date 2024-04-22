import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
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
      options: ["button", "submit"],
      control: "select",
    },
    children: {
      control: "text",
    },
    className: {
      control: "text",
    },
    style: {
      control: "object",
    },
    onClick: {
      if: { arg: "type", eq: "button" },
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Genreric: Story = {
  args: {
    id: "button",
    type: "button",
    children: "Generic",
    onClick: action("custom"),
  },
};
export const Submit: Story = {
  args: {
    id: "submit",
    type: "submit",
    children: "Submit",
  },
};
export const Disabled: Story = {
  args: {
    id: "submit",
    type: "submit",
    children: "Disabled",
    disabled: true,
  },
};
