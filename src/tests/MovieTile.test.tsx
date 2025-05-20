import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MovieTile } from "../components/MovieTile";
import { moviesList } from "../sample-data/data";

describe("MovieTile", () => {
  const mockMovie = moviesList[0];
  const mockOnClick = jest.fn();
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders movie information correctly", () => {
    render(
      <MovieTile
        movie={mockMovie}
        onClick={mockOnClick}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    expect(screen.getByText(mockMovie.name)).toBeInTheDocument();
    expect(
      screen.getByText(mockMovie.releaseYear.toString())
    ).toBeInTheDocument();

    mockMovie.genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it("calls onClick when movie tile is clicked", () => {
    render(
      <MovieTile
        movie={mockMovie}
        onClick={mockOnClick}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const movieTile = screen.getByTestId("movie-tile-link");
    fireEvent.click(movieTile);
    expect(mockOnClick).toHaveBeenCalledWith(mockMovie);
  });

  it("renders movie image with correct attributes", () => {
    render(
      <MovieTile
        movie={mockMovie}
        onClick={mockOnClick}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const image = screen.getByRole("img", { name: mockMovie.name });
    expect(image).toHaveAttribute("src", mockMovie.imageUrl);
    expect(image).toHaveAttribute("alt", mockMovie.name);
  });
});
