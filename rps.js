// JavaScript functions to play rock paper scissors.

// Establish Global Variables
var resultLog = [0, 0];
var gameCount = 0;

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
    console.log(`Player: ${playerInt}\nComputer: ${compInt}\n`)

    // who wins?
    var winner = "Tie";
    if (playerInt === compInt) {
        results = "It's a Tie!";
        return winner;
    }
    else if ((playerInt > compInt || (playerInt === 0 && compInt === 2))&& !(playerInt === 2 && compInt === 0)) {
        results = ` ${weapons[playerInt]} beats ${weapons[compInt]}\n`;
        winner = "Player";
    }
    else {
        results = ` ${weapons[compInt]} beats ${weapons[playerInt]}\n`;
        winner = "Computer";
    }

    console.log(results);
    return winner;
}

const playerLog = document.querySelector('#log0');
const computerLog = document.querySelector('#log1');
const prevGame = document.querySelector('.prevGame');
const totalGames = document.querySelector('.totalGames');
totalGames.textContent =  0 ;

document.querySelectorAll('#weaponSelect').forEach(item => {
    item.addEventListener('click', () => {
        computerSelection = computerPlay();
        console.log(computerSelection);
        playerSelection = item.textContent;
        
        var newLi = document.createElement('li');

        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "Player") {
            resultLog[0]++;
            newLi.textContent = `Player Wins! ${results}`;
            newLi.style = "color: lightgreen";
        }
        else if (roundResult === "Computer") {
            resultLog[1]++;
            newLi.textContent = `Computer Wins! ${results}`
            newLi.style = "color: lightcoral";
        }
        else if (roundResult === "Tie") {
            newLi.textContent = `It's A Tie`;
        }
        else {
            newLi.textContent = "Something Went Wrong...";
        }
        
        gameCount++;
        totalGames.textContent = `${gameCount}`;
        prevGame.appendChild(newLi);
        playerLog.textContent = `${resultLog[0]}`;
        computerLog.textContent = `${resultLog[1]}`;
        
        

    })
});
