function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let result;
  
    if (playerSelection === computerSelection) {
      result = "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      result = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  
    document.getElementById('result').textContent = result;
  }
  