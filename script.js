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

function reset() {
    humanScore = 0;
    computerScore = 0;
}

let computerScore = 0;
let humanScore = 0;

const reset_button = document.querySelector(".reset");
reset_button.addEventListener("click", e => {
    reset();
});

const buttons = document.querySelectorAll("div button");

buttons.forEach((button) => {
   button.addEventListener("click", e => {
    playRound(e.target.textContent, getComputerChoice()); 
   });
});

function playRound(human = "rock", cpu = getComputerChoice()) {
    const result_div = document.querySelector(".result");
    const scoreboard = document.querySelector(".score");
    human = human.toLowerCase();
    if (human === cpu){
        result_div.textContent = "it's a tie!";
    }
    switch (human) {
        case "rock":
            if (cpu === "paper") {
                result_div.textContent = "You lose! paper beats rock.";
                computerScore += 1;
            } else {
                result_div.textContent = "You win! rock beats scissors";
                humanScore += 1;
            }
            break;

        case "paper":
            if (cpu === "scissors") {
                result_div.textContent = "You lose! scissors beats paper.";
                computerScore += 1;
            } else {
                result_div.textContent = "You win! paper beats rock";
                humanScore += 1;
            }
            break;

        case "scissors":
            if (cpu === "rock") {
                result_div.textContent = "You lose! rock beats scissors.";
                computerScore += 1;
            } else {
                result_div.textContent = "You win! scissors beats paper";
                humanScore += 1;
            }
    }    
    if (humanScore === 5) {
        scoreboard.textContent = "You won!";
    } else if (computerScore === 5) {
        scoreboard.textContent = "Cpu won!";
    } else {
        scoreboard.textContent = `score -- human ${humanScore} | cpu ${computerScore}`;
    }
}


