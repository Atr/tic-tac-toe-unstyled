import React from 'react';

import Cell from './Cell';

const Board = ({
  nextPiece,
  gameState,
  gameBoard,
  handleClick,
  resetGame,
}) => {
  let gameStatus;
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
                  handleClick={handleClick}
                  x={index}
                  y={index2}
                />
              );
            })}
          </div>
        );
      })}
      <button type='button' onClick={resetGame}>
        Reset The Game
      </button>
    </div>
  );
};

export default Board;
