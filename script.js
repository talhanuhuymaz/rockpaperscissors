function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === computerMove) {
    result = "Tie";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You Won!";
  } else if (
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "rock")
  ) {
    result = "You lost!";
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}

function pickComputerMove() {
  let computerMove = "";

  const options = {
    a: "rock",
    b: "paper",
    c: "scissors",
  };

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    computerMove = options.a;
  } else if (randomNumber === 2) {
    computerMove = options.b;
  } else {
    computerMove = options.c;
  }

  return computerMove;
}
