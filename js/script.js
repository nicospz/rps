function assignComputerHand() {
  var random = Math.random() * 3;
  if (Math.trunc(random) == 0) {
    return "Rock";
  } else if (Math.trunc(random) == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }

}

function checkResult(player, computer) {
  if (player + computer == "RocksScissors" || player + computer == "ScissorsPaper" || player + computer == "PaperRock") {
    return "win";
  } else if (player == computer) {
    return "draw";
  } else {
    return "lose";
  }
}

function play(playerHand) {
  var computerHand = assignComputerHand();
  var result = checkResult(playerHand, computerHand);
  console.log(result);
  document.querySelector('h2').innerHTML = "HOLAA";
  printResult(result, playerHand, computerHand);
  console.log("asd");
}

function playa() {
  console.log("asdasdasfasf");
}

function printResult(result, playerHand, computerHand) {
  switch (result) {
    case "win":
      document.querySelector('h2').innerHTML = playerHand + " beats " + computerHand + "! You win!";
      break;
    case "lose":
      document.querySelector('h2').innerHTML = playerHand + " loses against " + computerHand + "! You lose!";
      break;
    case "draw":
      document.querySelector('h2').innerHTML = playerHand + " versus " + computerHand + "! It's a draw!";
      break;
  }
}