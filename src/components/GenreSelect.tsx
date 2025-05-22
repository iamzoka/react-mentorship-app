import React from "react";
import { Button } from "./ui/button";
import { GenreSelectProps } from "@/types";

export const GenreSelect = ({
  genres,
  onSelect,
  selectedGenre,
}: GenreSelectProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Button
          key={genre}
          onClick={() => onSelect(genre)}
          variant={
            genre.toLowerCase() === selectedGenre.toLowerCase()
              ? "default"
              : "outline"
          }
          data-testid="genre-select-button"
        >
          {genre}
        </Button>
      ))}
    </div>
  );
};
