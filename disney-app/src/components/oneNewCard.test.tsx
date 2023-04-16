import React from 'react';
import { render, screen } from '@testing-library/react';
import { INewHero } from 'data/HPResponse.models';
import OneNewCard from './oneNewCard';

const item: INewHero = {
  name: 'Test',
  dateOfBirth: '31-07-1980',
  wizard: true,
  house: 'Gryffindor',
  gender: 'male',
  image: 'https://rs.school/images/rs_school-og.png',
  checked: true,
  id: 'dsfsdfsfsdf',
};
window.URL.createObjectURL = jest.fn();
describe('NewCard tests:', () => {
  beforeEach(() => {
    render(<OneNewCard card={item} key={item.id} />);
  });

  it('New card mounted', () => {
    expect(screen.getByTestId('new-card')).toBeInTheDocument();
  });

  it('new card has name "Test"', () => {
    expect(screen.getByText(item.name as string)).toBeInTheDocument();
  });
});
