import React from 'react';
import {  render, screen } from '@testing-library/react';
import CardsComponent from './CardsComponent';

test('renders cards section', () => {
  render(<CardsComponent/>);
  const sectionElement = screen.getByTestId("cardsSection");
  expect(sectionElement).toBeInTheDocument();
});




