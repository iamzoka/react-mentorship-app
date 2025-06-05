import React from "react";
import { MovieDetailsModalProps } from "@/types";
import { DialogWrapper } from "./DialogWrapper";
import { Button } from "./ui/button";

export const DeleteMovieModal = ({
  movieData,
  isOpen,
  onClose,
}: MovieDetailsModalProps) => {
  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle={`Delete movie: ${movieData.name}`}
    >
      <div>Are you sure you want to delete this movie?</div>
      <div className="flex justify-end">
        <Button variant="destructive" onClick={onClose}>
          Delete
        </Button>
      </div>
    </DialogWrapper>
  );
};
