'use strict';

// Elemente aus dem HTML-Dokument auswählen
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorBtn = document.querySelector('#scissorBtn');
const resultsDiv = document.querySelector('#results');
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');
const winnerDiv = document.querySelector('#winner');
const resetBtn = document.querySelector('#resetBtn');

// Punktestände initialisieren
let humanScore = 0;
let computerScore = 0;

// Funktion: Computer trifft eine zufällige Auswahl
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'Stein';
    } else if (randomNumber < 2 / 3) {
        return 'Papier';
    } else {
        return 'Schere';
    }
}

// Funktion: Gewinner überprüfen
function checkWinner() {
    if (humanScore === 5) {
        winnerDiv.textContent = 'Herzlichen Glückwunsch! Du hast das Spiel gewonnen!';
        endGame();
    } else if (computerScore === 5) {
        winnerDiv.textContent = 'Schade! Der Computer hat das Spiel gewonnen.';
        endGame();
    }
}

// Funktion: Spiel beenden
function endGame() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    resetBtn.style.display = 'block'; // Neustart-Button einblenden
}

// Funktion: Spiel zurücksetzen
resetBtn.addEventListener('click', () => {
    // Punktestände zurücksetzen
    humanScore = 0;
    computerScore = 0;

    // Texte zurücksetzen
    playerScoreText.textContent = 'Player score: 0';
    computerScoreText.textContent = 'Computer score: 0';
    resultsDiv.textContent = '';
    winnerDiv.textContent = '';

    // Buttons wieder aktivieren
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;

    // Neustart-Button ausblenden
    resetBtn.style.display = 'none';
});

// Funktion: Eine Runde spielen
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'Stein' && computerChoice === 'Schere') {
        humanScore++;
        playerScoreText.textContent = `Player score: ${humanScore}`;
        resultsDiv.textContent = 'Du gewinnst! Stein schlägt Schere.';
    } else if (humanChoice === 'Stein' && computerChoice === 'Papier') {
        computerScore++;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        resultsDiv.textContent = 'Du verlierst! Papier schlägt Stein.';
    } else if (humanChoice === 'Stein' && computerChoice === 'Stein') {
        resultsDiv.textContent = 'Unentschieden! Stein und Stein sorgen für keinen Punkt.';
    } else if (humanChoice === 'Papier' && computerChoice === 'Stein') {
        humanScore++;
        playerScoreText.textContent = `Player score: ${humanScore}`;
        resultsDiv.textContent = 'Du gewinnst! Papier schlägt Stein.';
    } else if (humanChoice === 'Papier' && computerChoice === 'Schere') {
        computerScore++;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        resultsDiv.textContent = 'Du verlierst! Schere schlägt Papier.';
    } else if (humanChoice === 'Papier' && computerChoice === 'Papier') {
        resultsDiv.textContent = 'Unentschieden! Papier und Papier sorgen für keinen Punkt.';
    } else if (humanChoice === 'Schere' && computerChoice === 'Papier') {
        humanScore++;
        playerScoreText.textContent = `Player score: ${humanScore}`;
        resultsDiv.textContent = 'Du gewinnst! Schere schlägt Papier.';
    } else if (humanChoice === 'Schere' && computerChoice === 'Stein') {
        computerScore++;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        resultsDiv.textContent = 'Du verlierst! Stein schlägt Schere.';
    } else if (humanChoice === 'Schere' && computerChoice === 'Schere') {
        resultsDiv.textContent = 'Unentschieden! Schere und Schere sorgen für keinen Punkt.';
    }

    // Gewinner überprüfen
    checkWinner();
}

// Event-Listener für die Buttons
rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('Stein', computerSelection);
});

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('Papier', computerSelection);
});

scissorBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('Schere', computerSelection);
});
