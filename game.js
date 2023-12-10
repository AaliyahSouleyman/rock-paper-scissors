function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor((Math.random()) * 3)]
}




function playRound(playerSelection, computerSelection){
    let message;
    if (playerSelection.toLowerCase() == computerSelection) {
         message = `Tie Game! ${playerSelection} equals ${computerSelection}. Let's play again!`
         console.log(message)
         playerSelection = prompt();
         computerSelection = getComputerChoice();
         return playRound(playerSelection, computerSelection)
               
    } else if (playerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
       
        message = `You Win! ${playerSelection} beats ${computerSelection}`
        console.log(message)
        return message
    } else {
        
        message = `You Lose! ${computerSelection} beats ${playerSelection}`
        console.log(message)
        return message
    }
}

function game() {
    let computerScore = 0 
    let playerScore = 0
    let playerSelection, computerSelection, winnerMessage
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt();
        computerSelection = getComputerChoice();
        winnerMessage = playRound(playerSelection, computerSelection)
        if (winnerMessage.includes('You Win!')) {
            ++playerScore
        } else {
            ++computerScore
        }
    }

    return (playerScore > computerScore) ? `You Win! ${playerScore}` : `Computer Wins ${computerScore}`
}

console.log(game())