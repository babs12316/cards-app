import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchInputComponent from "./SearchInputComponent";

describe("test SearchInputComponent", () => {
  test("renders search input", () => {
    const handleChangeInput = jest.fn();
    render(<SearchInputComponent onChangeSearchInput={handleChangeInput} />);
    const inputElement = screen.getByPlaceholderText(/Search.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("clears input value", () => {
    const handleChangeInput = jest.fn();
    render(<SearchInputComponent onChangeSearchInput={handleChangeInput} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByPlaceholderText("Search...").nodeValue).toBe(null);
  });
});
