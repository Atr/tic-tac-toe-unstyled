//NOTES:

// Reducers must be pure functions

// Reducers take the state of the application, the action being dispatched, and returns the new state of the application

// Reducers can call other reducers

// **From Luke: Using Redux's combineReducers function
// Each property of state has a reducer
  // Each property's reducer name should be exactly that of the property, because of how combineReducers works
  // If there's an aspect of state that doesn't have a corresponding reducer, that aspect will get overwritten
  // The last function in this reducers file will be combineReducers
// Under the hood, combineReducers runs each argument given to it by looking for a property with that name on state
// These reducer functions don't accept ALL of state.  They should accept whatever piece of state they modify.
// See documentation: https://redux.js.org/api/combinereducers

// **From Beth: Moving past combineReducers
// Agree that in idiomatic Redux, there is one reducer per property
// That lends itself to combineReducers
// But, that's only if pieces of state don't talk to one another or rely on one another
// If they do, then that paradigm doesn't work
// In which case, you might:
  // Store those related pieces in one object at a property of state
  // AND/OR
  // Create your own custom combineReducers function, in order to allow reducers to accept other state parameters as args
// SEE THIS DOCUMENTATION for more: https://redux.js.org/recipes/structuringreducers/beyondcombinereducers

// // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // //

// Helpers

const returnEmptyBoard = () => {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  return board;
};

const switchPieces = (piece) => { 
  return piece === 'X' ? 'O' : 'X';
};

const switchGameState = (state) => { 
  return state === 'notFinished' ? 'finished' : 'notFinished';
};

// Reducers

const gameBoard = (state = returnEmptyBoard(), action, nextPiece) => {
  switch (action.type) {
    case 'PLACE_PIECE': {
      let newBoard = [...state];
      newBoard[action.x][action.y] = nextPiece;
      return newBoard;
    }
    default: return state;
  }
};

// If for any reason we want to toggle a piece without placing a piece, we can do that:
const nextPiece = (state = 'X', action) => {
  switch (action.type) {
    case 'PLACE_PIECE': {
      return switchPieces(state);
    }
    case 'TOGGLE_PIECE': {
      return switchPieces(state);
    }
    default: return state;
  }
};

const gameState = (state = 'notFinished', action) => {
  switch (action.type) {
    case 'TOGGLE_GAME_STATE': {
      return switchGameState(state);
    }
    default: return state;
  }
};

// Custom root reducer

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'PLACE_PIECE': {
      return {
        gameBoard: gameBoard(state.gameBoard, action, state.nextPiece),
        nextPiece: nextPiece(state.nextPiece, action),
        gameState: gameState(state.gameState, action),
      };
    }
    case 'TOGGLE_PIECE': {
      return {
        gameBoard: gameBoard(state.gameBoard, action),
        nextPiece: nextPiece(state.nextPiece, action),
        gameState: gameState(state.gameState, action),
      };
    }
    case 'TOGGLE_GAME_STATE': {
      return {
        gameBoard: gameBoard(state.gameBoard, action),
        nextPiece: nextPiece(state.nextPiece, action),
        gameState: gameState(state.gameState, action),
      };
    }
    // Normally, if you had to reset initial state, you'd follow Dan Abramov's answer:
    // https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992
    // But, because you are using a custom rootReducer, you can just have a case for the 'RESET_GAME' action
    case 'RESET_GAME': {
      return {
        gameBoard: gameBoard(undefined, action),
        nextPiece: nextPiece(undefined, action),
        gameState: gameState(undefined, action),
      };
    }
    default: return state;
  }
};

// For reference and testing with test.html:

// const store = Redux.createStore(rootReducer, {
//   gameBoard: returnEmptyBoard(),
//   nextPiece: 'X',
//   gameState: 'notFinished',
// });
