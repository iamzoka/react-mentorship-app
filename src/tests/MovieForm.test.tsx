import React from "react";
import { render, screen } from "@testing-library/react";
import { MovieForm } from "../components/MovieForm";
import { moviesList } from "../sample-data/data";

describe("MovieForm", () => {
  const mockMovie = moviesList[0];
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders form with movie data in edit mode", () => {
    render(
      <MovieForm movieData={mockMovie} onSubmit={mockOnSubmit} isEdit={true} />
    );

    // Check if form elements are rendered
    expect(screen.getByPlaceholderText("Movie name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Image URL")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Select genres")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Release year")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Rating")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Duration")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Movie description")
    ).toBeInTheDocument();

    // Check if submit button is rendered with correct text
    expect(
      screen.getByRole("button", { name: "Edit movie" })
    ).toBeInTheDocument();
  });

  it("renders form with movie data in add mode", () => {
    render(
      <MovieForm movieData={mockMovie} onSubmit={mockOnSubmit} isEdit={false} />
    );

    // Check if submit button is rendered with correct text
    expect(
      screen.getByRole("button", { name: "Add movie" })
    ).toBeInTheDocument();
  });

  it("renders form with empty movie data", () => {
    const emptyMovie = {
      id: "",
      name: "",
      imageUrl: "",
      genres: [],
      releaseYear: 0,
      rating: 0,
      duration: "",
      description: "",
    };

    render(
      <MovieForm
        movieData={emptyMovie}
        onSubmit={mockOnSubmit}
        isEdit={false}
      />
    );

    // Check if form elements are rendered
    expect(screen.getByPlaceholderText("Movie name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Image URL")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Select genres")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Release year")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Rating")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Duration")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Movie description")
    ).toBeInTheDocument();
  });
});
