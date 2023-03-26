import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Card tests:', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('footer panel mounted', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
