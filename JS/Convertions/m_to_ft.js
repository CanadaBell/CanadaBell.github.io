// needed vars
let km = 0
let m = 0

let mi = 0
let ft = 0
let inch = 0

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
        input.value = '' // clears inputs
        
        // creates input vars for each input 
        mInput = document.getElementById("meters")
        kmInput = document.getElementById("kilometers")        

        inchInput = document.getElementById("inches")
        ftInput = document.getElementById("feet")
        miInput = document.getElementById("miles")

        input.addEventListener('input', () => {

            // gets values for each input
            m = mInput.value
            km = kmInput.value

            inch = inchInput.value
            ft = ftInput.value
            mi = miInput.value

            // checks inputs to see if they can have math done to them
            m = checkInput(m, mInput)
            km = checkInput(km, kmInput)

            inch = checkInput(inch, inchInput)
            ft = checkInput(ft, ftInput)
            mi = checkInput(mi, miInput)

            // sees which input is being changed and does math based on that input
            switch (input) {
                case mInput: // meters
                    inch = ((km * 1000) + Number(m)) * 39.37

                    ft = Math.floor(inch / 12)
                    inch = inch % 12
                    mi = Math.floor(ft / 5280)
                    ft = ft % 5280
                    break
                case kmInput: // kilometers
                    inch = ((km * 1000) + Number(m)) * 39.37

                    ft = Math.floor(inch / 12)
                    inch = inch % 12
                    mi = Math.floor(ft / 5280)
                    ft = ft % 5280
                    break
                case inchInput: // inches
                    m = ((((mi * 5280) + Number(ft)) * 12) + Number(inch)) / 39.37

                    km = Math.floor(m / 1000)
                    m = m % 1000
                    break
                case ftInput: // feet
                    m = ((((mi * 5280) + Number(ft)) * 12) + Number(inch)) / 39.37

                    km = Math.floor(m / 1000)
                    m = m % 1000
                    break
                case miInput: // miles
                    m = ((((mi * 5280) + Number(ft)) * 12) + Number(inch)) / 39.37

                    km = Math.floor(m / 1000)
                    m = m % 1000
                    break
                default:
                    console.log(input, 'error')
            }

            // updates inputs 
            mInput.value = roundInput(m)
            kmInput.value = roundInput(km)

            inchInput.value = roundInput(inch)
            ftInput.value = roundInput(ft)
            miInput.value = roundInput(mi)

        })
    });
})