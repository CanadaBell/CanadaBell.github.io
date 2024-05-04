// needed vars
let numberToFactor = 0
let listOfFactors = ""
let timesOver = 0

const charRegex = /([ --])/g // regex for + and - (plus inbetween)
const alphabetRegex = /([A-~])/g // regex for all letters

// checks if text is overflowing (might be useless)
function isOverflowing(element) {
    return element.scrollWidth > element.offsetWidth;
}

// uses regex to replace unwanted chars (- & +) and checks if input is NaN or lnger than 13 numbers 
function checkInput(inputValue, inputField) {
    // removes unwanted characters from input
    inputField.value = inputValue.replace(charRegex, '')
    inputValue = inputValue.replace(charRegex, '')
    inputValue = inputValue.replace('/', '')
    inputValue = inputValue.replace('.', '')
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
        document.getElementById('factors').innerHTML = ''
        input.value = '' // clears input

        factorInput = document.getElementById('numberToFactor') // creates var for input

        input.addEventListener('input', () => {

            listOfFactors = "" // clears factor list 

            numberToFactor = factorInput.value // gets input value

            numberToFactor = checkInput(numberToFactor, factorInput) // checks input

            newNumber = Math.trunc(numberToFactor ** 0.5) // gets whole number of square root of input
            // finds the factors input by seeing which numbers have no decimal when input is divided by it
            for (i = 1; i <= newNumber; i++) {
                q = Math.floor(numberToFactor/i)
                r = numberToFactor % i
                if (r == 0) {
                    listOfFactors = listOfFactors + (`(${i}x${q})`)       
                }
            }

            // shows the list of factors or and error message if list of factors too long
            document.getElementById('factors').innerHTML = listOfFactors
            if (isOverflowing(document.getElementById('factors'))) {
                document.getElementById('factors').innerHTML = "Error, factors too long"
            }

        })
    });
})