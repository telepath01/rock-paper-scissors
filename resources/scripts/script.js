'use strict';
const buttons = document.querySelectorAll('button');
const playerScoreValue = document.querySelector('.player-score-value');
const cpuScoreValue = document.querySelector('.cpu-score-value');
const winScreen = document.getElementById('win-screen');
const winMsg = document.querySelector('.win-header');
const winScore = document.querySelector('.win-score');
const restartbtn = document.querySelector('.restart-btn');

const playerWinMsg = 'Player wins the game! ';
const playerLoseMsg = 'Player lost the game! ';
let messege = '';
let playerScore = 0;
let computerScore = 0;
let win = false;

function getComputerChoice() {
  const startValues = ['rock', 'paper', 'scissors'];
  let computerChoice =
    startValues[Math.floor(Math.random() * startValues.length)];
  return computerChoice;
}
function updateScore(messege) {
  if (messege.includes(`${playerWinMsg}`)) {
    playerScore++;
  } else if (messege.includes(`${playerLoseMsg}`)) {
    computerScore++;
  }
  cpuScoreValue.textContent = computerScore;
  playerScoreValue.textContent = playerScore;
  winCheck(playerScore, computerScore);
}
function winCheck(pScore, cScore) {
  if (pScore === 5 || cScore === 5) {
    winScreen.style.display = 'grid';
    if (pScore >= 5) {
      winMsg.textContent = 'Player Wins !!!';
      winScore.textContent = `${playerScore}`;
      win = true;
    } else if (cScore >= 5) {
      win = true;
      winMsg.textContent = 'Computer Wins !!!';
      winScore.textContent = `${computerScore}`;
    }
  }
}

function gameRestart() {
  playerScore = 0;
  computerScore = 0;
  winScreen.style.display = 'none';
  win = false;
  cpuScoreValue.textContent = '0';
  playerScoreValue.textContent = '0';
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
    if (!win) {
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
    } else {
    }

    updateScore(messege);
  })
);

restartbtn.addEventListener('click', function () {
  gameRestart();
});
