import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from 'redux/store';

const store = setupStore({});
describe('App component', () => {
  it('renders the Header component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('renders the HomePage component when the "/" path is requested', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument();
  });

  it('navigates to the AboutPage when the About link is clicked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);
    const aboutPage = screen.getByTestId('about-page');
    expect(aboutPage).toBeInTheDocument();
  });
});
