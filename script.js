let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

let roundResult = document.querySelector(".roundResult");
let roundResultText = document.createElement("p");

let humanScorePara = document.querySelector("#humanScore");
let computerScorePara = document.querySelector("#computerScore");

function handleClick(buttonClicked) {
    playRound(buttonClicked, getComputerChoice());
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice:").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (isGameOver()) {
        displayGameWinner();
        return;
    }

    if (humanChoice === computerChoice) {
        roundResultText.textContent = "Nobody wins! Equally matched!";
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        roundResultText.textContent = `You win! ${capitalizeWord(humanChoice)} beats ${capitalizeWord(computerChoice)}.`;
        humanScore++;
    } else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        roundResultText.textContent = `You lose! ${capitalizeWord(computerChoice)} beats ${capitalizeWord(humanChoice)}.`;
        computerScore++;
    }

    roundResult.appendChild(roundResultText);

    humanScorePara.textContent = `You: ${humanScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;

    if (isGameOver()) {
        displayGameWinner();
        return;
    }

    roundNum++;

    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

function isGameOver() {
    return humanScore === 5 || computerScore === 5;
}

function displayGameWinner() {
    if (humanScore === 5) {
        alert("Congratulations, you bested the machine!");
    } else {
        alert("Sorry, the machine has utterly humiliated you!");
    }
}