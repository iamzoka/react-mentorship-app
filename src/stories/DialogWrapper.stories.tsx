import type { Meta, StoryObj } from "@storybook/react";
import { DialogWrapper } from "../components/DialogWrapper";

const meta = {
  title: "Components/DialogWrapper",
  component: DialogWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DialogWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("Dialog closed"),
    dialogTitle: "Sample Dialog",
    children: (
      <div className="p-4">This is some sample content for the dialog.</div>
    ),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => console.log("Dialog closed"),
    dialogTitle: "Sample Dialog",
    children: (
      <div className="p-4">This is some sample content for the dialog.</div>
    ),
  },
};
