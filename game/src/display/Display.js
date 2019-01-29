import React from 'react';

const Display = ({ strikes, balls, outs }) => {
  return (
    <div data-testid="display">
      Display
      <div data-testid="strikes">{strikes} strikes</div>
      <div data-testid="balls">{balls} balls</div>
      <div data-testid="outs">{outs} outs</div>
    </div>
  )
}

export default Display;