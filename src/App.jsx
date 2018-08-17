import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Board from './Board';

import helpers from './helpers';

import store from './store';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);

    // this.state = {
    //   gameState: 'notFinished',
    //   gameBoard: helpers.returnEmptyBoard(),
    //   nextPiece: 'X',
    // };

    // Fetch initial state
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
    if (gameState !== 'finished' && helpers.checkIfGameWinner(gameBoard)) {
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
          gameBoard={this.state.gameBoard}
          handleClick={this.handleClick}
          resetGame={this.resetGame}
        />
      </div>
    );
  }
}

export default hot(module)(App);
