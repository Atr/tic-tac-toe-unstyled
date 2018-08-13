import React from 'react';

import Cell from './Cell';

const Board = props => (
  <div>
    <div className='row'>
      <Cell />
      <Cell />
      <Cell />
    </div>
    <div className='row'>
      <Cell />
      <Cell />
      <Cell />
    </div>
    <div className='row'>
      <Cell />
      <Cell />
      <Cell />
    </div>
  </div>
);


export default Board;
