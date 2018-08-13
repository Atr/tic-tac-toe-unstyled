import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Board from './Board';
import Cell from './Cell';

import helpers from './helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderCell = this.renderCell.bind(this);

    this.state = {
      gameState: 'notStarted',
      gameBoard: helpers.returnEmptyBoard(),
      nextPiece: 'X',
    };
  }

  componentDidMount() {
    
  }

  renderCell(x, y) {
    const { gameBoard } = this.state;
    return (
      <Cell
        value={gameBoard[x][y]}
      />
    );
  }

  // placePiece(cell) {
  //   const { nextPiece } = this.state;

  //   if (nextPiece === 'X') {
  //     this.setState({
  //       nextPiece: 'Y',
  //     });
  //   } else {
  //     this.setState({
  //       nextPiece: 'X',
  //     });
  //   }
  // }

  render() {
    return (
      <div className='App'>
        <Board renderCell={this.renderCell} />
      </div>
    );
  }
}

export default hot(module)(App);
