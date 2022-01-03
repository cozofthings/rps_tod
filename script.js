function computerPlay() {
    let rpsChoice = ['Rock', 'Paper', 'Scissors'];
    let choice = rpsChoice[Math.floor(Math.random()*rpsChoice.length)];
    return choice
}

let playerScore = 0;
let computerScore = 0;
let draw = 0;
let gamesPlayed = 1;

let button = document.querySelectorAll("button");

button.forEach(item => {
    item.addEventListener("click", () => {
        let playerSelection = item.innerText;
        playRound(playerSelection, computerPlay())
    })
});

let computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        document.getElementById("text").innerHTML = "Tie!"; 
        draw++;
        document.getElementById("draw").innerHTML = `Draw: ${draw}`;
    } else if (playerSelection   === 'Rock' && computerSelection === 'Paper') {
        document.getElementById("text").innerHTML = "You lose! Paper beats Rock.";
        computerScore++;
        document.getElementById("computer-score").innerHTML = `Computer score: ${computerScore}`;
    } else if (playerSelection  === 'Rock' && computerSelection === 'Scissors') {
        document.getElementById("text").innerHTML = "You win! Rock beats Scissors.";
        playerScore++;
        document.getElementById("player-score").innerHTML = `Player score: ${playerScore}`
    } else if (playerSelection   === 'Paper' && computerSelection === 'Paper') {
        document.getElementById("text").innerHTML = "Tie!"; 
        draw++;
        document.getElementById("draw").innerHTML = `Draw: ${draw}`;
    } else if (playerSelection   === 'Paper' && computerSelection === 'Rock') {
        document.getElementById("text").innerHTML = "You win! Paper beats Rock.";
        playerScore++;
        document.getElementById("player-score").innerHTML = `Player score: ${playerScore}`;
    } else if (playerSelection   === 'Paper' && computerSelection === 'Scissors') {
        document.getElementById("text").innerHTML = "You lose! Scissors beats Paper.";
        computerScore++;
        document.getElementById("computer-score").innerHTML = `Computer score: ${computerScore}`;
    } else if (playerSelection   === 'Rock' && computerSelection === 'Paper') {
        document.getElementById("text").innerHTML = "You lose! Paper beats Rock.";
        computerScore++;
        document.getElementById("computer-score").innerHTML = `Computer score: ${computerScore}`;
    } else if (playerSelection   === 'Scissors' && computerSelection === 'Scissors') {
        document.getElementById("text").innerHTML = "Tie.";
        draw++;
        document.getElementById("draw").innerHTML = `Draw: ${draw}`;
    } else if (playerSelection   === 'Scissors' && computerSelection === 'Paper') {
        document.getElementById("text").innerHTML = "You win! Scissors beats Paper.";
        playerScore++;
        document.getElementById("player-score").innerHTML = `Player score: ${playerScore}`;
    } else if (playerSelection   === 'Scissors' && computerSelection === 'Rock') {
        document.getElementById("text").innerHTML = "You lose! Rock beats Scissors.";
        computerScore++;
        document.getElementById("computer-score").innerHTML = `Computer score: ${computerScore}`;
    }
    if (playerScore === 5) {
        button.forEach(item => {
            item.disabled = true;
        })
        document.getElementById("text").innerHTML = "You win! Refresh to play again."
        } else if (computerScore === 5) {
        button.forEach(item => {
            item.disabled = true;
         })
        document.getElementById("text").innerHTML = "You lost. Refresh to play again."
        } else if (draw === 5) {
         button.forEach(item => {
            item.disabled = true;
          })
        document.getElementById("text").innerHTML = "All tied. Refresh to play again."
        };
}; 

