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
      <div className='row-1'>
        <Cell value={gameBoard[0][0]} handleClick={handleClick} x={0} y={0} />
        <Cell value={gameBoard[0][1]} handleClick={handleClick} x={0} y={1} />
        <Cell value={gameBoard[0][2]} handleClick={handleClick} x={0} y={2} />
      </div>
      <div className='row-2'>
        <Cell value={gameBoard[1][0]} handleClick={handleClick} x={1} y={0} />
        <Cell value={gameBoard[1][1]} handleClick={handleClick} x={1} y={1} />
        <Cell value={gameBoard[1][2]} handleClick={handleClick} x={1} y={2} />
      </div>
      <div className='row-3'>
        <Cell value={gameBoard[2][0]} handleClick={handleClick} x={2} y={0} />
        <Cell value={gameBoard[2][1]} handleClick={handleClick} x={2} y={1} />
        <Cell value={gameBoard[2][2]} handleClick={handleClick} x={2} y={2} />
      </div>
      <button type='button' onClick={resetGame}>
        Reset The Game
      </button>
    </div>
  );
};

export default Board;
