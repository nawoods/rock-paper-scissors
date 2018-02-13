function computerPlay() {
    let rand = Math.random() * 3;
    if (rand < 1) {
        return "rock";
    }
    if (rand < 2) {
        return "paper";
    }
    return "scissors";
}

function playerPlay() {
    let selection;
    while (true) {
        selection = prompt("Enter rock, paper, or scissors");
        selection = selection.toLowerCase();
        if (selection === "rock" || selection === "paper" || selection === "scissors") {
            break;
        }
        alert("Sorry, try again");
    }
    return selection;
}

function capitalize(string) {
    let begin = string.slice(0,1).toUpperCase();
    let end = string.slice(1).toLowerCase();
    return begin + end;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "Tie round! You both chose " + playerSelection;
    }
    
    let playerWins = (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper");
        
    if (playerWins) {
        return "You win! " + capitalize(playerSelection) + " beats " + computerSelection;
    }
    return "You lose! " + capitalize(computerSelection) + " beats " + playerSelection;
    
}

function selectPlay(selection) {
    console.log(playRound("rock", computerPlay()));
}

let wins = 0;
let losses = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => selectPlay("rock"));
paper.addEventListener('click', () => selectPlay("paper"));
scissors.addEventListener('click', () => selectPlay("scissors"));