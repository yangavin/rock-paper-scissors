//0 is rock, 1 is paper, 2 is scissors
//'&#9994' '&#9995' '&#9996' (rock paper scissors) emoji
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

//Selecting all relavant elements
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let yourPlay = document.querySelector('#your-play-emoji');
let computerPlay = document.querySelector('#computer-play-emoji');

//Indexing emoji codes, easy evaluation of getRandChoice()'s reutrn value
const emojis = ['&#9994', '&#9995', '&#9996'];

function displayEmoji(parent, emoji){
    parent.innerHTML = emoji;
    parent.classList.add('fade-in');
    setTimeout(()=> {
        parent.classList.remove('fade-in');
      }, 200);
}

rock.addEventListener('click', ()=>{
    displayEmoji(yourPlay, '&#9994');
    let computerChoice = getRandChoice();
    displayEmoji(computerPlay, emojis[computerChoice]);
    let result = playRound(0, computerChoice);
    console.log(result);
    }
);
paper.addEventListener('click', ()=>{
    displayEmoji(yourPlay, '&#9995');
    let computerChoice = getRandChoice();
    displayEmoji(computerPlay, emojis[computerChoice]);
    let result = playRound(0, computerChoice);
    console.log(result);
});
scissors.addEventListener('click', ()=>{
    displayEmoji(yourPlay, '&#9996');
    let computerChoice = getRandChoice();
    displayEmoji(computerPlay, emojis[computerChoice]);
    let result = playRound(0, computerChoice);
    console.log(result);
});