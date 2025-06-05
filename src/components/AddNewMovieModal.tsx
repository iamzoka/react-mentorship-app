import React from "react";
import { AddNewMovieModalProps } from "@/types";
import { MovieForm } from "./MovieForm";
import { DialogWrapper } from "./DialogWrapper";

export const AddNewMovieModal = ({
  movieData,
  isOpen,
  onClose,
  onSubmit,
}: AddNewMovieModalProps) => {
  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle="Add new movie"
    >
      <MovieForm
        movieData={
          movieData
            ? movieData
            : {
                id: "",
                name: "",
                imageUrl: "",
                genres: [],
                releaseYear: 0,
                rating: 0,
                duration: "",
                description: "",
              }
        }
        onSubmit={onSubmit}
      />
    </DialogWrapper>
  );
};
