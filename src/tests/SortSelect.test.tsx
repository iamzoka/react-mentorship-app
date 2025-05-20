import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SortSelect } from "../components/SortSelect";

describe("SortSelect", () => {
  const mockOnSort = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with default sort option", () => {
    render(<SortSelect selectedSort="release_date" onSort={mockOnSort} />);

    expect(screen.getByText("Sort By:")).toBeInTheDocument();
    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveTextContent("Release Date");
  });

  it("renders with title sort option", () => {
    render(<SortSelect selectedSort="title" onSort={mockOnSort} />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveTextContent("Title");
  });

  it("calls onSort when a different option is selected", () => {
    render(<SortSelect selectedSort="release_date" onSort={mockOnSort} />);

    const select = screen.getByRole("combobox");
    fireEvent.click(select);

    const titleOption = screen.getByRole("option", { name: "Title" });
    fireEvent.click(titleOption);

    expect(mockOnSort).toHaveBeenCalledWith("title");
  });

  it("shows all available sort options", () => {
    render(<SortSelect selectedSort="release_date" onSort={mockOnSort} />);

    const select = screen.getByRole("combobox");
    fireEvent.click(select);

    const options = screen.getAllByRole("option");
    const optionTexts = options.map((option) => option.textContent);

    expect(optionTexts).toContain("Release Date");
    expect(optionTexts).toContain("Title");
  });
});
