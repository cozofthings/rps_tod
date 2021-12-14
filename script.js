function computerPlay() {
    let rpsChoice = ['ROCK', 'PAPER', 'SCISSORS'];
    let choice = rpsChoice[Math.floor(Math.random()*rpsChoice.length)];
    return choice
}

let playerScore = 0;
let computerScore = 0;
let draw = 0;
let gamesPlayed = 1;


let playerSelection = 'rock'
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'ROCK') {
        console.log("Tie!"); 
        draw++;
        return draw;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        console.log("You lose! PAPER beats ROCK.");
        computerScore++;
        return computerScore;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        console.log("You win! ROCK beats SCISSORS.");
        playerScore++;
        return playerScore;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'PAPER') {
        console.log("Tie!");
        draw++;
        return draw;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        console.log("You win! PAPER beats ROCK.");
        playerScore++;
        return playerScore;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        console.log("You lose! SCISSORS beats PAPER.");
        computerScore++;
        return computerScore;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        console.log("You lose! PAPER beats ROCK.");
        computerScore++;
        return computerScore;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'SCISSORS') {
        console.log("Tie.");
        draw++;
        return draw;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log("You win! SCISSORS beats PAPER.");
        playerScore++;
        return playerScore;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log("You lose! ROCK beats SCISSORS.");
        computerScore++;
        return computerScore;
    }
};


function game() {
    console.log("Welcome to Rock, Paper, Scissors best of 5 series. Let's see what happens!");
    console.log("This is Game " + gamesPlayed + ".")
    playRound(playerSelection, computerPlay());
        console.log("This is Game " + ++gamesPlayed + ". Player has " + playerScore + ". Computer has " + computerScore + ". There are " + draw + " draws.");
    playRound(playerSelection, computerPlay());
        console.log("This is Game " + ++gamesPlayed + ". Player has " + playerScore + ". Computer has " + computerScore + ". There are " + draw + " draws.");
    playRound(playerSelection, computerPlay()); 
        console.log("This is Game " + ++gamesPlayed + ". Player has " + playerScore + ". Computer has " + computerScore + ". There are " + draw + " draws.");
    playRound(playerSelection, computerPlay());
        console.log("This is Game " + ++gamesPlayed + ". Player has " + playerScore + ". Computer has " + computerScore + ". There are " + draw + " draws.");
    playRound(playerSelection, computerPlay()); 
        console.log("Game over. Player has " + playerScore + ". Computer has " + computerScore + ". There are " + draw + " draws.");

    if (playerScore > computerScore) {
        console.log("Congratulations! You win! The final score was: Your score: " + playerScore + "Computer score: " + computerScore + "Draws: " + draw)
    } else if (draw > playerScore && computerScore) {
        console.log("All tied! The final score was: Your score: " + playerScore + "Computer score: " + computerScore + "Draws: " + draw) 
    } else if (computerScore > playerScore) {
        console.log("You lost! The final score was: Your score: " + playerScore + "  Computer score: " + computerScore + "  Draws: " + draw)
    };
}


game()


