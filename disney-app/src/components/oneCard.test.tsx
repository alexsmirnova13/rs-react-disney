import React from 'react';
import { render, screen } from '@testing-library/react';
import OneCard from './oneCard';
import { IHero } from 'data/HPResponse.models';

const item: IHero = {
  id: '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
  name: 'Harry Potter',
  alternate_names: ['The Boy Who Lived', 'The Chosen One'],
  species: 'human',
  gender: 'male',
  house: 'Gryffindor',
  dateOfBirth: '31-07-1980',
  yearOfBirth: 1980,
  wizard: true,
  ancestry: 'half-blood',
  eyeColour: 'green',
  hairColour: 'black',
  wand: {
    wood: 'holly',
    core: 'phoenix feather',
    length: 11,
  },
  patronus: 'stag',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Daniel Radcliffe',
  alternate_actors: [],
  alive: true,
  image: 'https://ik.imagekit.io/hpapi/harry.jpg',
};

describe('Card tests:', () => {
  beforeEach(() => {
    render(<OneCard card={item} key={item.id} />);
  });

  it('card mounted', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('card has title "test card title"', () => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
  });
});
