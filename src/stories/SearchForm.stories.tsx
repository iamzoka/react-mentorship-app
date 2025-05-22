import type { Meta, StoryObj } from "@storybook/react";
import { SearchForm } from "../components/SearchForm";

const meta = {
  title: "Components/SearchForm",
  component: SearchForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: "",
    onSearch: (value) => console.log("Search value:", value),
  },
};

export const WithInitialValue: Story = {
  args: {
    initialValue: "Initial search term",
    onSearch: (value) => console.log("Search value:", value),
  },
};

export const WithLongInitialValue: Story = {
  args: {
    initialValue:
      "This is a very long initial search term that might need to be truncated",
    onSearch: (value) => console.log("Search value:", value),
  },
};
