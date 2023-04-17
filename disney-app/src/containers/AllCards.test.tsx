import React from 'react';
import { render } from '@testing-library/react';
import AllCards from './AllCards';

describe('AllCards component', () => {
  const cards = [
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
  ];
  it('renders without crashing', () => {
    render(<AllCards cards={[]} handleParentClick={() => 'da'} />);
  });

  it('passes correct props to OneCard component', () => {
    const { container } = render(<AllCards cards={[]} handleParentClick={() => 'da'} />);
    const oneCardComponents = container.querySelectorAll('.one-card');
    oneCardComponents.forEach((node, i) => {
      expect(node).toHaveAttribute('card', JSON.stringify(cards[i]));
    });
  });
});
