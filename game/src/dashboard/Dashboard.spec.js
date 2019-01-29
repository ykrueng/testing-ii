import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders the display', () => {
    const { getByTestId } = render(<Dashboard />);

    const dashboard = getByTestId('dashboard');

    expect(dashboard).toHaveTextContent('Dashboard');
  })
});