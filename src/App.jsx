import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Board from './Board';

import helpers from './helpers';

class App extends Component {
  constructor(props) {
    super(props);

    // bind area

    this.state = {
      gameState: 'notStarted',
      gameBoard: [],
    };
  }

  componentDidMount() {
    this.state.gameBoard = helpers.returnEmptyBoard();
  }

  render() {
    return (
      <div className='App'>
        <Board />
      </div>
    );
  }
}

export default hot(module)(App);
