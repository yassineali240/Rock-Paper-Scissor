let computerChoice = "";
function getCumputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.25) {
    console.log("rock");
  } else if (computerChoice >= 0.25 && computerChoice <= 0.75) {
    console.log("paper");
  } else {
    console.log("scissor");
  }
  return computerChoice;
}
let humanChoice = "";
function getHumanChoice() {
  let humanChoice = Math.random();
  if (humanChoice < 0.25) {
    console.log("rock");
  } else if (humanChoice > 0.25 && humanChoice <= 0.75) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
  return humanChoice;
}
console.log(getCumputerChoice());
console.log(getHumanChoice());
