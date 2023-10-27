"use strict";

function guess() {
    let randNum = Math.floor(Math.random() * 100 + 1);
    let guessCount = 1;

    console.log(randNum);

    document.getElementById("submitguess").onclick = function () {
        let currentGuess = document.getElementById("guessField").value;

        if (currentGuess == randNum && guessCount == 1) {
            alert("CONGRATULATIONS!!! IT TOOK YOU " + guessCount + " TRY");
        }
        else if (currentGuess == randNum) {
            alert("CONGRATULATIONS!!! IT TOOK YOU " + guessCount + " TRIES")
        }
        else if (currentGuess > randNum) {
            guessCount++;
            alert("GUESS A SMALLER NUMBER THAN " + currentGuess);
        }
        else {
            guessCount++;
            alert("TRY A GREATER NUMBER THAN " + currentGuess);
        }
    }
}

guess();