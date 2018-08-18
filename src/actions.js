// Action creators vs. bound action creators, and their use cases:
// https://redux.js.org/api/bindactioncreators
// Bound action creators don't fit your use-case.  

const placePiece = (x, y) => {
  return {
    type: 'PLACE_PIECE',
    x,
    y,
  };
};

const toggleGameState = () => {
  return {
    type: 'TOGGLE_GAME_STATE',
  };
};

const togglePiece = () => {
  return {
    type: 'TOGGLE_PIECE',
  };
};

const resetGame = () => {
  return {
    type: 'RESET_GAME',
  };
};

module.exports.placePiece = placePiece;
module.exports.toggleGameState = toggleGameState;
module.exports.togglePiece = togglePiece;
module.exports.resetGame = resetGame;
