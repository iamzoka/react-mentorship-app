import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "../components/Counter";

const meta = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: 0,
  },
};

export const WithInitialValue: Story = {
  args: {
    initialValue: 5,
  },
};

export const NegativeValue: Story = {
  args: {
    initialValue: -3,
  },
};
