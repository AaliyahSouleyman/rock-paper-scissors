function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor((Math.random()) * 3)]
}

const playerSelection = 'Paper'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))

function playRound(playerSelection, computerSelection){
    let message;
    if (playerSelection.toLowerCase() == computerSelection) {
         message = `Tie Game! ${playerSelection} equals ${computerSelection}. Let's play again!`
         console.log(message)
    } else if (playerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        message = `You Win! ${playerSelection} beats ${computerSelection}`
        return message
    } else {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`
        return message
    }
}

// function game() {
//     let computerScore, playerScore = 0;
//     for (let i = 0; i < 5; i++) {
        
//     }
// }