import React from 'react';

const Board = ({ renderCell }) => (
  <div>
    <div className='row-1'>
      {renderCell(0, 0)}
      {renderCell(0, 1)}
      {renderCell(0, 2)}
    </div>
    <div className='row-2'>
      {renderCell(1, 0)}
      {renderCell(1, 1)}
      {renderCell(1, 2)}
    </div>
    <div className='row-3'>
      {renderCell(2, 0)}
      {renderCell(2, 1)}
      {renderCell(2, 2)}
    </div>
  </div>
);

export default Board;
