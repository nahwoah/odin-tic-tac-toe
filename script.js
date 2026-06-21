const btn = document.querySelectorAll("button");
const reset = document.getElementById('reset');
const winner = document.querySelector('.winner');

const tictactoe = (() => {

  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  return { board };

})();

let position = 0;

function createPlayer(name) {

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
  tictactoe.board[row][column] = 'X';
}

function placeP2Marker(position) {
  const index = position - 1;
  const row = Math.floor(index / 3)
  const column = index % 3
  tictactoe.board[row][column] = 'O';
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
  if (tictactoe.board[0][0] === 'X' && tictactoe.board[0][0] === tictactoe.board[0][1] && tictactoe.board[0][1] === tictactoe.board[0][2]) {  // check first row
    winner.innerHTML = 'Player 1 Wins!'
    return true;
  } else if (tictactoe.board[1][0] === 'X' && tictactoe.board[1][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[1][2]) { // check second row
    winner.innerHTML = 'Player 1 Wins!'
    return true;
  } else if (tictactoe.board[2][0] === 'X' && tictactoe.board[2][0] === tictactoe.board[2][1] && tictactoe.board[2][1] === tictactoe.board[2][2]) { // check third row
    winner.innerHTML = 'Player 1 Wins!'
    return true;
  } else if (tictactoe.board[0][0] === 'X' && tictactoe.board[0][0] === tictactoe.board[1][0] && tictactoe.board[1][0] === tictactoe.board[2][0]) { // check first column
    winner.innerHTML = 'Player 1 Wins!'
    return true;
  } else if (tictactoe.board[0][1] === 'X' && tictactoe.board[0][1] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][1]) { // check second column
    winner.innerHTML = 'Player 1 Wins!'
    return true;
  } else if (tictactoe.board[0][2] === 'X' && tictactoe.board[0][2] === tictactoe.board[1][2] && tictactoe.board[1][2] === tictactoe.board[2][2]) { // check third column
    winner.innerHTML = 'Player 1 Wins!'
    return true;
  } else if (tictactoe.board[0][0] === 'X' && tictactoe.board[0][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][2]) { // check left to right diagonal
    winner.innerHTML = 'Player 1 Wins!'
    return true;
  } else if (tictactoe.board[0][2] === 'X' && tictactoe.board[0][2] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][0]) { // check right to left diagonal
    winner.innerHTML = 'Player 1 Wins!'
    return true;
  }
}

function checkPlayer2Win() {
  if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[0][1] && tictactoe.board[0][1] === tictactoe.board[0][2]) {  // check first row
    winner.innerHTML = 'Player 2 Wins!'
    return true;
  } else if (tictactoe.board[1][0] === 'O' && tictactoe.board[1][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[1][2]) { // check second row
    winner.innerHTML = 'Player 2 Wins!'
    return true;
  } else if (tictactoe.board[2][0] === 'O' && tictactoe.board[2][0] === tictactoe.board[2][1] && tictactoe.board[2][1] === tictactoe.board[2][2]) { // check third row
    winner.innerHTML = 'Player 2 Wins!'
    return true;
  } else if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[1][0] && tictactoe.board[1][0] === tictactoe.board[2][0]) { // check first column
    winner.innerHTML = 'Player 2 Wins!'
    return true;
  } else if (tictactoe.board[0][1] === 'O' && tictactoe.board[0][1] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][1]) { // check second column
    winner.innerHTML = 'Player 2 Wins!'
    return true;
  } else if (tictactoe.board[0][2] === 'O' && tictactoe.board[0][2] === tictactoe.board[1][2] && tictactoe.board[1][2] === tictactoe.board[2][2]) { // check third column
    winner.innerHTML = 'Player 2 Wins!'
    return true;
  } else if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][2]) { // check left to right diagonal
    winner.innerHTML = 'Player 2 Wins!'
    return true;
  } else if (tictactoe.board[0][2] === 'O' && tictactoe.board[0][2] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][0]) { // check right to left diagonal
    winner.innerHTML = 'Player 2 Wins!'
    return true;
  }
}

// index = position - 1;
// row = Math.floor(index / 3)
// column = index % 3

// while (true) {
//   position = Number(prompt("Select position 1-9:"));
//   if (position < 1 || position > 9 || !checkPosition(position)) {
//     console.log('Please choose another position');
//   } else {
//     placeP1Marker(position);
//   }
//   if (checkPlayer1Win()) {
//     break;
//     console.log(tictactoe.board);
//   } else if (checkPlayer2Win){
//     break;
//     console.log(tictactoe.board);
//   }
//   console.log(tictactoe.board)
// }

let player = 1;

const player1 = createPlayer(prompt("Enter name for player 1"));
const player2 = createPlayer(prompt("Enter name for player 2"));

console.log(player1.name);
console.log(player2.name);


let p1 = (event) => {
  let currentlyClickedButton = event.target;

  position = parseInt(currentlyClickedButton.getAttribute('data-position'));

  if (player === 1) {
    console.log(player)
    placeP1Marker(position);
    checkPlayer1Win();
    currentlyClickedButton.innerHTML = 'X'
    player = 2

  } else {
    console.log(player)
    placeP2Marker(position);
    checkPlayer2Win();
    currentlyClickedButton.innerHTML = 'O'
    player = 1
    
  }
};


function playRound() {

  document.querySelector('.btn').addEventListener("click", p1);

}

const resetB = function resetBoard() {
  tictactoe.board = tictactoe.board.map(item => item = ['', '', '']);
  document.querySelectorAll('.btn').forEach(button => button.innerHTML = '');
  
  player = 1;
  winner.innerHTML = ''
}

// playRound()
reset.addEventListener("click", resetB);

document.querySelectorAll('.btn').forEach(button => button.addEventListener("click", p1));
