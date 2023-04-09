import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

window.URL.createObjectURL = jest.fn();
describe('FormPage', () => {
  test('renders Form Page', () => {
    render(<FormPage />);
    const headerElement = screen.getByText(/make a new anime/i);
    expect(headerElement).toBeInTheDocument();
  });
});

describe('FormPage component', () => {
  it('renders the header', () => {
    render(<FormPage />);
    const header = screen.getByText('Make a new anime');
    expect(header).toBeInTheDocument();
  });

  it('renders the AllNewCards component', () => {
    render(<FormPage />);
    const allNewCardsComponent = screen.getByTestId('allNewCardsComponent');
    expect(allNewCardsComponent).toBeInTheDocument();
  });
});
