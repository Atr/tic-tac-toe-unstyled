import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Board from './Board';
import Cell from './Cell';

import helpers from './helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderCell = this.renderCell.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);

    this.state = {
      gameState: 'notStarted',
      gameBoard: helpers.returnEmptyBoard(),
      nextPiece: 'X',
    };
  }

  componentDidMount() {
    // if necessary
  }

  handleClick(x, y) {
    this.setState((prevState) => {
      let { gameBoard, nextPiece } = prevState;
      if (!gameBoard[x][y]) {
        gameBoard[x][y] = nextPiece;
        nextPiece === 'X' ? nextPiece = 'O' : nextPiece = 'X';
        return {
          gameBoard,
          nextPiece,
        };
      }
    });
  }

  renderCell(x, y) {
    const { gameBoard } = this.state;
    return (
      <Cell
        value={gameBoard[x][y]}
        handleClick={() => this.handleClick(x, y)}
      />
    );
  }

  resetGame() {
    this.setState({
      gameState: 'notStarted',
      gameBoard: helpers.returnEmptyBoard(),
      nextPiece: 'X',
    });
  }

  render() {
    return (
      <div className='App'>
        <Board
          nextPiece={this.state.nextPiece}
          renderCell={this.renderCell}
          resetGame={this.resetGame}
        />
      </div>
    );
  }
}

export default hot(module)(App);
