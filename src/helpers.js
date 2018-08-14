const checkIfGameWinner = (board) => {
  return checkIfDiagWinner(board) || checkIfColWinner(board) || checkIfRowWinner(board);
};

const checkIfDiagWinner = (board) => {
  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }
  return false;
};

const checkIfColWinner = (board) => {
  for (let i = 0; i < 3; i += 1) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }
  return false;
};

const checkIfRowWinner = (board) => {
  for (let i = 0; i < 3; i += 1) {
    if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return true;
    }
  }
  return false;
};

const returnEmptyBoard = () => {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  return board;
};

const testPrint = () => {
  console.log('Hi there');
};

module.exports.checkIfGameWinner = checkIfGameWinner;
module.exports.returnEmptyBoard = returnEmptyBoard;
module.exports.testPrint = testPrint;
