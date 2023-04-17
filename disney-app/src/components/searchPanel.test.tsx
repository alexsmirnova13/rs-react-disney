import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPanel from './searchPanel';
import { Provider } from 'react-redux';
import { setupStore } from 'redux/store';

const store = setupStore({});
describe('search panel tests:', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchPanel onParentEnter={() => 'da'} />
      </Provider>
    );
  });

  it('search panel mounted', () => {
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });

  it('input mounted', () => {
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
});
