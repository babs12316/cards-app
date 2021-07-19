import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CardComponent from "./CardComponent";
import { ICard } from "../../constants/interfaces";

const testDate = new Date("August 19, 2020 23:15:30");

const testCard: ICard = {
  id: 1,
  title: "test title",
  description: "test description",
  caseSensitive: true,
  translatable: false,
  forbidden: true,
  createdAt: testDate,
  createdBy: { id: 2, fullName: "John Wick" },
};

describe("testing card component", () => {

  test("render correct title", () => {
    render(<CardComponent card={testCard} />);
    const titleElement = screen.getByText("test title");
    expect(titleElement).toBeInTheDocument();
  });

  test("render correct description", () => {
    render(<CardComponent card={testCard} />);
    const descriptionElement = screen.getByText("test description");
    expect(descriptionElement).toBeInTheDocument();
  });

  test("render correct category", () => {
    render(<CardComponent card={testCard} />);
    const categoryElement = screen.getByText("Case Sensitive");
    expect(categoryElement).toBeInTheDocument();
  });
});
