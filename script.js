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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = null;
    
    if (humanChoice === computerChoice) {
        result = "tie";
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        result = "humanWin";
    } else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        result = "computerWin";
    }

    switch (result) {
        case "tie":
            console.log("Nobody wins! Equally matched!");
            break;
        case "humanWin":
            console.log(`You win! ${getCapitalizedWord(humanChoice)} beats ${getCapitalizedWord(computerChoice)}.`);
            break;
        case "computerWin":
            console.log(`You lose! ${getCapitalizedWord(computerChoice)} beats ${getCapitalizedWord(humanChoice)}.`)
    }
}

function getCapitalizedWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);