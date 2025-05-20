import type { Meta, StoryObj } from "@storybook/react";
import { MovieTile } from "../components/MovieTile";
import { moviesList } from "../sample-data/data";

const meta = {
  title: "Components/MovieTile",
  component: MovieTile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: moviesList[0],
    onClick: (movie) => console.log("Movie clicked:", movie),
    onEdit: (movie) => console.log("Edit movie:", movie),
    onDelete: (movie) => console.log("Delete movie:", movie),
  },
};

export const DifferentMovie: Story = {
  args: {
    movie: moviesList[1],
    onClick: (movie) => console.log("Movie clicked:", movie),
    onEdit: (movie) => console.log("Edit movie:", movie),
    onDelete: (movie) => console.log("Delete movie:", movie),
  },
};

export const WithManyGenres: Story = {
  args: {
    movie: moviesList[2],
    onClick: (movie) => console.log("Movie clicked:", movie),
    onEdit: (movie) => console.log("Edit movie:", movie),
    onDelete: (movie) => console.log("Delete movie:", movie),
  },
};
