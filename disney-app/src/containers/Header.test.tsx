import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header tests:', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it('header component mounted', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
