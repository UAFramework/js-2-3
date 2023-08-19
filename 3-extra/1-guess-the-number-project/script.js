let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 5;
let phrases = {
  default: 'Guess a number between 1 and 100',
  win: 'You win )))',
  high: 'Number is too high, try again',
  low: 'Number is too low, try again',
  lose: 'You Lose, the number was ' + randomNumber,
  enterNumbBtw: 'Please enter a number between 1 and 100',
  numberOfTries: 'Number of Tries: ',
}

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  if (!validate(guess)) return;

  attempts--;
  let result = (guess < randomNumber) ? 'low' : (guess > randomNumber) ? 'high' : 'win';
  result = (result !== 'win' && attempts === 0) ? 'lose' : result;
  updateTextContent('.final-output', phrases[result]);
  updateTriesOutput(attempts);
}

function validate(guess) {
  if (attempts === 0) {
    updateTextContent('.final-output', phrases['lose']);

    return false;
  }

  if (guess < 0 || guess > 100 || guess === '') {
    updateTextContent('.final-output', phrases['enterNumbBtw']);

    return false;
  }

  return true;
}

function updateTextContent(cssClass, text)
{
  document.querySelector(cssClass).textContent = text;
}

function updateTriesOutput(attempts) {
    updateTextContent('.Tries-output', phrases['numberOfTries'] + attempts);
}

function newGame() {
  location.reload();
}

function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

updateTextContent('.final-output', phrases['default']);
updateTriesOutput(attempts);
document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);
document.addEventListener('keypress', keyBoardEvents);
