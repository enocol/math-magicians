import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './components/Calculator';

describe('Calculator component', () => {
  it('renders without errors', () => {
    render(<Calculator />);
  });

  it('updates the state when buttons are clicked', () => {
    const { getByText } = render(<Calculator />);

    // Simulate button clicks
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
  });
});
