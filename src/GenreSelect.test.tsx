import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { GenreSelect } from "./App";

describe("GenreSelect", () => {
  const mockGenres = ["Action", "Comedy", "Drama"];
  const mockOnSelect = jest.fn();
  const selectedGenre = "Comedy";

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it("renders all genres passed in props", () => {
    render(
      <GenreSelect
        genres={mockGenres}
        onSelect={mockOnSelect}
        selectedGenre={selectedGenre}
      />
    );

    mockGenres.forEach((genre) => {
      const genreButton = screen.getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });
  });

  it("highlights the selected genre", () => {
    render(
      <GenreSelect
        genres={mockGenres}
        onSelect={mockOnSelect}
        selectedGenre={selectedGenre}
      />
    );

    const selectedButton = screen.getByText(selectedGenre);
    expect(selectedButton).toHaveStyle({ backgroundColor: "red" });

    // Verify other buttons are not highlighted
    mockGenres
      .filter((genre) => genre !== selectedGenre)
      .forEach((genre) => {
        const button = screen.getByText(genre);
        expect(button).toHaveStyle({ backgroundColor: "inherit" });
      });
  });

  it("calls onSelect with correct genre when a genre button is clicked", async () => {
    render(
      <GenreSelect
        genres={mockGenres}
        onSelect={mockOnSelect}
        selectedGenre={selectedGenre}
      />
    );

    const genreToClick = "Action";
    const genreButton = screen.getByText(genreToClick);
    await userEvent.click(genreButton);

    expect(mockOnSelect).toHaveBeenCalledWith(genreToClick);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });
});
