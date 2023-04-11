import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import axios from 'axios';
import HomePage from './HomePage';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockData = {
  data: [
    {
      attributes: {
        canonicalTitle: 'test',
        ageRating: 'test',
        posterImage: {
          large: 'test',
          small: 'test',
          tiny: 'test',
        },
        createdAt: 'test',
        description: 'test',
        endDate: 'test',
        episodeCount: 2,
        episodeLength: 2,
        favoritesCount: 2,
        popularityRank: 2,
        status: 'test',
        synopsis: 'test',
        titles: {
          en: 'test',
          en_jp: 'test',
        },
      },
      id: 'test',
    },
    {
      attributes: {
        canonicalTitle: 'test1',
        ageRating: 'test1',
        posterImage: {
          large: 'test1',
          small: 'test1',
          tiny: 'test1',
        },
        createdAt: 'test1',
        description: 'test1',
        endDate: 'test1',
        episodeCount: 1,
        episodeLength: 1,
        favoritesCount: 1,
        popularityRank: 1,
        status: 'test1',
        synopsis: 'test1',
        titles: {
          en: 'test1',
          en_jp: 'test1',
        },
      },
      id: 'test1',
    },
  ],
};
beforeAll(() => {
  mockedAxios.get.mockResolvedValue(mockData);
});
describe('HomePage', () => {
  it('renders AllCards component after data is loaded', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockData });
    render(<HomePage />);
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));
    expect(screen.getAllByRole('card')).toHaveLength(2);
  });

  it('renders error', async () => {
    mockedAxios.get.mockResolvedValue({ data: { data: [] } });
    render(<HomePage />);
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));
    expect(screen.getByTestId('error')).toBeInTheDocument();
  });
});
