import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

window.URL.createObjectURL = jest.fn();
describe('FormPage', () => {
  test('renders page header', () => {
    render(<FormPage />);
    const headerElement = screen.getByText(/Заполните форму нового героя/i);
    expect(headerElement).toBeInTheDocument();
  });
});
