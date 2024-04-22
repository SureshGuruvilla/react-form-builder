import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

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
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Sample: Story = {
  args: {
    id: "option",
    options: ["one", "two"],
    onChange: () => {},
  },
};
