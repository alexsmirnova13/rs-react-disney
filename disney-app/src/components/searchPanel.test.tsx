import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPanel from './searchPanel';

describe('search panel tests:', () => {
  beforeEach(() => {
    render(<SearchPanel onParentEnter={() => 'da'} />);
  });

  it('search panel mounted', () => {
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });

  it('input mounted', () => {
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
});
