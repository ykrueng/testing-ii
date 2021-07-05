import React from 'react';

import Display from '../display/Display';

class Dashboard extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    outs: 0
  }

  ball = () => {
    const { balls } = this.state;
    if (balls === 3) {
      this.setState({ balls: 0, strikes: 0})
    } else {
      this.setState({ balls: balls + 1})
    }
  }

  strike = () => {
    const { strikes, outs } = this.state;
    if (strikes === 2) {
      this.setState({ balls: 0, strikes: 0, outs: outs === 2 ? 0 : outs + 1 })
    } else {
      this.setState({ strikes: strikes + 1 })
    }
  }

  hit = () => {
    this.setState({ balls: 0, strikes: 0 })
  }

  foul = () => {
    const { strikes } = this.state;
    if (strikes < 2) {
      this.setState({ strikes: strikes + 1 })
    } else {
      return
    }
  }

  render() {
    const { strikes, balls, outs } = this.state;
    return (
      <div data-testid='dashboard'>
        Dashboard
        <button onClick={this.strike} data-testid='strike'>Strike</button>
        <button onClick={this.ball} data-testid='ball'>Ball</button>
        <button onClick={this.foul} data-testid='foul'>Foul</button>
        <button onClick={this.hit} data-testid='hit'>Hit</button>
        <Display strikes={ strikes } balls={ balls } outs={ outs }/>
      </div>
    )
  }
}

export default Dashboard;