"use strict";

// Decelaring the variables

const playGame = document.querySelector(".play-game");

const checkNumberButton = document.querySelector(".check");
const displaySecretNumber = document.querySelector(".secret-number");
// const playAgain = document.querySelector(".again");
const displayScore = document.querySelector(".score");
const displayHighScore = document.querySelector(".high-score");

// making the message function

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// generating the secret number

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

playGame.addEventListener("click", () => {
  let score = 20;
  let highScore = 0;
  displayMessage("Start Guessing");
  checkNumberButton.addEventListener("click", function () {
    const inputNumber = Number(document.querySelector(".number").value);
    console.log(inputNumber, typeof inputNumber);
    if (!inputNumber) {
      displayMessage("No number ❗");
    } else if (inputNumber === secretNumber) {
      displayMessage("Correct number 🥳🎊");
      document.querySelector("body").style.backgroundColor = "  #60b347";
      if (score > highScore) {
        highScore = score;
        displayHighScore.textContent = highScore;
      }
      displaySecretNumber.textContent = secretNumber;
    } else if (inputNumber !== secretNumber) {
      if (score > 1) {
        displayMessage(
          inputNumber > secretNumber ? "Too high 📈" : "Too low 📉"
        );
        score--;
        displayScore.textContent = score;
      } else {
        displayMessage("You loose 👾");
        document.querySelector("body").style.backgroundColor = "#cd0606f4";
        displayScore.textContent = 0;
      }
    }
  });
});

// Making the play Again Function
document.querySelector(".again").addEventListener("click", function () {
  displayMessage("start guessing");
  let score = 20;
  displayScore.textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  const inputNumber = document.querySelector(".number");
  document.querySelector("body").style.backgroundColor = "#1a1a2e";
  displaySecretNumber.textContent = "?";
  inputNumber.value = "";
});
