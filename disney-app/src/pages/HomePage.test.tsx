// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import axios from 'axios';
// import HomePage from './HomePage';

// describe('Card tests:', () => {
//   render(<HomePage />);

//   it('home-page component mounted', () => {
//     expect(screen.getByTestId('home-page')).toBeInTheDocument();
//   });
// });

// jest.mock('axios');

// const mockData = {
//   data: [
//     {
//       id: '1',
//       attributes: {
//         canonicalTitle: 'Anime 1',
//         posterImage: {
//           small: 'http://example.com/anime1.jpg',
//         },
//       },
//     },
//     {
//       id: '2',
//       attributes: {
//         canonicalTitle: 'Anime 2',
//         posterImage: {
//           small: 'http://example.com/anime2.jpg',
//         },
//       },
//     },
//   ],
// };

// describe('HomePage', () => {
//   beforeEach(() => {
//     axios.get.mockResolvedValue({ data: { data: [] } });
//   });

//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it('should render search panel, loader, and all cards', async () => {
//     axios.get.mockResolvedValueOnce({ data: mockData });
//     render(<HomePage />);

//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();

//     expect(screen.getByRole('status')).toBeInTheDocument();

//     await waitFor(() => {
//       expect(screen.getAllByRole('img')).toHaveLength(2);
//       expect(screen.getAllByRole('heading')).toHaveLength(2);
//     });
//   });

//   it('should render modal after clicking on card', async () => {
//     axios.get.mockResolvedValueOnce({ data: mockData });
//     render(<HomePage />);

//     await waitFor(() => {
//       expect(screen.getAllByRole('img')).toHaveLength(2);
//       expect(screen.getAllByRole('heading')).toHaveLength(2);
//     });

//     userEvent.click(screen.getAllByRole('button', { name: /details/i })[0]);

//     expect(screen.getByRole('dialog')).toBeInTheDocument();
//     expect(screen.getByRole('heading', { name: /anime 1/i })).toBeInTheDocument();
//   });

//   it('should update search results after submitting a search term', async () => {
//     axios.get.mockResolvedValueOnce({ data: mockData });
//     render(<HomePage />);

//     userEvent.type(screen.getByRole('textbox'), 'anime 1');
//     userEvent.click(screen.getByRole('button', { name: /search/i }));

//     expect(axios.get).toHaveBeenCalledWith('https://kitsu.io/api/edge/anime', {
//       params: {
//         'page[limit]': 10,
//         'page[offset]': 0,
//         'filter[text]': 'anime%201',
//       },
//     });

//     await waitFor(() => {
//       expect(screen.getAllByRole('img')).toHaveLength(1);
//       expect(screen.getAllByRole('heading')).toHaveLength(1);
//       expect(screen.getByRole('heading', { name: /anime 1/i })).toBeInTheDocument();
//     });
//   });
// });

// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import axios from 'axios';
// import HomePage from './HomePage';
// import React from 'react';

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;
// const mockData = {
//   data: [
//     {
//       id: '1',
//       attributes: {
//         canonicalTitle: 'Anime 1',
//         posterImage: {
//           small: 'http://example.com/anime1.jpg',
//         },
//       },
//     },
//     {
//       id: '2',
//       attributes: {
//         canonicalTitle: 'Anime 2',
//         posterImage: {
//           small: 'http://example.com/anime2.jpg',
//         },
//       },
//     },
//   ],
// };

// describe('HomePage', () => {
//   beforeEach(() => {
//     mockedAxios.get.mockResolvedValue({ data: { data: [] } });
//   });

//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it('should render search panel, loader, and all cards', async () => {
//     mockedAxios.get.mockResolvedValue({ data: mockData });
//     render(<HomePage />);
//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();

//     expect(screen.getByRole('status')).toBeInTheDocument();

//     await waitFor(() => {
//       expect(screen.getAllByRole('img')).toHaveLength(2);
//       expect(screen.getAllByRole('heading')).toHaveLength(2);
//     });
//   });

//   it('should render modal after clicking on card', async () => {
//     mockedAxios.get.mockResolvedValue({ data: mockData });
//     render(<HomePage />);
//     await waitFor(() => {
//       expect(screen.getAllByRole('img')).toHaveLength(2);
//       expect(screen.getAllByRole('heading')).toHaveLength(2);
//     });

//     userEvent.click(screen.getAllByRole('button', { name: /details/i })[0]);

//     expect(screen.getByRole('dialog')).toBeInTheDocument();
//     expect(screen.getByRole('heading', { name: /anime 1/i })).toBeInTheDocument();
//   });

//   it('should update search results after submitting a search term', async () => {
//     mockedAxios.get.mockResolvedValue({ data: mockData });
//     render(<HomePage />);
//     userEvent.type(screen.getByRole('textbox'), 'anime 1');
//     userEvent.click(screen.getByRole('button', { name: /search/i }));

//     expect(axios.get).toHaveBeenCalledWith('https://kitsu.io/api/edge/anime', {
//       params: {
//         'page[limit]': 10,
//         'page[offset]': 0,
//         'filter[text]': 'anime%201',
//       },
//     });

//     await waitFor(() => {
//       expect(screen.getAllByRole('img')).toHaveLength(1);
//       expect(screen.getAllByRole('heading')).toHaveLength(1);
//       expect(screen.getByRole('heading', { name: /anime 1/i })).toBeInTheDocument();
//     });
//   });
// });

