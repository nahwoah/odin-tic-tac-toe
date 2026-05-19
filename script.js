const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

position = 0;

console.log('Select position to mark');

function findPosition(position){
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

  if (board[row][column] !== ''){
    return -1;
  } else{
    return 0;
  }
}

// index = position - 1;
// row = Math.floor(index / 3)
// column = index % 3

position = Number(prompt("Select position 1-9:"));
if (!checkPosition() || position < 1 || position > 9){
  console.log('Please choose another position');
}else{
  placeMarker(position);
}


console.log(board)