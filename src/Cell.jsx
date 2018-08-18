import React from 'react';

import store from './store';

import { placePiece } from './actions';

const Cell = ({
  value,
  x,
  y,
}) => {

  const handleClick = (x, y) => {
    const { gameState, gameBoard } = store.getState();
    if (gameState !== 'finished') {
      if (!gameBoard[x][y]) {
        store.dispatch(placePiece(x, y));
      }
    }
  };

  return (
    <button type='button' className='cell' onClick={() => handleClick(x, y)}>
      {value}
    </button>
  );
};

export default Cell;
