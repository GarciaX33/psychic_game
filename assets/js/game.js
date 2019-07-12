// WIll set the global variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;


// Will set empty array for users letter, and array for availiable letters
var userLetter = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Will use math.floor and math.random method to pick a letter for user to guess
var randomLetterPick = Math.floor(Math.random() * letters.length);
var chosenLetter = letters[randomLetterPick];
console.log(chosenLetter);
// will display the amount of guesses a user has left
function displayGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}
// will display which letter keys the user is pressing/choosing
function forUserGuesses() {
    document.querySelector("#userLetters").innerHTML = "Your guesses so far: " + userLetter.join(' ');
}

displayGuessesLeft();

function reset() {
    guessesLeft = 10;
    userLetter = [];
}


// will set onkeyevent for wins and losses
document.onkeyup = function (event) {
    //will remove a guess after every key press/letter guess
    guessesLeft--;
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    userLetter.push(userGuess);
    displayGuessesLeft();
    forUserGuesses();
// will check if user guess matches the initial random letter, if match then will add 
// win then choose a new letter and reset
    if (userGuess === chosenLetter) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        chosenLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(chosenLetter)
        alert("You WIN!");
        reset();
    }
    //will check if user still has guesses left, once reaching 0 a loss will be update to display
    else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        alert("You LOST!");
        reset();
    }
};