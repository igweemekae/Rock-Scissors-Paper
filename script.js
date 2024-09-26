function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
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
    while(true){
        if(humanChoice === null){
            console.log("Ok, we can play some other time");
            return null;
        }
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice === "rock"){
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

playGame();