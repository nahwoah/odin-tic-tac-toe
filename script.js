const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

position = 0;

console.log('Select position to mark');

function findPosition(position) {
  index = position - 1;
  row = Math.floor(index / 3)
  column = index % 3
  return board[row][column];
}

function placeMarker(position) {
  index = position - 1;
  row = Math.floor(index / 3)
  column = index % 3
  board[row][column] = 'O';
}

function checkPosition(position) {
  index = position - 1;
  row = Math.floor(index / 3)
  column = index % 3

  if (board[row][column] !== '') {
    return false;
  } else {
    return true;
  }
}

function checkPlayerWin() {
  if (board[0][0] === 'O' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {  // check first row
    console.log("You won!");
    return true;
  } else if (board[1][0] === 'O' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) { // check second row
    console.log("You won!");
    return true;
  } else if (board[2][0] === 'O' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) { // check third row
    console.log("You won!");
    return true;
  } else if (board[0][0] === 'O' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) { // check first column
    console.log("You won!");
    return true;
  } else if (board[0][1] === 'O' && board[0][1] === board[1][1] && board[1][1] === board[1][2]) { // check second column
    console.log("You won!");
    return true;
  } else if (board[0][2] === 'O' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) { // check third column
    console.log("You won!");
    return true;
  } else if (board[0][0] === 'O' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) { // check left to right diagonal
    console.log("You won!");
    return true;
  } else if (board[0][2] === 'O' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) { // check right to left diagonal
    console.log("You won!");
    return true;
  }
}

function checkCPUWin(){
  if (board[0][0] === 'X' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {  // check first row
    console.log("The CPU won!");
    return true;
  } else if (board[1][0] === 'X' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) { // check second row
    console.log("The CPU won!");
    return true;
  } else if (board[2][0] === 'X' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) { // check third row
    console.log("The CPU won!");
    return true;
  } else if (board[0][0] === 'X' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) { // check first column
    console.log("The CPU won!");
    return true;
  } else if (board[0][1] === 'X' && board[0][1] === board[1][1] && board[1][1] === board[1][2]) { // check second column
    console.log("The CPU won!");
    return true;
  } else if (board[0][2] === 'X' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) { // check third column
    console.log("The CPU won!");
    return true;
  } else if (board[0][0] === 'X' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) { // check left to right diagonal
    console.log("The CPU won!");
    return true;
  } else if (board[0][2] === 'X' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) { // check right to left diagonal
    console.log("The CPU won!");
    return true;
  }
}

// index = position - 1;
// row = Math.floor(index / 3)
// column = index % 3

while (true) {
  position = Number(prompt("Select position 1-9:"));
  if (position < 1 || position > 9 || !checkPosition(position)) {
    console.log('Please choose another position');
  } else {
    placeMarker(position);
  }
  if (!checkPlayerWin()) {
    continue;
  } else {
    break;
    console.log(board);
  }
  console.log(board)
}
