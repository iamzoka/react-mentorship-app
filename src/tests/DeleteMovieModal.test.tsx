import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DeleteMovieModal } from "../components/DeleteMovieModal";
import { moviesList } from "../sample-data/data";

describe("DeleteMovieModal", () => {
  const mockMovie = moviesList[0];
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders delete confirmation when open", () => {
    render(
      <DeleteMovieModal
        movieData={mockMovie}
        isOpen={true}
        onClose={mockOnClose}
      />
    );

    // Check if dialog title is rendered with movie name
    expect(
      screen.getByText(`Delete movie: ${mockMovie.name}`)
    ).toBeInTheDocument();
    // Check if confirmation message is rendered
    expect(
      screen.getByText("Are you sure you want to delete this movie?")
    ).toBeInTheDocument();
    // Check if delete button is rendered
    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  });

  it("does not render content when closed", () => {
    render(
      <DeleteMovieModal
        movieData={mockMovie}
        isOpen={false}
        onClose={mockOnClose}
      />
    );

    // Check if dialog title is not rendered
    expect(
      screen.queryByText(`Delete movie: ${mockMovie.name}`)
    ).not.toBeInTheDocument();
    // Check if confirmation message is not rendered
    expect(
      screen.queryByText("Are you sure you want to delete this movie?")
    ).not.toBeInTheDocument();
    // Check if delete button is not rendered
    expect(
      screen.queryByRole("button", { name: "Delete" })
    ).not.toBeInTheDocument();
  });

  it("calls onClose when delete button is clicked", () => {
    render(
      <DeleteMovieModal
        movieData={mockMovie}
        isOpen={true}
        onClose={mockOnClose}
      />
    );

    const deleteButton = screen.getByRole("button", { name: "Delete" });
    fireEvent.click(deleteButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
