import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('Card tests:', () => {
  render(<HomePage />);

  it('home-page component mounted', () => {
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
