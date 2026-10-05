function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 1 / 3) {
    return "rock";
  } else if (computerChoice > 1 / 3 && computerChoice < 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("enter your game choice");
  let HumanChoiceLowerCase = humanChoice.toLowerCase();
  return HumanChoiceLowerCase;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log(
      `computer chose paper, you lose. your score ${humanScore} computer score ${computerScore}`,
    );
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore++;
    console.log(
      `computer chose ${computerChoice}, you won. your score ${humanScore} computer score ${computerScore}`,
    );
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log(
      `computer choose ${computerChoice}, you won. your score ${humanScore} computer score ${computerScore}`,
    );
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    computerScore++;
    console.log(
      `computer choose ${computerChoice}, you lose. your score ${humanScore} computer score ${computerScore}`,
    );
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    computerScore++;
    console.log(
      `computer choose ${computerChoice}, you lose. your score ${humanScore} computer score ${computerScore}`,
    );
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore++;
    console.log(
      `computer choose ${computerChoice}, you won. your score ${humanScore} computer score ${computerScore}`,
    );
  } else {
    console.log(
      `computer choose ${computerChoice}, its a tie your score ${humanScore} computer score ${computerScore}`,
    );
  }
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}
function checkFinalScore() {
  if (computerScore > humanScore) {
    console.log("computer won, better luck next time!");
  } else if (humanScore > computerScore) {
    console.log("wohhoo you won!");
  } else {
    console.log("its a tie!");
  }
}
playGame();
console.log(`(human-score ${humanScore} ${computerScore} computer-score)`);
checkFinalScore();
