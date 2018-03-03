document.addEventListener("DOMContentLoaded", function(event) {
//variables to declare on load
    var wins = 0;
    var losses = 0;
    var userGuesses = ["Choose a letter to begin!"];
    var guessesRemaining = 15;
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var computerPick;
//DOM updates.
    var updateGuessesRemaining = function () {
        document.querySelector("#remainingGuesses").innerHTML = guessesRemaining;
    }
    
    var updateUserGuesses = function() {
        document.querySelector("#userGuesses").innerHTML = userGuesses.join(", ");
    };

    var updateWins = function() {
        document.querySelector("#winColumn").innerHTML = wins;
    }

    var updateLosses = function() {
        document.querySelector("#lossColumn").innerHTML = losses;
    }
//Randomly generated computer pick.
    var generateComputerPick = function() {
        computerPick = letters[Math.floor(Math.random() * letters.length)];
    };
//Reset the game when win or lose.
    var resetGame = function() {
        userGuesses = ["Choose a letter to begin!"];
        guessesRemaining = 15;
        generateComputerPick();
        updateGuessesRemaining();
        updateUserGuesses();
    }
//Set a random letter to guess on page load. We don't want the key to change everytime key is pressed so loads with the page.
    updateUserGuesses();
    generateComputerPick();

//Kick off the game
    document.onkeyup = function (event) {
        var userInput = event.key.toUpperCase();
        if (letters.indexOf(userInput) > -1) {
            //Update the guesses remaining everytime a key is selected
            guessesRemaining--;
            if (userGuesses.indexOf("Choose a letter to begin!") > -1) {
                userGuesses = [];
            };
            updateGuessesRemaining();
            //Set a variable to the users input and push it to our User Guesses array for display in DOM.

            userGuesses.push(userInput);

            //Display the users guess in the DOM.
            updateUserGuesses();
            //If the user guesses the letter picked the computer win, reset the game.
            if (userInput === computerPick) {
                wins++;
                updateWins();
                alert("You Win! Winning Key: " + userInput + " :-)")
                resetGame();
            }
            //If Guesses left reaches 0 lose, reset the game.
            if (guessesRemaining == 0) {
                losses++;
                updateLosses();
                alert("You Lose! :-(")
                resetGame();
            }
        }
        else {
            alert("Use letters A through Z only!")
        }
    }
})
