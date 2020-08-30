import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one', rolling: false };
  }

  randomDice = () => {
    const dices = ['one', 'two', 'three', 'four', 'five', 'six'];
    let random1 = Math.floor(Math.random() * dices.length);
    let random2 = Math.floor(Math.random() * dices.length);
    this.setState({
      die1: dices[random1],
      die2: dices[random2],
      rolling: true,
    });

    // Wait One Second then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <Die face={this.state.die1} rolling={this.state.rolling} />
        <Die face={this.state.die2} rolling={this.state.rolling} />
        <div className="RollDice-button">
          <button
            onClick={this.randomDice}
            disabled={this.state.rolling}
            className={this.state.rolling && 'desabeld'}
          >
            {this.state.rolling ? 'Rolling...' : 'Random Roll'}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
