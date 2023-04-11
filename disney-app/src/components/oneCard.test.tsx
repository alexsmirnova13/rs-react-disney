import React from 'react';
import { render, screen } from '@testing-library/react';
import OneCard from './oneCard';
import { IAnime } from 'data/HPResponse.models';

const item: IAnime = {
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
};

describe('Card tests:', () => {
  beforeEach(() => {
    render(<OneCard card={item} key={item.id} onClick={() => 'da'} />);
  });

  it('card mounted', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('card has title "test card title"', () => {
    expect(screen.getByText(item.attributes.canonicalTitle)).toBeInTheDocument();
  });
});
