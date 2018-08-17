import React from 'react';

const Cell = ({
  value,
  handleClick,
  x,
  y,
}) => (
  <button type='button' className='cell' onClick={() => handleClick(x, y)}>
    {value}
  </button>
);

export default Cell;
