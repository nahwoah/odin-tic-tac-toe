const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

position = 0;

console.log('Select position to mark');

function placeMarker(position) {
  index = position - 1;
  row = Math.floor(index / 3)
  column = index % 3
  board[row][column] = 'O';
}

// index = position - 1;
// row = Math.floor(index / 3)
// column = index % 3

postition = Number(prompt("Enter your age:"));
placeMarker(position);
position = 3;
placeMarker(position);
position = 9;
placeMarker(position);




console.log(board)