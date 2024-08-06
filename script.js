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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let result = playRound(humanSelection, computerSelection);

    if (result === "humanWin") {
        humanScore++;
    } else if (result === "computerWin") {
        computerScore++;
    }

    console.log(`Scores at the end of Round ${i+1}\n You: ${humanScore}\n Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You bested the machine.");
    } else if (humanScore < computerScore) {
        console.log("Sorry! The machine has utterly humiliated you.");
    } else {
        console.log("Evenly matched! A rematch will have to occur another day.");
    }
    
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
                console.log(`You win! ${capitalizeWord(humanChoice)} beats ${capitalizeWord(computerChoice)}.`);
                break;
            case "computerWin":
                console.log(`You lose! ${capitalizeWord(computerChoice)} beats ${capitalizeWord(humanChoice)}.`)
        }

        return result;
    }
    
    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

playGame();