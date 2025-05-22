import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Counter } from "../components/Counter";

describe("Counter", () => {
  it("renders with initial value from props", () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);

    const counterDisplay = screen.getByText(`Counter: ${initialValue}`);
    expect(counterDisplay).toBeInTheDocument();
  });

  it("decrements the counter when decrease button is clicked", async () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);

    const decreaseButton = screen.getByText("Decrease");
    await userEvent.click(decreaseButton);

    const counterDisplay = screen.getByText(`Counter: ${initialValue - 1}`);
    expect(counterDisplay).toBeInTheDocument();
  });

  it("increments the counter when increase button is clicked", async () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);

    const increaseButton = screen.getByText("Increase");
    await userEvent.click(increaseButton);

    const counterDisplay = screen.getByText(`Counter: ${initialValue + 1}`);
    expect(counterDisplay).toBeInTheDocument();
  });
});
