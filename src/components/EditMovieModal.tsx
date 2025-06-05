import React from "react";
import { AddNewMovieModalProps } from "@/types";
import { MovieForm } from "./MovieForm";
import { DialogWrapper } from "./DialogWrapper";

export const EditMovieModal = ({
  movieData,
  isOpen,
  onClose,
  onSubmit,
}: AddNewMovieModalProps) => {
  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle={`Edit movie: ${movieData?.name}`}
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
        isEdit={true}
      />
    </DialogWrapper>
  );
};
