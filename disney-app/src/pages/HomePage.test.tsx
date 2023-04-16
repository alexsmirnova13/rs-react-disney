import { testData } from 'utils/server';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'redux/store';
import HomePage from './HomePage';

export const handlers = [
  rest.get('https://kitsu.io/api/edge/anime/', (req, res, ctx) => {
    return res(ctx.json(testData), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const store = setupStore({});

describe('API-calls test', () => {
  it('return king', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    const king = screen.getByText('king');
    expect(king).toBeInTheDocument();
    fireEvent.click(king);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
    const closeModalButton = screen.getByTestId('modal-close');
    fireEvent.click(closeModalButton);
    expect(modal).not.toBeInTheDocument();
  });
});
