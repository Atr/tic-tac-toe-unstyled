import React from 'react';

const Cell = ({ value, handleClick }) => (
  <button type='button' className='cell' onClick={handleClick}>
    {value}
  </button>
);

export default Cell;
