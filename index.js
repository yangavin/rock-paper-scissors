//0 is rock, 1 is paper, 2 is scissors
//'&#9994' '&#9995' '&#9996' (rock paper scissors) emoji
//'&#1F36A' cookie
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
    else if (playerSelection === 2) {
        if (computerSelection === 1) return 'win';
    }
    return 'lose';
}

function game() {
    let playerScore = computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = parseInt(prompt("Choose your play: 0-Rock, 1-Paper, 2-Scissors"));
        let computerChoice = getRandChoice();
        result = playRound(playerChoice, computerChoice);

        const select = ["Rock", "Paper", "Scissors"];
        if (result === 'win') {
            alert(`You win! ${select[playerChoice]} beats ${select[computerChoice]}`);
            playerScore++;
        }
        else if (result === 'lose') {
            alert(`You lose! ${select[computerChoice]} beats ${select[playerChoice]}`);
            computerScore++;
        }
        else {
            alert("It's a tie!");
        }
        alert(`You: ${playerScore}\nComputer: ${computerScore}`);
    }
    if (playerScore === 5) alert("You won best of 5!");
    else alert("Oh no! You lost best of 5.");
}

//Selecting all relavant elements
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let yourPlay = document.querySelector('#your-play-emoji');
let computerPlay = document.querySelector('#computer-play-emoji');
let message = document.querySelector('#message');
let yourScoreElement = document.querySelector('#your-score');
let computerScoreElement = document.querySelector('#computer-score');
let result = document.querySelector('#result');
let restart = document.querySelector('#restart-container');

//Indexing emoji codes, easy evaluation of choices from 0-2
const choices = ['Rock', 'Paper', 'Scissors'];
const emojis = ['&#9994', '&#9995', '&#9996'];

function displayEmoji(parent, emoji) {
    parent.innerHTML = emoji;
    parent.classList.add('fade-in');
    setTimeout(() => {
        parent.classList.remove('fade-in');
    }, 200);
}

let yourScore = computerScore = 0;

function playRoundClick(playerChoice){
    displayEmoji(yourPlay, emojis[playerChoice]);
    let computerChoice = getRandChoice();
    displayEmoji(computerPlay, emojis[computerChoice]);
    let result = playRound(playerChoice, computerChoice);
    if (result === 'win'){
        message.textContent = `You Won! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
        yourScore++;
        yourScoreElement.textContent = `You: ${yourScore}`;
    }
    else if (result === 'lose'){
        console.log("LOSE RAN");
        message.textContent = `You Lost: ${choices[computerChoice]} beats ${choices[playerChoice]}`;
        computerScore++;
        computerScoreElement.textContent = `You: ${computerScore}`;
    }
    else{
        message.textContent = 'Tie!';
    }
    if (yourScore === 5){
        gameOver('won');
    }
    else if (computerScore === 5){
        gameOver('lose');
    }
}

function gameOver(state){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    if (state === 'won'){
        result.textContent = 'You Won Best of 5!';
        message.innerHTML = 'Here, have this cookie &#x1F36A';
    }
    else{
        result.textContent = 'You Lost Best of 5';
        const messages = ['(ノ-_-)ノ ミ ┴┴', '(☞ ͡° ͜ʖ ͡°)☞', '¯\\_( ͡° ͜ʖ ͡°)_/¯'];
        message.textContent = messages[getRandChoice()];
    }
    restart.style.display = 'flex';
}

rock.addEventListener('click', ()=>{
    playRoundClick(0);
});
paper.addEventListener('click', ()=>{
    playRoundClick(1);
});
scissors.addEventListener('click', ()=>{
    playRoundClick(2);
});