function getComputerChoice() {
  let computerChoice = Math.random();
<<<<<<< HEAD
  if (computerChoice <= 1 / 3) {
    return "rock";
  } else if (computerChoice > 1 / 3 && computerChoice < 2 / 3) {
=======
  if (computerChoice < 1 / 3) {
    return "rock";
  } else if (computerChoice < 2 / 3) {
>>>>>>> add-UI
    return "paper";
  } else {
    return "scissor";
  }
}

<<<<<<< HEAD
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
=======
let humanScore = 0;
let computerScore = 0;
let ties = 0;
const div1 = document.querySelector(".div1");
let tieScore = document.createElement("div");
function playRound(humanSelection, computerSelection) {
  if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    div1.textContent = `human-score ${humanScore}. ${computerScore} computer-score`;
  } else if (humanSelection === "rock" && computerSelection === "scissor") {
    humanScore++;
    div1.textContent = `human-score ${humanScore}. ${computerScore} computer-score`;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    div1.textContent = `human-score ${humanScore}. ${computerScore} computer-score`;
  } else if (humanSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    div1.textContent = `human-score ${humanScore}. ${computerScore} computer-score`;
  } else if (humanSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    div1.textContent = `human-score ${humanScore}. ${computerScore} computer-score`;
  } else if (humanSelection === "scissor" && computerSelection === "paper") {
    humanScore++;
    div1.textContent = `human-score ${humanScore}. ${computerScore} computer-score`;
  } else if (humanSelection === computerSelection) {
    ties++;
    tieScore.textContent = `its a tie (ties Score ${ties})`;
    div1.appendChild(tieScore);
  }
  if (computerScore == 5 || humanScore == 5) {
    checkFinalScore();
    humanScore = 0;
    computerScore = 0;
  }
}
let p = document.createElement("div");
function checkFinalScore() {
  if (computerScore > humanScore) {
    p.textContent = "computer won";
    document.body.append(p);
  } else if (humanScore > computerScore) {
    p.textContent = "you won";
    document.body.append(p);
  }
}

function getHumanChoice() {
  const btn = document.querySelectorAll("button");
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      p.remove();
      const humanSelection = button.textContent.toLowerCase().trim();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    });
  });
}
getHumanChoice();
>>>>>>> add-UI
