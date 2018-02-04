// 1. User will need to enter a random letter
// 2. Computer will randomize a letter
// 3. Guessed letter will be compared with computer's randomized letter
// 4. The guessed letters will be listed until guessed letter matches what the computer randomized or round is finished
// 5. Wins and losses will be tracked
// 6. Number of chances given per round will be displayed as well as subtracted until lose or win

var alphabets = ["a", "b", "c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var inputs = []
var wins = 0
var losses = 0
var chances = 3


document.onkeyup = function () {
    var userGuess = event.key.
        toLowerCase()

    inputs.push(userGuess)

    var computerChoices = alphabets[Math.floor(Math.random() * alphabets.length)]

    console.log(computerChoices)
    console.log(userGuess)

    if (alphabets.indexOf(userGuess) > -1) {
        if (userGuess === computerChoices) {
            wins++
            alert("Wins: " + wins)
            chances = 3
            inputs.length = 0
        } else if (chances === 0){
            losses++
            chances= 3
            inputs.length = 0
        } else {
            chances--
        }
    }
    else {
        alert("Only LETTERS are accepted!")
    }

    var html = "<p> Guess what letter I'm thinking of</pßß>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + chances + "</p>" +
        "<p>Your Guesses so far: " + inputs + "," + "</p>"

    document.querySelector("#game").innerHTML = html
}

