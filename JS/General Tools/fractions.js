wantedPage = 0

// -- Button Fuctions -- //
function changeDropdown() {
    if (buttonClicked == false) {
        buttonClicked = active()
    } else {
        buttonClicked = deactive()
    }
}

function active() {
    buttonClicked = true
    dropdownButton.style.borderRadius = '25px 25px 0 0'
    dropdownContent.classList.remove('hide')
    dropdownContent.classList.add('show')
    return buttonClicked
}

function deactive() {
    buttonClicked = false
    dropdownButton.style.borderRadius = '0'
    dropdownContent.classList.remove('show')
    dropdownContent.classList.add('hide')
    return buttonClicked
}

// -- Calculator Fuctions -- //

function doCalculations(pageIndex, pageFunction) {
    fractionInputs = allPages[pageIndex].querySelectorAll('input')
    fractionInputs.forEach(input => {
        input.value = ''
        allAnswerH3[pageIndex].innerHTML = 0
        
        input.addEventListener('input', () => {
            allAnswerH3[pageIndex].innerHTML = ''
            leftNumerator  = fractionInputs[0].value
            leftDenominator = fractionInputs[1].value
            rightNumerator  = fractionInputs[2].value
            rightDenominator = fractionInputs[3].value

            leftNumerator = checkInputValue(leftNumerator, '-', 0, fractionInputs)
            rightNumerator = checkInputValue(rightNumerator, '-', 2, fractionInputs)

            leftDenominator = checkInputValue(leftDenominator, '-', 1, fractionInputs)
            rightDenominator = checkInputValue(rightDenominator, '-', 3, fractionInputs)

            answers = window[pageFunction](leftNumerator, leftDenominator, rightNumerator, rightDenominator)
            if (answers[1] == 0){
                allAnswerH3[pageIndex].innerHTML = `undefined`
            } else {
                allAnswerH3[pageIndex].innerHTML = `${answers[0]} / ${answers[1]}`
            }
        })
        
    })

}

function checkInputValue(inputValue, allowedChar, inputIndex = 0, listOfInputs) {
    if (inputValue == '') {
        inputValue = 1
        listOfInputs[inputIndex].value = ''
    } 
    if (isNaN(inputValue)) {
        if (inputValue == allowedChar) {
            return (inputValue + 1) * 1
        }
        inputValue = 1
        listOfInputs[inputIndex].value = 1
    }
    return inputValue *= 1
}

function addition(topL, bottomL, topR, bottomR) {
    aTop = (topL * bottomR) + (topR * bottomL)
    aBottom = bottomL * bottomR
    factor = gcd(aTop, aBottom)
    aTop /= factor; aBottom /= factor

    if (aBottom < 0) {
        aTop *= -1
        aBottom *= -1
    }
    
    return [aTop, aBottom]
}
function subtraction(topL, bottomL, topR, bottomR) {
    aTop = (topL * bottomR) - (topR * bottomL)
    aBottom = bottomL * bottomR
    factor = gcd(aTop, aBottom)
    aTop /= factor; aBottom /= factor

    if (aBottom < 0) {
        aTop *= -1
        aBottom *= -1
    }

    return [aTop, aBottom]
}
function multiplication(topL, bottomL, topR, bottomR) {
    aTop = topL * topR
    aBottom = bottomL * bottomR
    factor = gcd(aTop, aBottom)
    aTop /= factor; aBottom /= factor

    if (aBottom < 0) {
        aTop *= -1
        aBottom *= -1
    }

    return [aTop, aBottom]
}
function division(topL, bottomL, topR, bottomR) {
    aTop = topL * bottomR
    aBottom = bottomL * topR
    factor = gcd(aTop, aBottom)
    aTop /= factor; aBottom /= factor

    if (aBottom < 0) {
        aTop *= -1
        aBottom *= -1
    }

    return [aTop, aBottom]
}

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // dropdown items
    buttonClicked = false
    dropdownButton = document.getElementById('dropdownButton')
    dropdownContent = document.getElementById('dropdownContent')
    allOptions = dropdownContent.querySelectorAll('p')
    allCalculators = document.querySelectorAll('div.fraction-wrapper')
    // Fractions

    // pages
    addingFractions = document.getElementById('addingFractions')
    subtractingFractions = document.getElementById('subtractingFractions')
    multiplyingFractions = document.getElementById('multiplyingFractions')
    dividingFractions = document.getElementById('dividingFractions')
    allAnswerH3 = document.getElementsByClassName('answer')

    allPages = [addingFractions, subtractingFractions, multiplyingFractions, dividingFractions]

    allOptions.forEach(option => {
        option.onclick = function() {
            wantedOption = option.dataset.option
            funtionToRun = wantedOption.toLowerCase()
            allCalculators.forEach(calculator => {
                if (calculator.dataset.page == wantedOption) {
                    calculator.style.display = 'flex'
                    wantedPage = calculator.dataset.index *= 1
                } else {
                    calculator.style.display = 'none'
                }
            })
            dropdownButton.innerHTML = wantedOption
            doCalculations(wantedPage, funtionToRun)
        }
    })
    doCalculations(0, 'addition')
})