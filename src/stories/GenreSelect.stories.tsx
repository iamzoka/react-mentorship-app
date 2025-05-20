import type { Meta, StoryObj } from "@storybook/react";
import { GenreSelect } from "../components/GenreSelect";
import { useState } from "react";

const meta = {
  title: "Components/GenreSelect",
  component: GenreSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const [selectedGenre, setSelectedGenre] = useState("Action");
      return (
        <div style={{ padding: "20px" }}>
          <Story
            args={{
              genres: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
              selectedGenre,
              onSelect: setSelectedGenre,
            }}
          />
        </div>
      );
    },
  ],
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    genres: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
    selectedGenre: "Action",
    onSelect: () => {},
  },
};

export const WithCustomGenres: Story = {
  args: {
    genres: ["Rock", "Jazz", "Classical", "Pop", "Hip Hop"],
    selectedGenre: "Rock",
    onSelect: () => {},
  },
};
