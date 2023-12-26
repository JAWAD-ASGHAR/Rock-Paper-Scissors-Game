let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

// Generate random choice of computer
const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor (Math.random() * 3);
    return options[randIdx]
}

// Print the winner and update score
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        message.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

// Draw game 
const drawGame = () => {
    message.innerText = "Game Drawn!";
    message.style.backgroundColor = "orange";
}

// Process the winner
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false  : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

// User choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});