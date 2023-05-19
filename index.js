//0 is rock, 1 is paper, 2 is scissors
//9994 9995 9996 (rock paper scissors) emoji
function getRandChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    }

    if (playerSelection === 0) {
        if (computerSelection === 2) return 'win';
    }
    else if (playerSelection === 1) {
        if (computerSelection === 0) return 'win';
    }
    else if (playerSelection === 2){
        if (computerSelection === 1) return 'win';
    }
    return 'lose';
}

function game(){
    let playerScore = computerScore = 0;
    while (playerScore < 5 && computerScore < 5){
        let playerChoice = parseInt(prompt("Choose your play: 0-Rock, 1-Paper, 2-Scissors"));
        let computerChoice = getRandChoice();
        result = playRound(playerChoice, computerChoice);

        const select = ["Rock", "Paper", "Scissors"];
        if (result === 'win'){
            alert(`You win! ${select[playerChoice]} beats ${select[computerChoice]}`);
            playerScore++;
        }
        else if (result === 'lose'){
            alert(`You lose! ${select[computerChoice]} beats ${select[playerChoice]}`);
            computerScore++;
        }
        else{
            alert("It's a tie!");
        }
        alert(`You: ${playerScore}\nComputer: ${computerScore}`);
    }
    if (playerScore === 5) alert("You won best of 5!");
    else alert("Oh no! You lost best of 5.");
}