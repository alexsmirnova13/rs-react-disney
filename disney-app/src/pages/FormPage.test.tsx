import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';
import { Provider } from 'react-redux';
import { setupStore } from 'redux/store';

const store = setupStore({});

window.URL.createObjectURL = jest.fn();
describe('FormPage', () => {
  test('renders Form Page', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const headerElement = screen.getByText(/make a new anime/i);
    expect(headerElement).toBeInTheDocument();
  });
});

describe('FormPage component', () => {
  it('renders the header', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const header = screen.getByText('Make a new anime');
    expect(header).toBeInTheDocument();
  });

  it('renders the AllNewCards component', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const allNewCardsComponent = screen.getByTestId('allNewCardsComponent');
    expect(allNewCardsComponent).toBeInTheDocument();
  });
});
