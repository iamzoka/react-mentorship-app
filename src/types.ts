import { Dispatch, FormEventHandler, SetStateAction } from "react";

export type GenreSelectProps = {
  genres: string[];
  onSelect: Dispatch<SetStateAction<string>>;
  selectedGenre: string;
};

export type SearchFormProps = {
  initialValue: string;
  onSearch: (value: string) => void;
};

export type CounterState = {
  count: number;
};

export type Movie = {
  id: string;
  imageUrl: string;
  name: string;
  releaseYear: number;
  genres: string[];
  rating?: number;
  duration?: string;
  description?: string;
};

export type MovieDetailsModalProps = {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
};

export type SortOption = "release_date" | "title";

export type SortSelectProps = {
  onSort: (value: SortOption) => void;
  selectedSort: SortOption;
};

export type MovieTileProps = {
  movie: Movie;
  onClick: (movie: Movie) => void;
  onEdit: (movie: Movie) => void;
  onDelete: (movie: Movie) => void;
};

export type AddNewMovieModalProps = {
  movieData?: Movie;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export type DialogWrapperProps = {
  isOpen: boolean;
  onClose: () => void;
  dialogTitle: string;
  children: React.ReactNode;
};
