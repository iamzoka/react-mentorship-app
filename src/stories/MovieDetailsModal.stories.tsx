import type { Meta, StoryObj } from "@storybook/react";
import { MovieDetailsModal } from "../components/MovieDetailsModal";
import { moviesList } from "../sample-data/data";

const meta = {
  title: "Components/MovieDetailsModal",
  component: MovieDetailsModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MovieDetailsModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: moviesList[0],
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
};

export const Closed: Story = {
  args: {
    movie: moviesList[0],
    isOpen: false,
    onClose: () => console.log("Modal closed"),
  },
};

export const DifferentMovie: Story = {
  args: {
    movie: moviesList[1],
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
};
