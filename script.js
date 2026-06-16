const btn = document.querySelectorAll("button");

const tictactoe = (() => {

  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  return { board };

})();

let position = 0;

console.log(tictactoe.board);

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
    console.log("Player1 wins!");
    return true;
  } else if (tictactoe.board[1][0] === 'X' && tictactoe.board[1][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[1][2]) { // check second row
    console.log("Player1 wins!");
    return true;
  } else if (tictactoe.board[2][0] === 'X' && tictactoe.board[2][0] === tictactoe.board[2][1] && tictactoe.board[2][1] === tictactoe.board[2][2]) { // check third row
    console.log("Player1 wins!");
    return true;
  } else if (tictactoe.board[0][0] === 'X' && tictactoe.board[0][0] === tictactoe.board[1][0] && tictactoe.board[1][0] === tictactoe.board[2][0]) { // check first column
    console.log("Player1 wins!");
    return true;
  } else if (tictactoe.board[0][1] === 'X' && tictactoe.board[0][1] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[1][2]) { // check second column
    console.log("Player1 wins!");
    return true;
  } else if (tictactoe.board[0][2] === 'X' && tictactoe.board[0][2] === tictactoe.board[1][2] && tictactoe.board[1][2] === tictactoe.board[2][2]) { // check third column
    console.log("Player1 wins!");
    return true;
  } else if (tictactoe.board[0][0] === 'X' && tictactoe.board[0][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][2]) { // check left to right diagonal
    console.log("Player1 wins!");
    return true;
  } else if (tictactoe.board[0][2] === 'X' && tictactoe.board[0][2] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][0]) { // check right to left diagonal
    console.log("Player1 wins!");
    return true;
  }
}

function checkPlayer2Win() {
  if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[0][1] && tictactoe.board[0][1] === tictactoe.board[0][2]) {  // check first row
    console.log("Player2 wins!");
    return true;
  } else if (tictactoe.board[1][0] === 'O' && tictactoe.board[1][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[1][2]) { // check second row
    console.log("Player2 wins!");
    return true;
  } else if (tictactoe.board[2][0] === 'O' && tictactoe.board[2][0] === tictactoe.board[2][1] && tictactoe.board[2][1] === tictactoe.board[2][2]) { // check third row
    console.log("Player2 wins!");
    return true;
  } else if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[1][0] && tictactoe.board[1][0] === tictactoe.board[2][0]) { // check first column
    console.log("Player2 wins!");
    return true;
  } else if (tictactoe.board[0][1] === 'O' && tictactoe.board[0][1] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[1][2]) { // check second column
    console.log("Player2 wins!");
    return true;
  } else if (tictactoe.board[0][2] === 'O' && tictactoe.board[0][2] === tictactoe.board[1][2] && tictactoe.board[1][2] === tictactoe.board[2][2]) { // check third column
    console.log("Player2 wins!");
    return true;
  } else if (tictactoe.board[0][0] === 'O' && tictactoe.board[0][0] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][2]) { // check left to right diagonal
    console.log("Player2 wins!");
    return true;
  } else if (tictactoe.board[0][2] === 'O' && tictactoe.board[0][2] === tictactoe.board[1][1] && tictactoe.board[1][1] === tictactoe.board[2][0]) { // check right to left diagonal
    console.log("Player2 wins!");
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




let p1 =  (event) => {
  let currentlyClickedButton = event.target;
  
  position = parseInt(currentlyClickedButton.getAttribute('data-position'));
  console.log(position)
  placeP1Marker(position);
  checkPlayer1Win();

  // currentlyClickedButton.textContent = "Clicked!";
  // we use toFixed because we only want two digit.
  currentlyClickedButton.innerHTML = 'X'
};

let p2 =  (event) => {
  let currentlyClickedButton = event.target;
  
  position = parseInt(currentlyClickedButton.getAttribute('data-position'));
  console.log(position)
  placeP2Marker(position);
  checkPlayer2Win();

  // currentlyClickedButton.textContent = "Clicked!";
  // we use toFixed because we only want two digit.
  currentlyClickedButton.innerHTML = 'O'
};

function playRound(){
    for (i = 0; i < 2; i++){
      if (i === 0){
        btn.forEach(button => button.onclick = p1);
      }else{
        btn.forEach(button => button.onclick = p2);
      }
    }
    
  


  
    
  
}


playRound()


// we add the listener onclick to every buttons.
// document.querySelectorAll('button').forEach(button => button.onclick = clickEvent);