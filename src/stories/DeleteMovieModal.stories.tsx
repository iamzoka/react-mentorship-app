import type { Meta, StoryObj } from "@storybook/react";
import { DeleteMovieModal } from "../components/DeleteMovieModal";
import { moviesList } from "../sample-data/data";

const meta = {
  title: "Components/DeleteMovieModal",
  component: DeleteMovieModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DeleteMovieModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
    movieData: moviesList[0],
    onClose: () => console.log("Modal closed"),
  },
};

export const DifferentMovie: Story = {
  args: {
    isOpen: true,
    movieData: moviesList[1],
    onClose: () => console.log("Modal closed"),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    movieData: moviesList[0],
    onClose: () => console.log("Modal closed"),
  },
};
