import React from 'react';
import { hot } from 'react-hot-loader';

import Board from './Board';

const App = () => (
  <div className='App'>
    <Board />
  </div>
);

export default hot(module)(App);
