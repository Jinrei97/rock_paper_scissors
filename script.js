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
