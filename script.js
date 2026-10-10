function getComputerChoice() {
  let computerChoice = Math.random();

  if (computerChoice < 1 / 3) {
    return "rock";
  } else if (computerChoice < 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
}
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
