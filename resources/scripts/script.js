'use strict';
const buttons = document.querySelectorAll('button');

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
function updateScore(messege) {
  if (messege.includes(`${playerWinMsg}`)) {
    playerScore++;
    console.log(playerScore);
  } else if (messege.includes(`${playerLoseMsg}`)) {
    computerScore++;
  }
  console.log('player:', playerScore);
  console.log('computer:', computerScore);
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

buttons.forEach(button =>
  button.addEventListener('click', function (e) {
    if (e.target.classList.value === 'rock-btn') {
      const playerChoice = 'rock';
      // console.log('works');
      playRound(playerChoice, getComputerChoice());
    } else if (e.target.classList.value === 'paper-btn') {
      const playerChoice = 'paper';
      // console.log('paper');
      playRound(playerChoice, getComputerChoice());
    } else if (e.target.classList.value === 'scissors-btn') {
      const playerChoice = 'scissors';
      // console.log(playerChoice);
      playRound(playerChoice, getComputerChoice());
    }
    updateScore(messege);
  })
);
