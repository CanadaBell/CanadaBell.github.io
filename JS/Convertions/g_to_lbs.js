// all needed vars
let g = 0
let lbs = 0
let oz = 0

const charRegex = /([ --])/g // regex for + and - (plus inbetween)
const alphabetRegex = /([A-~])/g // regex for all letters

// Checks if number is not whole number and has decimals longer than 4, then uses toFixed to round 
function roundInput(inputNeedRound) {
    inputNeedRound = String(inputNeedRound)
    dot = inputNeedRound.indexOf('.')
    if (dot != -1 && inputNeedRound.slice(dot+1).length > 4) {
        inputNeedRound = Number(inputNeedRound).toFixed(4)
    }
    return inputNeedRound 
}
// uses regex to replace unwanted chars (- & +) and checks if input is NaN or lnger than 13 numbers 
function checkInput(inputValue, inputField) {
    // removes unwanted characters from input
    inputField.value = inputValue.replace(charRegex, '')
    inputValue = inputValue.replace(charRegex, '')
    inputValue = inputValue.replace('/', '')
    // checks if input is NaN or longer than 13 chars and 
    if (isNaN(inputValue) || inputValue.length > 13) {
        if (inputValue.length > 13 ) {
            inputField.value = inputValue.slice(0, -1)
            inputValue = inputValue.slice(0, -1)
        }
        badLetter = inputValue.match(alphabetRegex)[0] // uses regex to find letter
        badLetter = inputValue.indexOf(badLetter) // gets index of letter
        // removes letter from input by splitting string before and after letter
        inputField.value = inputValue.slice(0, badLetter) + inputValue.slice(badLetter+1)
        inputValue = inputValue.slice(0, badLetter) + inputValue.slice(badLetter+1)
    }
    return inputValue
}

document.addEventListener('DOMContentLoaded', () => {
    
    const allInputs = document.querySelectorAll('input')
    allInputs.forEach(input => {
        input.value = '' // clears all inputs

        // creates variables for each input
        gInput = document.getElementById("grams")
        ozInput = document.getElementById("ounces")
        lbsInput = document.getElementById("pounds")

        input.addEventListener('input', () => { // checks for change in the input field
            // gets all values for each input
            g = gInput.value
            oz = ozInput.value
            lbs = lbsInput.value

            // runs checkInput fuction on each value 
            g = checkInput(g, gInput)
            oz = checkInput(oz, ozInput)
            lbs = checkInput(lbs, lbsInput)

            // checks which input changed and does math accordinly
            switch (input) {
                case gInput: // grams
                    oz = g / 28.35
                    lbs = Math.floor(oz / 16)
                    oz = oz % 16
                    break
                case ozInput: // ounces
                    g = ((lbs * 16) + Number(oz)) * 28.35
                    break
                case lbsInput: // pounds
                    g = (Number(lbs) + (oz / 16)) * 453.6
                    break
                default:
                    console.log(input, "error for some reason")
            }
            
        
            // updates input values
            gInput.value = roundInput(g)
            ozInput.value = roundInput(oz)
            lbsInput.value = roundInput(lbs)
        })
    });
})