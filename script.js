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



// Die Schritte werden wiederholt, bis jemand drei Punkte erreicht
function playGame() {
    // Punktevariablen deklarieren
    let humanScore = 0;
    let computerScore = 0;

    // result-div auswählen
    let resultsDiv = document.querySelector('#results');

    // Logik zum Spielen einer Runde
    // Der Runden-Gewinner wird ausgewertet und erhält einen Punkt
    function playRound(humanChoice, computerChoice) {
        // humanCoice === Stein
        if (humanChoice === 'Stein' && computerChoice === 'Schere') {
            humanScore++;
            resultsDiv.textContent = 'Du gewinnst! Stein schlägt Schere.';
        }
        else if (humanChoice === 'Stein' && computerChoice === 'Papier') {
            computerScore++;
            resultsDiv.textContent = 'Du verlierst! Papier schlägt Stein.';
        }
        else if (humanChoice === 'Stein' && computerChoice === 'Stein') {
            resultsDiv.textContent = 'Stein und Stein sorgen für unentschieden! Keiner erhält einen Punkt.';
        }
        // humanChoice === Papier
        else if (humanChoice === 'Papier' && computerChoice === 'Stein') {
            humanScore++;
            resultsDiv.textContent = 'Du gewinnst! Papier schlägt Stein.';
        }
        else if (humanChoice === 'Papier' && computerChoice === 'Schere') {
            computerScore++;
            resultsDiv.textContent = 'Du verlierst! Schere schlägt Papier.';
        }
        else if (humanChoice === 'Papier' && computerChoice === 'Papier') {
            resultsDiv.textContent = 'Papier und Papier sorgen für unentschieden! Keiner erhält einen Punkt.';
        }
        // humanChoice === Schere
        else if (humanChoice === 'Schere' && computerChoice === 'Papier') {
            humanScore++;
            resultsDiv.textContent = 'Du gewinnst! Schere schlägt Papier.';
        }
        else if (humanChoice === 'Schere' && computerChoice === 'Stein') {
            computerScore++;
            resultsDiv.textContent = 'Du verlierst! Stein schlägt Schere,';
        }
        else if (humanChoice === 'Schere' && computerChoice === 'Schere') {
            resultsDiv.textContent = 'Schere und Schere sorgen für unentschieden! Keiner erhält einen Punkt.';
        }
    }

    // HTML-Buttons auswählen
    let rockBtn = document.querySelector('#rockBtn');
    let paperBtn = document.querySelector('#paperBtn');
    let scissorBtn = document.querySelector('#scissorBtn');

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


    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

}
playGame();


// Wer als erstes 3 Punkte erreicht, hat gewonnen