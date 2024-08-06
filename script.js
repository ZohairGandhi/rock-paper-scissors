let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

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
    if (humanChoice === computerChoice) {
        console.log("Nobody wins! Equally matched!");
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        console.log(`You win! ${capitalizeWord(humanChoice)} beats ${capitalizeWord(computerChoice)}.`);
        humanScore++;
    } else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        console.log(`You lose! ${capitalizeWord(computerChoice)} beats ${capitalizeWord(humanChoice)}.`);
        computerScore++;
    }

    console.log(`Scores at the end of Round ${roundNum}:
        You: ${humanScore}
        Computer: ${computerScore}`);

    roundNum++;

    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}