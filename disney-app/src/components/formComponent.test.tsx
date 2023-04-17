import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FormComponent from './formComponent';

window.URL.createObjectURL = jest.fn();
describe('FormComponent', () => {
  it('should show error message for name input when submit button is clicked with a name less than 3 characters', async () => {
    render(<FormComponent onParentSubmit={() => 'da'} />);
    const nameInput = screen.getByPlaceholderText('New hero name');
    fireEvent.change(nameInput, { target: { value: 'ab' } });
    const submitButton = screen.getByRole('button', { name: 'Create' });
    fireEvent.click(submitButton);
    const errorMessage = await screen.findByText('min length is 3');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should show error message for name input when submit button is clicked with a name longer than 30 characters', async () => {
    render(<FormComponent onParentSubmit={() => 'da'} />);
    const nameInput = screen.getByPlaceholderText('New hero name');
    fireEvent.change(nameInput, {
      target: { value: 'abcdefghijklmnopqrstuvwxyz12345' },
    });
    const submitButton = screen.getByRole('button', { name: 'Create' });
    fireEvent.click(submitButton);
    const errorMessage = await screen.findByText('max length is 30');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should show error message for select input when submit button is clicked with no option selected', async () => {
    render(<FormComponent onParentSubmit={() => 'da'} />);
    const submitButton = screen.getByRole('button', { name: 'Create' });
    fireEvent.click(submitButton);
    const errorMessage = await screen.findByText('Please choose your house');
    expect(errorMessage).toBeInTheDocument();
  });
});
