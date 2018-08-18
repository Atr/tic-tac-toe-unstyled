import React, { Component } from 'react';

import Cell from './Cell';

import store from './store';

import { checkIfGameWinner } from './helpers';

import { toggleGameState, resetGame, placePiece } from './actions';

class Board extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    // Fetch initial state
    // Note that if this component didn't need everything in state, doing this would be less efficient
    // than using the connect method.
    this.state = store.getState();
  }

  componentDidMount() {
    // On mount, we want our component to subscribe to the store
    // Ie, we want our App's state to reflect store's state every time store's state changes
    // So we  add an event listener to be run every time store's state changes
    // (I'll be refactoring this later but for now it works..)
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    // Helpful reference: https://nickdrane.com/write-your-own-redux-connect/
  }

  componentDidUpdate() {
    const { gameBoard, gameState } = this.state;
    if (gameState !== 'finished' && checkIfGameWinner(gameBoard)) {
      this.endGame();
    }
  }

  componentWillUnmount() {
    // We don't have to worry about it in this particular case, but best practice is
    // for a component to unsubscribe when it unmounts.
    this.unsubscribe();
  }

  handleClick(x, y) {
    const { gameState, gameBoard } = this.state;
    if (gameState !== 'finished') {
      if (!gameBoard[x][y]) {
        store.dispatch(placePiece(x, y));
      }
    }
  }

  endGame() {
    store.dispatch(toggleGameState());
  }

  resetGame() {
    store.dispatch(resetGame());
  }

  render() {
    let gameStatus;
    const { gameState, gameBoard, nextPiece } = this.state;
    if (gameState === 'notFinished') {
      gameStatus = `The next piece is ${nextPiece}`;
    } else {
      gameStatus = 'Game over!  We have a winner.';
    }

    return (
      <div>
        <div>
          {gameStatus}
        </div>
        {gameBoard.map((gameRow, index) => {
          return (
            <div className={`row-${index}`}>
              {gameRow.map((cell, index2) => {
                return (
                  <Cell
                    value={gameBoard[index][index2]}
                    handleClick={this.handleClick}
                    x={index}
                    y={index2}
                  />
                );
              })}
            </div>
          );
        })}
        <button type='button' onClick={this.resetGame}>
          Reset The Game
        </button>
      </div>
    );
  }
}

export default Board;
