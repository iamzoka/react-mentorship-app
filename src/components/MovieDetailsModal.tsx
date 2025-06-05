import React from "react";
import { MovieDetailsModalProps } from "@/types";
import { DialogWrapper } from "./DialogWrapper";

export const MovieDetailsModal = ({
  movieData,
  isOpen,
  onClose,
}: MovieDetailsModalProps) => {
  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle={movieData.name}
    >
      <div className="flex gap-6">
        <div className="w-1/3">
          <img
            src={movieData.imageUrl}
            alt={movieData.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-2/3 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">
              {movieData.releaseYear}
            </span>
            <span className="text-gray-500">{movieData.duration}</span>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span>{movieData.rating}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {movieData.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">
              Description
            </h3>
            <p className="text-gray-700">{movieData.description}</p>
          </div>
        </div>
      </div>
    </DialogWrapper>
  );
};
