import type { Meta, StoryObj } from "@storybook/react";
import { SortSelect } from "../components/SortSelect";

const meta = {
  title: "Components/SortSelect",
  component: SortSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SortSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedSort: "release_date",
    onSort: (value) => console.log("Sort changed:", value),
  },
};

export const TitleSort: Story = {
  args: {
    selectedSort: "title",
    onSort: (value) => console.log("Sort changed:", value),
  },
};
