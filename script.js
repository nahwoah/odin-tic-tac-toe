const tictactoe = (() => {

  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  let position = 0;
  const getPosition = () => position;
  const givePosition = () => {  };
  

  return { board, position };

})();

function createPlayer(name) {

  const name = name;

  let score = 0;
  const getScore = () => score;
  const giveScore = () => { score++; };

  return { name, getScore, giveScore };
}

function findPosition(position) {
  const index = position - 1;
  const row = Math.floor(index / 3)
  const column = index % 3
  return tictactoe.board[row][column];
}

function placeP1Marker(position) {
  const index = position - 1;
  const row = Math.floor(index / 3)
  const column = index % 3
  tictactoe.board[row][column] = 'O';
}

function placeP2Marker(position) {
  const index = position - 1;
  const row = Math.floor(index / 3)
  const column = index % 3
  tictactoe.board[row][column] = 'X';
}

function checkPosition(position) {
  const index = position - 1;
  const row = Math.floor(index / 3)
  const column = index % 3

  if (tictactoe.board[row][column] !== '') {
    return false;
  } else {
    return true;
  }
}

function checkPlayer1Win() {
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

function checkPlayer2Win() {
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

// function cpuMove(){
//   if ((findPosition(1) === 'X' || findPosition(1) === 'O') && (findPosition(1) === findPosition(2) && checkPosition(3) === true)){
//     placeCPUMarker(3);
//   } else if((findPosition(1) === 'X' || findPosition(1) === 'O') && ()){

//   }
// }

// index = position - 1;
// row = Math.floor(index / 3)
// column = index % 3

while (true) {
  position = Number(prompt("Select position 1-9:"));
  if (position < 1 || position > 9 || !checkPosition(position)) {
    console.log('Please choose another position');
  } else {
    placeP1Marker(position);
  }
  if (checkPlayer1Win()) {
    break;
    console.log(board);
  } else if (checkPlayer2Win){
    break;
    console.log(board);
  }
  console.log(board)
}


function playRound(){

}