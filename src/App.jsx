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
    this.endGame = this.endGame.bind(this);
    this.placePiece = this.placePiece.bind(this);

    this.state = {
      gameState: 'notFinished',
      gameBoard: helpers.returnEmptyBoard(),
      nextPiece: 'X',
    };
  }

  componentDidMount() {
    // if necessary
  }

  componentDidUpdate() {
    const { gameBoard, gameState } = this.state;
    if (gameState !== 'finished' && helpers.checkIfGameWinner(gameBoard)) {
      this.endGame();
    }
  }

  handleClick(x, y) {
    const { gameState, gameBoard } = this.state;
    if (gameState !== 'finished') {
      if (!gameBoard[x][y]) {
        this.placePiece(x, y);
      }
    }
  }

  placePiece(x, y) {
    this.setState((prevState) => {
      let { gameBoard, nextPiece } = prevState;
      gameBoard[x][y] = nextPiece;
      nextPiece === 'X' ? nextPiece = 'O' : nextPiece = 'X';
      return {
        gameBoard,
        nextPiece,
      };
    });
  }

  endGame() {
    this.setState((prevState) => {
      let { gameState } = prevState;
      gameState = 'finished';
      return { gameState };
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
      gameState: 'notFinished',
      gameBoard: helpers.returnEmptyBoard(),
      nextPiece: 'X',
    });
  }

  render() {
    return (
      <div className='App'>
        <Board
          nextPiece={this.state.nextPiece}
          gameState={this.state.gameState}
          renderCell={this.renderCell}
          resetGame={this.resetGame}
        />
      </div>
    );
  }
}

export default hot(module)(App);
