function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice >= 0 && computerChoice <= 1 / 3) {
    return "rock";
  } else if (computerChoice > 1 / 3 && computerChoice <= 1 / 2) {
    return "paper";
  } else {
    return "scissor";
  }
}
function getHumanChoice() {
  let humanChoice = prompt("enter your hame choice");
  let HumanChoiceLowerCase = humanChoice.toLowerCase();
  return HumanChoiceLowerCase;
}

let humanSCore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    (console.log("computer chose paper, you lose"), computerScore++);
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    (console.log("computer choose scissor, you win"), humanSCore++);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    (console.log("computer choose rock, you win"), humanSCore++);
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    (console.log("computer choose scissor, you lose"), computerScore++);
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    (console.log("computer choose rock, you lose"), computerScore++);
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    (console.log("computer choose paper, you win"), humanSCore++);
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(humanSCore, computerScore);
