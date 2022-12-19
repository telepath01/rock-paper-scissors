'use strict';

const playerWinMsg = 'Player wins the game! ';
const playerLoseMsg = 'Player lost the game! ';
let messege = '';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const startValues = ['rock', 'paper', 'scissors'];
  let computerChoice =
    startValues[Math.floor(Math.random() * startValues.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    messege = 'Draw!';
    return messege;
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      messege = `${playerWinMsg} ${playerSelection} beats ${computerSelection}`;
      return messege;
    } else if (computerSelection === 'paper') {
      messege = `${playerLoseMsg} ${computerSelection} beats ${playerSelection}`;
      return messege;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      messege = `${playerWinMsg} ${playerSelection} beats ${computerSelection}`;
      return messege;
    } else if (computerSelection === 'scissors') {
      messege = `${playerLoseMsg} ${computerSelection} beats ${playerSelection}`;
      return messege;
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      messege = `${playerWinMsg} ${playerSelection} beats ${computerSelection}`;
      return messege;
    } else if (computerSelection === 'rock') {
      messege = `${playerLoseMsg} ${computerSelection} beats ${playerSelection}`;
      return messege;
    }
  }
}

function game(num) {
  for (let i = 0; i < num; i++) {
    playRound('Rock', getComputerChoice());
    console.log(messege);
    if (messege.includes(`${playerWinMsg}`)) {
      playerScore = i;
    } else if (messege.includes(`${playerLoseMsg}`)) {
      computerScore = i;
    }
  }
  console.log(playerScore, computerScore);
}
