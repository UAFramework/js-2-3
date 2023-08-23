let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 7;
let triesTaken = 0;
let outputTries = document.querySelector(".Tries-output");
outputTries.textContent = `Number of Tries: ${tries}`;
let playing = true;

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  let outputText = document.querySelector(".final-output");
  
  if (playing) {
    if (guess <= 100 && guess >= 1) {
      tries--;
      triesTaken++;
      if (triesTaken < 7) {
        if (guess > randomNumber) {
          outputTries.textContent = `Number of Tries: ${tries}`;
          outputText.textContent = "Number is too high, try again";
        } else if (guess < randomNumber) {
          outputTries.textContent = `Number of Tries: ${tries}`;
          outputText.textContent = "Number is too low, try again";
        } else {
          outputTries.textContent = `It took you ${triesTaken} tries`;
          outputText.textContent = `${guess} is correct. You win!`;
          playing = false;
        }
      } else {
        outputTries.textContent = `Number of Tries: ${tries}`;
        outputText.textContent = `You Lose, the number was ${randomNumber}`;
        playing = false;
      }
    } else {
      outputText.textContent = "Please enter a number between 1 and 100";
    }
  }
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  document.querySelector(".final-output").textContent = "Guess a number between 1 and 100";
  tries = 7;
  triesTaken = 0;
  outputTries.textContent = `Number of Tries: ${tries}`;
  playing = true;
}

function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
