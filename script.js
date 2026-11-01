function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    // return { choice: choices[randomIndex], index: randomIndex, length: choices.length };
    return choices[randomIndex];
}

function getHumanChoice() {
    const input = prompt("Enter your choice: rock, paper, or scissors")
    // User clicked 'Cancel' or closed the prompt
    if (input === null) {
        return null;
    }

    const choice = input.trim().toLowerCase();
    return choice;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }

        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            return "Human wins this round!";
        } else {
            computerScore ++;
            return "Computer wins this round!";
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();

        if (humanSelection === null) {
            console.log("Game cancelled");
            return;
        }
        const computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);

        console.log(
            `Round ${i + 1}: ` +
            `Human chose ${humanSelection}, ` +
            `Computer chose ${computerSelection}. ` +
            `Result: ${result}`
        )

    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', playGame);