import React, { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { GenreSelect } from "./components/GenreSelect";
import { MovieTile } from "./components/MovieTile";
import { genresArray, moviesList } from "./sample-data/data";
import { SortSelect } from "./components/SortSelect";
import { MovieDetailsModal } from "./components/MovieDetailsModal";
import { SortOption } from "./types";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(genresArray[2]);
  const [selectedSort, setSelectedSort] = useState<SortOption>("release_date");
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex flex-col items-center justify-center mx-auto py-4">
          <h1 className="text-2xl font-bold mb-4">React Mentoring App</h1>
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
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))}
        </div>
      </main>

      {selectedMovieData && (
        <MovieDetailsModal
          movie={selectedMovieData}
          isOpen={!!selectedMovie}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
