import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { MovieDetailsModalProps } from "@/types";

export const MovieDetailsModal = ({
  movie,
  isOpen,
  onClose,
}: MovieDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{movie.name}</DialogTitle>
        </DialogHeader>
        <div className="flex gap-6">
          <div className="w-1/3">
            <img
              src={movie.imageUrl}
              alt={movie.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-2/3 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold">{movie.releaseYear}</span>
              <span className="text-gray-500">{movie.duration}</span>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span>{movie.rating}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-1">
                Genres
              </h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
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
              <p className="text-gray-700">{movie.description}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
