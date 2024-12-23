console.log("Welcome to the Rock!, Paper! Scissors! game show🎶🤡✌️🤡");

// This is the function to get Computer's choice:

const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choiceforComputer = choice[Math.floor(Math.random() * choice.length)];
    return choiceforComputer;
}


// This is the function to get Human's choice:
function getHumanChoice() {
    
    let choiceforHuman = " ";
    
    let human = prompt("Predict the perfect match for the computer between 'rock', 'paper' and 'scissors' ").toLowerCase();

    switch(human) {
        case "rock":
            choiceforHuman = "rock";
                break;
        case "paper":
            choiceforHuman = "paper";
                break;
        case "scissors":
            choiceforHuman = "scissors";
                break;
        default:
    }
    return choiceforHuman;
}

//To keep record of players scores
let humanScore = 0;
let computerScore = 0;

let playRound = function(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) 
        {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } 
    else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) 
        {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } 
    else {
        console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
    }

    // Log the updated scores
    console.log(`Player - ${humanScore} : Computer - ${computerScore}`);
};

function playGame() {
    
    for (let i = 0; i < 5; i++) { 
        playRound(getHumanChoice(), getComputerChoice());  
    }
    
    if (humanScore > computerScore) {
        console.log("Hello Player! You WON!");
        console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log("Hello player! Computer WON!");
        console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
    else {
        console.log("Ooh! we go again!");
        console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();