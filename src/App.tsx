import React, { FormEvent, useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { GenreSelect } from "./components/GenreSelect";
import { MovieTile } from "./components/MovieTile";
import { genresArray, moviesList } from "./sample-data/data";
import { SortSelect } from "./components/SortSelect";
import { MovieDetailsModal } from "./components/MovieDetailsModal";
import { Movie, SortOption } from "./types";
import { Button } from "./components/ui/button";
import { AddNewMovieModal } from "./components/AddNewMovieModal";
import { EditMovieModal } from "./components/EditMovieModal";
import { DeleteMovieModal } from "./components/DeleteMovieModal";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(genresArray[2]);
  const [selectedSort, setSelectedSort] = useState<SortOption>("release_date");
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false);
  const [isEditMovieModalOpen, setIsEditMovieModalOpen] = useState(false);
  const [editMovie, setEditMovie] = useState<Movie | null>(null);
  const [isDeleteMovieModalOpen, setIsDeleteMovieModalOpen] = useState(false);
  const [deleteMovie, setDeleteMovie] = useState<Movie | null>(null);
  const [addNewMovie, setAddNewMovie] =
    useState<FormEvent<HTMLFormElement> | null>(null);

  const dummyMovieData = {
    id: "1",
    name: "The Dark Knight",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 9.0,
    imageUrl: "public/movie-cover-the-dark-knight.png",
    duration: "120 min",
    description:
      "A crime drama about a vigilante who fights crime in Gotham City.",
  };

  const handleSearch = (value: string) => {
    console.log("Search value:", value);
    setSelectedGenre(value);
  };

  const handleSort = (value: SortOption) => {
    console.log("Yet to implement sort, but still logging: ", value);
    setSelectedSort(value);
  };

  const handleMovieClick = (movieId: string) => {
    setSelectedMovie(movieId);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const selectedMovieData = selectedMovie
    ? moviesList.find((movie) => movie.id === selectedMovie)
    : null;

  const handleAddNewMovie = (data: FormEvent<HTMLFormElement>) => {
    data.preventDefault();
    setAddNewMovie(data);
    console.log("Add New Movie:", addNewMovie);
    setIsAddMovieModalOpen(false);
  };

  const handleEditMovie = (movie: Movie) => {
    setIsEditMovieModalOpen(true);
    setEditMovie(movie);
  };

  const handleEditMovieSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditMovieModalOpen(false);
  };

  const handleDeleteMovie = (movie: Movie) => {
    setIsDeleteMovieModalOpen(true);
    setDeleteMovie(movie);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between mx-auto py-4">
          <h1 className="text-2xl font-bold mb-4">Netflix roulette</h1>
          <Button
            onClick={() => {
              setIsAddMovieModalOpen(true);
            }}
            variant="default"
          >
            Add movie
          </Button>
        </div>

        <div className="container flex flex-col items-center justify-center mx-auto py-4">
          <SearchForm initialValue={genresArray[2]} onSearch={handleSearch} />
        </div>
      </header>

      <main className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-4">
          <GenreSelect
            genres={genresArray}
            onSelect={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
          <SortSelect onSort={handleSort} selectedSort={selectedSort} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {moviesList.map((movie) => (
            <MovieTile
              key={movie.id}
              movie={movie}
              onClick={() => handleMovieClick(movie.id)}
              onEdit={() => handleEditMovie(movie)}
              onDelete={() => handleDeleteMovie(movie)}
            />
          ))}
        </div>
      </main>

      {selectedMovieData && (
        <MovieDetailsModal
          movieData={selectedMovieData}
          isOpen={!!selectedMovie}
          onClose={handleCloseModal}
        />
      )}

      <AddNewMovieModal
        movieData={dummyMovieData}
        isOpen={isAddMovieModalOpen}
        onSubmit={handleAddNewMovie}
        onClose={() => setIsAddMovieModalOpen(false)}
      />

      <EditMovieModal
        movieData={editMovie ? editMovie : undefined}
        isOpen={isEditMovieModalOpen}
        onSubmit={handleEditMovieSubmit}
        onClose={() => setIsEditMovieModalOpen(false)}
      />

      <DeleteMovieModal
        movieData={
          deleteMovie
            ? deleteMovie
            : {
                id: "",
                name: "",
                releaseYear: 0,
                genres: [],
                imageUrl: "",
                duration: "",
                description: "",
              }
        }
        isOpen={isDeleteMovieModalOpen}
        onClose={() => setIsDeleteMovieModalOpen(false)}
      />
    </div>
  );
}

export default App;
