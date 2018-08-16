import React from 'react';

import { returnEmptyBoard } from './helpers';
import configureStore from './configureStore';

const initialState = {
  gameBoard: returnEmptyBoard(),
  nextPiece: 'X',
  gameState: 'notFinished',
};

const store = configureStore(initialState);

export default store;
