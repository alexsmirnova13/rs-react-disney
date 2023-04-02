import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('Card tests:', () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  it('all cards component mounted', () => {
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
