import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Card tests:', () => {
  beforeEach(() => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });

  it('footer panel mounted', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
