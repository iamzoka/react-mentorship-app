import React from "react";
import { Movie } from "@/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const MovieForm = ({
  movieData,
  onSubmit,
  isEdit,
}: {
  movieData: Movie;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isEdit: boolean;
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-6">
        <div className="w-4/6 space-y-4">
          <Input
            type="text"
            placeholder="Movie name"
            defaultValue={movieData?.name}
          />

          <Input
            type="text"
            placeholder="Image URL"
            defaultValue={movieData?.imageUrl}
          />

          <Input
            type="text"
            placeholder="Select genres"
            defaultValue={movieData?.genres}
          />
        </div>

        <div className="w-2/6 space-y-4">
          <Input
            type="text"
            placeholder="Release year"
            defaultValue={movieData?.releaseYear}
          />
          <Input
            type="number"
            placeholder="Rating"
            defaultValue={movieData?.rating}
          />
          <Input
            type="text"
            placeholder="Duration"
            defaultValue={movieData?.duration}
          />
        </div>
      </div>
      <div className="w-full my-4">
        <Textarea
          placeholder="Movie description"
          defaultValue={movieData?.description}
        />
      </div>
      <Button type="submit">{isEdit ? "Edit movie" : "Add movie"}</Button>
    </form>
  );
};
