import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './modal';

const currentCard = {
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
describe('Modal tests:', () => {
  beforeEach(() => {
    render(<Modal onClose={() => 'da'} card={currentCard} />);
  });

  it('modal panel mounted', () => {
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
