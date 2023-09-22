let numberToFactor = 0


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numberToFactor').value = ''

    document.getElementById("numberToFactor").addEventListener('input', () => { 
        numberToFactor = document.getElementById('numberToFactor').value
        l1 = []
        l2 = []

        if (!numberToFactor) {
            numberToFactor = 0
            document.getElementById('factors').innerHTML = "#"
        }
        if (isNaN(numberToFactor)) {
            numberToFactor = 0
            document.getElementById('numberToFactor').value = ''
        }

        newNumber = Math.trunc(numberToFactor ** 0.5)
        for (i = 1; i <= newNumber; i++) {
            q = Math.floor(numberToFactor/i)
            r = numberToFactor % i
            if (r == 0) {
                l1.push(i)
                l2.push(q)
            }
        }
        if (l1[-1] == l2[-1]) {
            l1.pop()
            l2.pop()
        }
        l2.reverse()
    
        listOfFactors = l1 + "," + l2


        console.log(l1 , l2)




        document.getElementById('factors').innerHTML = listOfFactors
    })
})