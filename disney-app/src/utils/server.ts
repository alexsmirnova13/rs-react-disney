import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const testData = {
  data: [
    {
      attributes: {
        canonicalTitle: 'king',
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

const handlers = [
  rest.get('https://kitsu.io/api/edge/anime/', (req, res, ctx) => {
    return res(ctx.json(testData), ctx.delay(150));
  }),
];

export const server = setupServer(...handlers);
