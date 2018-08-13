import React from 'react';

const Cell = ({ value }) => (
  <button type='button' className='cell'>
    {value}
  </button>
);

export default Cell;
