// import React from 'react';
// import { render } from '@testing-library/react';
// import AllCards from './AllCards';

// describe('AllCards component', () => {
//   const cards = [
//     {
//       id: '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
//       name: 'Harry Potter',
//       alternate_names: ['The Boy Who Lived', 'The Chosen One'],
//       species: 'human',
//       gender: 'male',
//       house: 'Gryffindor',
//       dateOfBirth: '31-07-1980',
//       yearOfBirth: 1980,
//       wizard: true,
//       ancestry: 'half-blood',
//       eyeColour: 'green',
//       hairColour: 'black',
//       wand: {
//         wood: 'holly',
//         core: 'phoenix feather',
//         length: 11,
//       },
//       patronus: 'stag',
//       hogwartsStudent: true,
//       hogwartsStaff: false,
//       actor: 'Daniel Radcliffe',
//       alternate_actors: [],
//       alive: true,
//       image: 'https://ik.imagekit.io/hpapi/harry.jpg',
//     },
//   ];
//   it('renders without crashing', () => {
//     render(<AllCards cards={[]} />);
//   });

//   it('passes correct props to OneCard component', () => {
//     const { container } = render(<AllCards cards={cards} />);
//     const oneCardComponents = container.querySelectorAll('.one-card');
//     oneCardComponents.forEach((node, i) => {
//       expect(node).toHaveAttribute('card', JSON.stringify(cards[i]));
//     });
//   });
// });
