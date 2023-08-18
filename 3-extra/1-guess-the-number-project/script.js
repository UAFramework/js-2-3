let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 5;

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  if (!validate(guess)) {
    return;
  }

  switch ((guess < randomNumber) ? -1 : (guess > randomNumber) ? 1 : 0) {
    case 0:
      document.querySelector('.final-output').textContent = 'You win )))';
      break;

    case 1:
      document.querySelector('.final-output').textContent = 'Number is too high, try again';
      break;

    case -1:
      document.querySelector('.final-output').textContent = 'Number is too low, try again';
      break;

    default:
      alert('Error: unexpected number');
  }
}

function validate(guess) {
  if (attempts === 0) {
    return;
  }

  if (guess < 0 || guess > 100) {
    document.querySelector('.final-output').textContent = 'Please enter a number between 1 and 100';
    return;
  }
  return true;
}

function newGame() {
  location.reload();
}

function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
