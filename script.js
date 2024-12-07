'use strict';

// Der Computer trifft eine zufällige Auswahl
function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 1/3) {
        return 'Stein';
    }
    else if (randomNumber <= 2/3) {
        return 'Papier';
    }
    else {
        return 'Schere';
    }
}

// Der Spieler trifft eine Auswahl
function getHumanChoice() {
    let choice = prompt('Wähle zwischen Stein, Papier oder Schere aus und gib es in das Eingabefeld ein:').toLowerCase();
    if (choice === 'stein') {
        return 'Stein';
    }
    else if (choice === 'papier') {
        return 'Papier';
    }
    else if (choice === 'schere') {
        return 'Schere';
    }
    else {
        return 'Das ist keine gültige Eingabe!';
    }
}

// Punktevariablen deklarieren
let humanScore = 0;
let computerScore = 0;

// Logik zum Spielen einer Runde
// Der Runden-Gewinner wird ausgewertet und erhält einen Punkt
function playRound(humanChoice, computerChoice) {
    // humanCoice === Stein
    if (humanChoice === 'Stein' && computerChoice === 'Schere') {
        humanScore++;
        console.log('Du gewinnst! Stein schlägt Schere.');
    }
    else if (humanChoice === 'Stein' && computerChoice === 'Papier') {
        computerScore++;
        console.log('Du verlierst! Papier schlägt Stein.');
    }
    else if (humanChoice === 'Stein' && computerChoice === 'Stein') {
        console.log('Stein und Stein sorgen für unentschieden! Keiner erhält einen Punkt.');
    }
    // humanChoice === Papier
    else if (humanChoice === 'Papier' && computerChoice === 'Stein') {
        humanScore++;
        console.log('Du gewinnst! Papier schlägt Stein.');
    }
    else if (humanChoice === 'Papier' && computerChoice === 'Schere') {
        computerScore++;
        console.log('Du verlierst! Schere schlägt Papier.');
    }
    else if (humanChoice === 'Papier' && computerChoice === 'Papier') {
        console.log('Papier und Papier sorgen für unentschieden! Keiner erhält einen Punkt.');
    }
    // humanChoice === Schere
    else if (humanChoice === 'Schere' && computerChoice === 'Papier') {
        humanScore++;
        console.log('Du gewinnst! Schere schlägt Papier.');
    }
    else if (humanChoice === 'Schere' && computerChoice === 'Stein') {
        computerScore++;
        console.log('Du verlierst! Stein schlägt Schere,');
    }
    else if (humanChoice === 'Schere' && computerChoice === 'Schere') {
        console.log('Schere und Schere sorgen für unentschieden! Keiner erhält einen Punkt.');
    }
    else {
        alert('Deine Eingabe ist nicht gültig!');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Die Schritte werden wiederholt, bis jemand drei Punkte erreicht
function playGame() {
    
}

// Wer als erstes 3 Punkte erreicht, hat gewonnen