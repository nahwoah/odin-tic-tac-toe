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

function checkWinner(){
  if (board[0][0] === 'O' && board[0][0] === board[0][1] && board[0][1] === board[0][2]){
    console.log("You won!")
    return true
  }
}

// index = position - 1;
// row = Math.floor(index / 3)
// column = index % 3

while (true) {
  position = Number(prompt("Select position 1-9:"));
  if (position < 1 || position > 9 || !checkPosition(position) ) {
    console.log('Please choose another position');
  } else {
    placeMarker(position);
  }
  if(!checkWinner()){
    continue;
  }else{
    break;
    console.log(board)
  }
  console.log(board)
}
