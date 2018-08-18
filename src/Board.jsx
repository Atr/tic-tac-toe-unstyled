import React, { Component } from 'react';

import Cell from './Cell';

import store from './store';

import helpers from './helpers';

import { toggleGameState, resetGame } from './actions';

class Board extends Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);

    // this.state = {
    //   gameState: 'notFinished',
    //   gameBoard: helpers.returnEmptyBoard(),
    //   nextPiece: 'X',
    // };

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
    if (gameState !== 'finished' && helpers.checkIfGameWinner(gameBoard)) {
      this.endGame();
    }
  }

  componentWillUnmount() {
    // We don't have to worry about it in this particular case, but best practice is
    // for a component to unsubscribe when it unmounts.
    this.unsubscribe();
  }

  // TO DO NEXT: Declare this in Cell instead
  // handleClick(x, y) {
  //   const { gameState, gameBoard } = this.state;
  //   if (gameState !== 'finished') {
  //     if (!gameBoard[x][y]) {
  //       this.placePiece(x, y);
  //     }
  //   }
  // }

  // TO DO NEXT: Declare this in Cell instead
  // placePiece(x, y) {
  //   this.setState((prevState) => {
  //     let { gameBoard, nextPiece } = prevState;
  //     gameBoard[x][y] = nextPiece;
  //     nextPiece === 'X' ? nextPiece = 'O' : nextPiece = 'X';
  //     return {
  //       gameBoard,
  //       nextPiece,
  //     };
  //   });
  // }

  endGame() {
    store.dispatch(toggleGameState());

    // this.setState((prevState) => {
    //   let { gameState } = prevState;
    //   gameState = 'finished';
    //   return { gameState };
    // });
  }

  resetGame() {
    store.dispatch(resetGame());
    // this.setState({
    //   gameState: 'notFinished',
    //   gameBoard: helpers.returnEmptyBoard(),
    //   nextPiece: 'X',
    // });
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

// const Board = ({
//   nextPiece,
//   gameState,
//   gameBoard,
//   handleClick,
//   resetGame,
// }) => {
//   let gameStatus;
//   if (gameState === 'notFinished') {
//     gameStatus = `The next piece is ${nextPiece}`;
//   } else {
//     gameStatus = 'Game over!  We have a winner.';
//   }

//   return (
//     <div>
//       <div>
//         {gameStatus}
//       </div>
//       {gameBoard.map((gameRow, index) => {
//         return (
//           <div className={`row-${index}`}>
//             {gameRow.map((cell, index2) => {
//               return (
//                 <Cell
//                   value={gameBoard[index][index2]}
//                   handleClick={handleClick}
//                   x={index}
//                   y={index2}
//                 />
//               );
//             })}
//           </div>
//         );
//       })}
//       <button type='button' onClick={resetGame}>
//         Reset The Game
//       </button>
//     </div>
//   );
// };
