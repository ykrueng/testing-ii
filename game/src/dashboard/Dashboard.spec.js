import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders the display', () => {
    const { getByTestId } = render(<Dashboard />);

    const dashboard = getByTestId('dashboard');

    expect(dashboard).toHaveTextContent('Dashboard');
  })

  describe('Strike button', () => {
    const { getByTestId } = render(<Dashboard />);
    const strike = getByTestId('strike');
    const strikeCount = getByTestId('strikes');
    const outCount = getByTestId('outs');

    it('should increment strikes', () => {
      fireEvent.click(strike);
      expect(strikeCount).toHaveTextContent(/1 strikes/i);
      fireEvent.click(strike);
      expect(strikeCount).toHaveTextContent(/2 strikes/i);
    });

    it('should reset strikes to 0 on 3rd strikes', () => {
      fireEvent.click(strike);
      expect(strikeCount).toHaveTextContent(/0 strikes/i);
    });

    it('should add 1 out on 3rd strikes', () => {
      expect(outCount).toHaveTextContent(/1 outs/i)
    });

    it('should reset strikes to 0 on second 3rd strikes', () => {
      fireEvent.click(strike);
      fireEvent.click(strike);
      fireEvent.click(strike);
      expect(strikeCount).toHaveTextContent(/0 strikes/i);
    });

    it('should add to 2 outs on second 3rd strikes', () => {
      expect(outCount).toHaveTextContent(/2 outs/i)
    });

    it('should reset strikes to 0 on third 3rd strikes', () => {
      fireEvent.click(strike);
      fireEvent.click(strike);
      fireEvent.click(strike);
      expect(strikeCount).toHaveTextContent(/0 strikes/i);
    });

    it('should reset out to zero on 3rd strikes', () => {
      expect(outCount).toHaveTextContent(/0 outs/i)
    });
  });

  describe('Ball button', () => {
    const { getByTestId } = render(<Dashboard />);
    const ball = getByTestId('ball');
    const ballCount = getByTestId('balls');

    it('should increment balls', () => {
      fireEvent.click(ball);
      expect(ballCount).toHaveTextContent(/1 balls/i);
      fireEvent.click(ball);
      expect(ballCount).toHaveTextContent(/2 balls/i);
      fireEvent.click(ball);
      expect(ballCount).toHaveTextContent(/3 balls/i);
    });

    it('should reset balls to 0 on forth ball', () => {
      fireEvent.click(ball);
      expect(ballCount).toHaveTextContent(/0 balls/i);
    });
  });

  describe('Hit button', () => {
    const { getByTestId } = render(<Dashboard />);
    const hit = getByTestId('hit');
    const strike = getByTestId('strike');
    const ball = getByTestId('ball');
    const ballCount = getByTestId('balls');
    const strikeCount = getByTestId('strikes');

    it('should reset to 0', () => {
      fireEvent.click(strike);
      fireEvent.click(hit);
      expect(strikeCount).toHaveTextContent(/0 strikes/i);
      expect(ballCount).toHaveTextContent(/0 balls/i);
    });

    it('should reset to 0', () => {
      fireEvent.click(ball);
      fireEvent.click(hit);
      expect(strikeCount).toHaveTextContent(/0 strikes/i);
      expect(ballCount).toHaveTextContent(/0 balls/i);
    });
  });

  describe('Foul button', () => {
    const { getByTestId } = render(<Dashboard />);
    const foul = getByTestId('foul');
    const strikeCount = getByTestId('strikes');

    it('should increment strikes', () => {
      fireEvent.click(foul);
      expect(strikeCount).toHaveTextContent(/1 strikes/i);
      fireEvent.click(foul);
      expect(strikeCount).toHaveTextContent(/2 strikes/i);
    });

    it('should no increase past 2', () => {
      fireEvent.click(foul);
      fireEvent.click(foul);
      expect(strikeCount).toHaveTextContent(/2 strikes/i);
    });
  });
});