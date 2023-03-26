import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './notification';

describe('Notification tests:', () => {
  beforeEach(() => {
    render(<Message message="Удачно" />);
  });

  it('notification mounted', () => {
    expect(screen.getByTestId('message')).toBeInTheDocument();
  });
});
