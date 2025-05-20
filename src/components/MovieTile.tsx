import React from "react";
import { MovieTileProps } from "@/types";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export const MovieTile = ({
  movie,
  onClick,
  onEdit,
  onDelete,
}: MovieTileProps) => {
  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      data-testid="movie-tile"
    >
      <div
        className="cursor-pointer"
        onClick={() => onClick(movie)}
        data-testid="movie-tile-link"
      >
        <div className="aspect-[2/3] relative">
          <img
            src={movie.imageUrl}
            alt={movie.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{movie.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            {movie.releaseYear}
          </p>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              data-testid="movie-tile-menu-button"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onEdit(movie)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(movie)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
