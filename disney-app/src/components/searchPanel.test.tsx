import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPanel from './searchPanel';

describe('Card tests:', () => {
  beforeEach(() => {
    render(<SearchPanel />);
  });

  it('search panel mounted', () => {
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });

  it('input mounted', () => {
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
});
