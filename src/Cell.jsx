import React from 'react';

import store from './store';

import { placePiece } from './actions';

const Cell = ({
  value,
  handleClick,
  x,
  y,
}) => (
  <button type='button' className='cell' onClick={() => store.dispatch(placePiece(x, y))}>
    {value}
  </button>
);

export default Cell;
