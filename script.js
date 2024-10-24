function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 2);
    if(computerChoice === 0){
        return "Rock";
    }
    else if(computerChoice === 1){
        return "Paper";
    }
    else{ 
        return "Scissors";
    }
}



function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    while(true){
        if(humanChoice === null){
            console.log("Ok, we can play some other time");
            return null;
        }
        else if(humanChoice === "rock"){
            return "Rock";
        }
        else if(humanChoice === "paper"){
            return "Paper";
        }
        else if(humanChoice === "scissors"){
            return "Scissors";
        }
        else {
            humanChoice = prompt("That isn't a valid answer! Try again: ");
        }
    }
}

const div = document.createElement('div');
div.classList.add('options');
document.appendChild(div);

const butt = document.createElement('button');
butt.classList.add()



function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Tie";
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper"){
        return "Human";
    }
    else {
        return "Computer";
    }
}
/*
function playGame(){
    console.log("Time to play rock paper scissors! Best out of 5")
    let humanPoints = 0;
    let computerPoints = 0;
    while(humanPoints < 3 && computerPoints < 3){
        let humanChoice = getHumanChoice();
        if(humanChoice === null){
            return;
        }
        let computerChoice = getComputerChoice();
        console.log("You chose " + humanChoice + " and the computer chose " + computerChoice);
        let winner = playRound(humanChoice, computerChoice);
        if(winner === "Tie"){
            console.log("It's a tie!");
        }
        else if(winner === "Human"){
            console.log("You win!");
            humanPoints++;
        }
        else if(winner === "Computer"){
            console.log("You lose!");
            computerPoints++;
        }
        console.log("Your points: " + humanPoints);
        console.log("Computer's points: " + computerPoints);
    }
    if(humanPoints === 3){
        console.log("You won best out of 5!")
    }
    else{
        console.log("You lost best out of 5");
    }
}
*/
// Track scores for both player and computer
let playerScore = 0;
let computerScore = 0;

// Selections for the game
const selections = ['rock', 'paper', 'scissors'];

// Buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Div elements for displaying results
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');

// Attach event listeners to buttons
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

// Function that computes the computer's selection randomly
function computerPlay() {
    const randomIndex = Math.floor(Math.random() * selections.length);
    return selections[randomIndex];
}

// Function that determines who wins the round
function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        resultDiv.textContent = `It's a tie! You both selected ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // Update the score
    updateScore();

    // Check if the game has been won by either player and declare winner
    if (playerScore === 5) {
        declareWinner('Player');
    } else if (computerScore === 5) {
        declareWinner('Computer');
    }
}

// Function to update score in the UI
function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Function to disable buttons and declare the winner
function declareWinner(winner) {
    winnerDiv.textContent = `${winner} has reached 5 points and is the winner!`;
    
    // Disable buttons after a winner is declared
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Optional: Reset the game after a winner is declared (can be called via another button)
// function resetGame() {
//     playerScore = 0;
//     computerScore = 0;
//     winnerDiv.textContent = '';
//     resultDiv.textContent = '';
//     updateScore();
//     rockBtn.disabled = false;
//     paperBtn.disabled = false;
//     scissorsBtn.disabled = false;
// }

playGame();

### Steps:
1. Create a basic HTML structure containing 3 buttons: Rock, Paper, and Scissors.
2. A `div` is used to display game results.
3. Event listeners are attached to each button to trigger the `playRound` function with the correct player choice.
4. The player's and the computer's scores will be tracked, and once someone reaches 5 points, the game will declare the winner and disable the buttons.


