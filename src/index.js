import React from 'react';
import ReactDOM from 'react-dom';

import { returnEmptyBoard } from './helpers';
import configureStore from './configureStore';

import App from './App';

const store = configureStore({
  gameBoard: returnEmptyBoard(),
  nextPiece: 'X',
  gameState: 'notFinished',
});

ReactDOM.render(<App />, document.getElementById('app'));

// For testing
// window.store = store;
