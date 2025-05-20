import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MovieDetailsModal } from "../components/MovieDetailsModal";
import { moviesList } from "../sample-data/data";

describe("MovieDetailsModal", () => {
  const mockMovie = moviesList[0];
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders movie details when open", () => {
    render(
      <MovieDetailsModal
        movie={mockMovie}
        isOpen={true}
        onClose={mockOnClose}
      />
    );

    expect(screen.getByText(mockMovie.name)).toBeInTheDocument();
    expect(
      screen.getByText(mockMovie.releaseYear.toString())
    ).toBeInTheDocument();
    expect(screen.getByText(mockMovie.duration)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.rating.toString())).toBeInTheDocument();
    expect(screen.getByText(mockMovie.description)).toBeInTheDocument();

    mockMovie.genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it("does not render content when closed", () => {
    render(
      <MovieDetailsModal
        movie={mockMovie}
        isOpen={false}
        onClose={mockOnClose}
      />
    );

    expect(screen.queryByText(mockMovie.name)).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(
      <MovieDetailsModal
        movie={mockMovie}
        isOpen={true}
        onClose={mockOnClose}
      />
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("renders movie image with correct attributes", () => {
    render(
      <MovieDetailsModal
        movie={mockMovie}
        isOpen={true}
        onClose={mockOnClose}
      />
    );

    const image = screen.getByRole("img", { name: mockMovie.name });
    expect(image).toHaveAttribute("src", mockMovie.imageUrl);
    expect(image).toHaveAttribute("alt", mockMovie.name);
  });
});
