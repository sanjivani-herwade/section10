const puzzleEl = document.querySelector('itPuzzle')
const puzzleEl = document.querySelector('itGuesses')

const game1 = Hangman ('sanju', 23)
puzzleEL.textContent = game1.getPuzzle()
guessesEL.textContent = game1.getStatusMessage()
    //console.log(game1.status)

window.addEventListener = ('keypress' function (e) {
    const guess = string.fromCharCode(e.CharCode)
    game1.makeGuess(guess)
    puzzleEL.textContent = game1.getPuzzle()
    guessesEL.textContent = game1.getStatusMessage()
    //console.log(game1.status)
})


 
