import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
  it('renders the display', () => {
    const { getByTestId } = render(<Display />);
    const display = getByTestId('display');
    expect(display).toHaveTextContent('Display');
  })
  
  it('renders scores', () => {
    const { getByTestId } = render(<Display />);
    const strikeCount = getByTestId('strikes');
    const ballCount = getByTestId('balls');
    const outCount = getByTestId('outs');
    expect(strikeCount).toHaveTextContent('strikes');
    expect(ballCount).toHaveTextContent('balls');
    expect(outCount).toHaveTextContent('outs');
  })
});