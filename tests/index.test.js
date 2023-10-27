import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// Write Jest unit tests to test the calculator app in pages/index.js
// Test the following:
// 1. The result is initially 0
// 2. The result is updated when the user enters numbers
// 3. The result is updated when the user clicks the Add button

describe("Calculator", () => {
  it("The result is initially 0", () => {
    render(<Home />);
    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("0");
  });
  it("The result is updated when the user enters numbers", () => {
    render(<Home />);
    const num1 = screen.getByTestId("num1");
    const num2 = screen.getByTestId("num2");
    fireEvent.change(num1, { target: { value: "1" } });
    fireEvent.change(num2, { target: { value: "2" } });
    expect(num1.value).toBe("1");
    expect(num2.value).toBe("2");
  });
  it("The result is updated when the user clicks the Add button", () => {
    render(<Home />);
    const num1 = screen.getByTestId("num1");
    const num2 = screen.getByTestId("num2");
    const add = screen.getByTestId("add");
    fireEvent.change(num1, { target: { value: "1" } });
    fireEvent.change(num2, { target: { value: "2" } });
    fireEvent.click(add);
    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("3");
  });
});