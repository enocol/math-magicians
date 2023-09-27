import React from 'react';
import { render } from '@testing-library/react';
import Quotes from './components/quotes';

describe('Quotes component', () => {
  it('renders correctly when loading', () => {
    const { asFragment } = render(<Quotes state="loading" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly when an error occurs', () => {
    const { asFragment } = render(<Quotes state="error" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with quotes', () => {
    const { asFragment } = render(<Quotes state="success" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
