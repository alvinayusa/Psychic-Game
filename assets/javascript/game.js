// 1. User will need to enter a random letter
// 2. Computer will randomize a letter
// 3. Guessed letter will be compared with computer's randomized letter
// 4. The guessed letters will be listed until guessed letter matches what the computer randomized or round is finished
// 5. Wins and losses will be tracked
// 6. Number of chances given per round will be displayed as well as subtracted until lose or win
// -----------------------------------------------------


// array for the computerChoices
var alphabets = ["a", "b", "c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// array to capture the userGuesses
var inputs = [] 
// variables to write to HTML
var wins = 0
var losses = 0
var chances = 3

// user will need to enter a random letter
document.onkeyup = function () {
    var userGuess = event.key.
        toLowerCase()
// user input will be captured in new array - inputs
    inputs.push(userGuess)
// computer will randomize letters from the alphabets array
    var computerChoices = alphabets[Math.floor(Math.random() * alphabets.length)]

    // console.log(computerChoices)
    // console.log(userGuess)

// the userGuesses should only be within the alphabets list.
    if (alphabets.indexOf(userGuess) > -1) {
        
        // if userGuess and Computer choices match:
        // add to the wins, write the alert, reset the chances per round, empty the inputs array
        if (userGuess === computerChoices) {
            wins++
            alert("Wins: " + wins)
            chances = 3
            inputs.length = 0
        // if the chances per round reaches 0, losses are incremented, chances is zeroed out, empty the inputs array
        } else if (chances === 0){
            losses++
            chances= 3
            inputs.length = 0
        // subtract chances per round until a good match
        } else {
            chances--
        }
    }
// if the userGuesses is not within the alphabets list, alert to not accept. 
    else {
        alert("Only LETTERS are accepted!")
    }
// create a new variable to write to HTML's div section
    var html = "<p> Guess what letter I'm thinking of</pßß>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + chances + "</p>" +
        "<p>Your Guesses so far: " + inputs + "," + "</p>"
// write back html variable using innerHTML method
    document.querySelector("#game").innerHTML = html
}

