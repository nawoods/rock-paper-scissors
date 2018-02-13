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


function capitalize(string) {
    let begin = string.slice(0,1).toUpperCase();
    let end = string.slice(1).toLowerCase();
    return begin + end;
}


function addWinLosses(round) {
    if (round.slice(0, 5) === "You w") {
        wins++;
    } else if (round.slice(0, 5) === "You l") {
        losses++;
    } else {
        draws++;
    }
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
    const round = playRound(selection, computerPlay());
    addWinLosses(round);
    
    gameResult.innerHTML = round;
    score.innerHTML = "Wins: " + wins + " Losses: " + losses + " Draws: " + draws;
    
    if (wins + losses + draws === 5) {
        if (wins > losses) {
            matchResult.innerHTML = "Game over! You win!";
        } else if (losses > wins) {
            matchResult.innerHTML = "Game over! The computer wins!";
        } else {
            matchResult.innerHTML = "Game over! It's a tie!";
        }
        
        wins = 0;
        losses = 0;
        draws = 0;
    } else {
        matchResult.innerHTML = "";
    }
}


let wins = 0;
let losses = 0;
let draws = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const gameResult = document.querySelector('#game-result');
const score = document.querySelector('#score');
const matchResult = document.querySelector('#match-result');

rock.addEventListener('click', () => selectPlay("rock"));
paper.addEventListener('click', () => selectPlay("paper"));
scissors.addEventListener('click', () => selectPlay("scissors"));