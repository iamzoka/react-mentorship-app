import React from "react";
import { render, screen } from "@testing-library/react";
import { DialogWrapper } from "../components/DialogWrapper";

describe("DialogWrapper", () => {
  const mockOnClose = jest.fn();
  const mockTitle = "Test Dialog Title";
  const mockChildren = <div>Test Content</div>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders dialog when open", () => {
    render(
      <DialogWrapper
        isOpen={true}
        onClose={mockOnClose}
        dialogTitle={mockTitle}
      >
        {mockChildren}
      </DialogWrapper>
    );

    // Check if dialog title is rendered
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    // Check if children content is rendered
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("does not render content when closed", () => {
    render(
      <DialogWrapper
        isOpen={false}
        onClose={mockOnClose}
        dialogTitle={mockTitle}
      >
        {mockChildren}
      </DialogWrapper>
    );

    // Check if dialog title is not rendered
    expect(screen.queryByText(mockTitle)).not.toBeInTheDocument();
    // Check if children content is not rendered
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });
});
