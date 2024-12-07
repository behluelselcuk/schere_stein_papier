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

// Der Gewinner wird ausgewertet
// Der Gewinner erhält einen Punkt
// Die Schritte werden wiederholt, bis jemand drei Punkte erreicht
// Wer als erstes 3 Punkte erreicht, hat gewonnen