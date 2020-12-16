// JavaScript functions to play rock paper scissors.




function computerPlay() {
    var random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "Rock";
    }
    else if (random === 1) {
        return "Paper";
    }
    else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    var weapons = ["ROCK", "PAPER", "SCISSORS"];
    
    // bad inputs check
    
    // player
    var isbad = 1;
    var playerInt = null;
    for (i = 0; i < weapons.length; i++) {
        if (weapons[i] === playerSelection) {
            isbad = 0;
            playerInt = i;
        }
    }
    if (isbad === 1) {
        console.log("INPUT ERROR: playerSelection weapon is illegal\n");
        return 1;
    }
    // computer
    isbad = 1;
    var compInt = null;
    for (i = 0; i < weapons.length; i++) {
        if (weapons[i] === computerSelection) {
            isbad = 0;
            compInt = i;
        }
    }
    if (isbad === 1) {
        console.log("INPUT ERROR: computerSelection weapon is illegal\n");
        return 1;
    }


    // who wins?
    var winner = "Tie";
    if (playerInt === compInt) {
        console.log("It's a Tie!");
        return winner;
    }
    else if (playerInt > compInt || (playerInt === 0 && compInt === 2)) {
        var results = `You win, bastard! ${weapons[playerInt]} beats ${weapons[compInt]}\n`;
        winner = "Player";
    }
    else {
        var results = `You lose, motherfucker! ${weapons[compInt]} beats ${weapons[playerInt]}\n`;
        winner = "Computer";
    }

    console.log(results);
    return winner;
}

function game() {
    var resultLog = [0, 0];
    gamesToWin = 3; // best 3 of 5
    var gameCount = 0;
    while (resultLog[0] < gamesToWin && resultLog[1] < gamesToWin) {
        // weapon select
        var playerSelection = prompt(`Rock, Paper, or Scissors?  `);
        var computerSelection = computerPlay();

        var roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "Player") {
            resultLog[0]++;
        }
        else if (roundResult === "Computer") {
            resultLog[1]++;
        }
        else if (roundResult === "Tie") {
            console.log("Be original next time, bro\n");
        }
        else {
            console.log("Play by the rules, you cunt!\n");
        }
        console.log(`Current Score: \n    Player: ${resultLog[0]}\n    Computer: ${resultLog[1]}\n\n`);
        gameCount++;
    }

    var finalResult;
    if (resultLog[0] > resultLog[1]) {
        finalResult = `Well done! You won in ${gameCount} games! \n Final Result:  Player ${resultLog[0]};    Computer ${resultLog[1]}\n\n`;
    }
    else {
        finalResult = `Sorry! You lost in ${gameCount} games! \n Final Result:  Player ${resultLog[0]};    Computer ${resultLog[1]}\n\n`;
    }
    return finalResult;
}
console.log(game());