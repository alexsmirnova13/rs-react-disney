import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('renders the Header component', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<App />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('renders the HomePage component when the "/" path is requested', () => {
    render(<App />);
    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument();
  });

  it('navigates to the AboutPage when the About link is clicked', () => {
    render(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);
    const aboutPage = screen.getByTestId('about-page');
    expect(aboutPage).toBeInTheDocument();
  });
});
