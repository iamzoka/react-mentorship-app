import type { Meta, StoryObj } from "@storybook/react";
import { AddNewMovieModal } from "../components/AddNewMovieModal";
import { moviesList } from "../sample-data/data";

const meta = {
  title: "Components/AddNewMovieModal",
  component: AddNewMovieModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddNewMovieModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("Modal closed"),
    onSubmit: (e) => {
      e.preventDefault();
      console.log("Form submitted");
    },
  },
};

export const WithInitialData: Story = {
  args: {
    isOpen: true,
    movieData: moviesList[0],
    onClose: () => console.log("Modal closed"),
    onSubmit: (e) => {
      e.preventDefault();
      console.log("Form submitted with initial data");
    },
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => console.log("Modal closed"),
    onSubmit: (e) => {
      e.preventDefault();
      console.log("Form submitted");
    },
  },
};
