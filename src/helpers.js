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

module.exports.returnEmptyBoard = returnEmptyBoard;
module.exports.testPrint = testPrint;
