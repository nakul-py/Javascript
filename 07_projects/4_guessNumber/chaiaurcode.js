let randomNumber = (Math.floor(Math.random() * 100 + 1));

const submit = document.querySelector("#subt");
const input = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const result = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        const guess = Number(input.value);
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuesses(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You got it right! The number was ${randomNumber}`);
        result.style.backgroundColor = "green";
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Last guess was too low!");
        result.style.backgroundColor = "red";
    } else if (guess > randomNumber) {
        displayMessage("Last guess was too high!");
        result.style.backgroundColor = "red";
    }
}

function displayGuesses(guess) {
    input.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    result.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    input.value = "";
    input.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame" style="cursor: pointer; 
        font-size: 30px;
        background-color: rgb(0, 195, 255);
        color: #212121;
        font-family: Arial, Helvetica, sans-serif;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
const newGameButton = document.querySelector("#newGame");
newGameButton.addEventListener("click", function(e) {
    e.preventDefault();
    playGame = true;
    numGuess = 1;
    prevGuess = [];
    guessSlot.innerHTML = "";
    result.innerHTML = `$({11 - numGuess}) `;
    lowOrHi.innerHTML = "";
    result.style.backgroundColor = "white";
    input.removeAttribute("disabled");
    startOver.removeChild(p);
    randomNumber = (Math.floor(Math.random() * 100 + 1));          
    });
}

