const container = document.querySelector('.container');
container.style.visibility = 'hidden';

const btn = document.querySelectorAll('button');
const reset = document.getElementById('reset');
reset.style.visibility = 'hidden';

const winner = document.querySelector('.winner');
const form = document.querySelector('form');
const playerName = document.querySelector("#playerName");
const p1score = document.querySelector(".p1score");
const p2score = document.querySelector(".p2score");



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
    return true;
  } else if (tictactoe.board[1][0] === 'X' && tictactoe.board[1][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[1][2]) { // check second row
    return true;
  } else if (tictactoe.board[2][0] === 'X' && tictactoe.board[2][0] === tictactoe.board[2][1] && tictactoe.board[2][1] === tictactoe.board[2][2]) { // check third row
    return true;
  } else if (tictactoe.board[0][0] === 'X' && tictactoe.board[0][0] === tictactoe.board[1][0] && tictactoe.board[1][0] === tictactoe.board[2][0]) { // check first column
    return true;
  } else if (tictactoe.board[0][1] === 'X' && tictactoe.board[0][1] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][1]) { // check second column
    return true;
  } else if (tictactoe.board[0][2] === 'X' && tictactoe.board[0][2] === tictactoe.board[1][2] && tictactoe.board[1][2] === tictactoe.board[2][2]) { // check third column
    return true;
  } else if (tictactoe.board[0][0] === 'X' && tictactoe.board[0][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][2]) { // check left to right diagonal
    return true;
  } else if (tictactoe.board[0][2] === 'X' && tictactoe.board[0][2] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][0]) { // check right to left diagonal
    return true;
  }
}

function checkPlayer2Win() {
  if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[0][1] && tictactoe.board[0][1] === tictactoe.board[0][2]) {  // check first row
    return true;
  } else if (tictactoe.board[1][0] === 'O' && tictactoe.board[1][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[1][2]) { // check second row
    return true;
  } else if (tictactoe.board[2][0] === 'O' && tictactoe.board[2][0] === tictactoe.board[2][1] && tictactoe.board[2][1] === tictactoe.board[2][2]) { // check third row
    return true;
  } else if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[1][0] && tictactoe.board[1][0] === tictactoe.board[2][0]) { // check first column
    return true;
  } else if (tictactoe.board[0][1] === 'O' && tictactoe.board[0][1] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][1]) { // check second column
    return true;
  } else if (tictactoe.board[0][2] === 'O' && tictactoe.board[0][2] === tictactoe.board[1][2] && tictactoe.board[1][2] === tictactoe.board[2][2]) { // check third column
    return true;
  } else if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][2]) { // check left to right diagonal
    return true;
  } else if (tictactoe.board[0][2] === 'O' && tictactoe.board[0][2] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][0]) { // check right to left diagonal
    return true;
  }
}

// add an object to control game flow, keep turns and do checks for players
let player = 1;

// const player1 = createPlayer(prompt("Enter name for player 1"));
// const player2 = createPlayer(prompt("Enter name for player 2"));

// console.log(player1.name);
// console.log(player2.name);

let declared = 0;
let player1;
let player2

form.addEventListener("submit", function (event) {
  event.preventDefault();

  
  if (declared === 0) {
    player1 = createPlayer(playerName.value);
    console.log(player1.name);
    playerName.value = ''
    playerName.placeholder = "Enter name for player 2";
    playerName.focus();
    declared = 1;
  } else {
    player2 = createPlayer(playerName.value);
    form.style.visibility = "hidden";
    container.style.visibility = "visible";
    reset.style.visibility = 'visible';
    console.log(player2.name);
    p1score.innerHTML = `${player1.name}: ${player1.getScore()}`
    p2score.innerHTML = `${player2.name}: ${player2.getScore()}`
  }
})



let p1 = (event) => {
  let currentlyClickedButton = event.target;

  position = parseInt(currentlyClickedButton.getAttribute('data-position'));

  if (player === 1) {
    
    if (checkPosition(position) === true) {
      placeP1Marker(position);
      currentlyClickedButton.innerHTML = 'X'
      player = 2
      if (checkPlayer1Win()){
        winner.innerHTML = `${player1.name} Wins!`
        player1.giveScore();
        p1score.innerHTML = `${player1.name}: ${player1.getScore()}`
      }
    }

  } else {
    
    if (checkPosition(position) === true) {
      placeP2Marker(position);
      currentlyClickedButton.innerHTML = 'O'
      player = 1
      if (checkPlayer2Win()){
        winner.innerHTML = `${player2.name} Wins!`
        player2.giveScore();
        p2score.innerHTML = `${player2.name}: ${player2.getScore()}`
      }
    }
  }
};


function playRound() {

  document.querySelectorAll('.btn').forEach(button => button.addEventListener("click", p1));

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
