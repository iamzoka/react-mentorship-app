import type { Meta, StoryObj } from "@storybook/react";
import { EditMovieModal } from "../components/EditMovieModal";
import { moviesList } from "../sample-data/data";

const meta = {
  title: "Components/EditMovieModal",
  component: EditMovieModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EditMovieModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
    movieData: moviesList[0],
    onClose: () => console.log("Modal closed"),
    onSubmit: (e) => {
      e.preventDefault();
      console.log("Form submitted");
    },
  },
};

export const DifferentMovie: Story = {
  args: {
    isOpen: true,
    movieData: moviesList[1],
    onClose: () => console.log("Modal closed"),
    onSubmit: (e) => {
      e.preventDefault();
      console.log("Form submitted with different movie");
    },
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    movieData: moviesList[0],
    onClose: () => console.log("Modal closed"),
    onSubmit: (e) => {
      e.preventDefault();
      console.log("Form submitted");
    },
  },
};
