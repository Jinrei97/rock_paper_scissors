function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.333) {
        return "rock";
    } else if (choice < 0.667) {
        return "paper";
    } else {
        return "scissors";
    }
};
/*
function test(n){
    let n_rock = 0;
    let n_paper = 0;
    let n_scissors = 0;
    for (let i = 0; i <= n; i++) {
       let choice = getComputerChoice();
       switch (choice) {
        case "rock":
            n_rock += 1;
            break;
        case "paper":
            n_paper += 1;
            break;
        case "scissors":
            n_scissors += 1;
       }
    }
    console.log(`rocks: ${n_rock}, papers: ${n_paper}, scissors ${n_scissors}`)
};
*/

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?");
    choice = choice.toLowerCase();
    switch (choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice;
            break;
        default:
            alert("scelta non valida");
            return getHumanChoice();
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(human = getHumanChoice(), cpu = getComputerChoice()) {
    if (human === cpu){
        console.log("it's a tie!");
    }
    switch (human) {
        case "rock":
            if (cpu === "paper") {
                console.log("You lose! paper beats rock.")
                computerScore += 1;
            } else {
                console.log("You win! rock beats scissors");
                humanScore += 1;
            }
            break;

        case "paper":
            if (cpu === "scissors") {
                console.log("You lose! scissors beats paper.")
                computerScore += 1;
            } else {
                console.log("You win! paper beats rock");
                humanScore += 1;
            }
            break;

        case "scissors":
            if (cpu === "rock") {
                console.log("You lose! rock beats scissors.")
                computerScore += 1;
            } else {
                console.log("You win! scissors beats paper");
                humanScore += 1;
            }
    }    
    console.log(`score -- human ${humanScore} | cpu ${computerScore}`);
}