import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    let faceDie = `fas fa-dice-${this.props.face}`;
    return (
      <i
        className={`${this.props.rolling && 'rolling'} Die-icon ${faceDie}`}
      ></i>
    );
  }
}

export default Die;
