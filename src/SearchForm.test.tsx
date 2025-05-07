import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { SearchForm } from "./App";

describe("SearchForm", () => {
  const mockOnSearch = jest.fn();
  const initialValue = "test value";

  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  it("renders input with initial value from props", () => {
    render(<SearchForm initialValue={initialValue} onSearch={mockOnSearch} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue(initialValue);
  });

  it("calls onSearch with input value when submit button is clicked", async () => {
    render(<SearchForm initialValue={initialValue} onSearch={mockOnSearch} />);

    const input = screen.getByRole("textbox");
    const submitButton = screen.getByTestId("search-button");

    await userEvent.clear(input);
    await userEvent.type(input, "new search value");
    await userEvent.click(submitButton);

    expect(mockOnSearch).toHaveBeenCalledWith("new search value");
  });

  it("calls onSearch with input value when Enter key is pressed", async () => {
    render(<SearchForm initialValue={initialValue} onSearch={mockOnSearch} />);

    const input = screen.getByRole("textbox");

    await userEvent.clear(input);
    await userEvent.type(input, "new search value");
    await userEvent.keyboard("{Enter}");

    expect(mockOnSearch).toHaveBeenCalledWith("new search value");
  });
});
