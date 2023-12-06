let numberToFactor = 0
let listOfFactors = ""
let timesOver = 0

function isOverflowing(element) {
    return element.scrollWidth > element.offsetWidth;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numberToFactor').value = ''

    document.getElementById("numberToFactor").addEventListener('input', () => { 
        numberToFactor = document.getElementById('numberToFactor').value

        if (!numberToFactor) {
            numberToFactor = 0
            document.getElementById('factors').innerHTML = "-"
        }

        if (numberToFactor.length > 9){
            numberToFactor = numberToFactor.slice(0, 9)
            document.getElementById('numberToFactor').value = numberToFactor.slice(0, 9)
        }

        if (isNaN(numberToFactor)) {
            numberToFactor = numberToFactor.slice(0, -1)
            document.getElementById('numberToFactor').value = numberToFactor.slice(0, -1)
        }

        newNumber = Math.trunc(numberToFactor ** 0.5)
        for (i = 1; i <= newNumber; i++) {
            q = Math.floor(numberToFactor/i)
            r = numberToFactor % i
            if (r == 0) {
                listOfFactors = listOfFactors + (`(${i}x${q})`)       
            }
        }

        document.getElementById('factors').innerHTML = listOfFactors
        if (isOverflowing(document.getElementById('factors'))) {
            document.getElementById('factors').innerHTML = "Error, factors too long"
        }
    })
})