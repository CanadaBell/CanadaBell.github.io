let base = 0
let root = 0
let square = 0
let cube = 0
let biggestPerfectSquare = 1 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('base-number').value = ''

    document.getElementById("base-number").addEventListener('input', () => { 
        base = document.getElementById("base-number").value

        if (!base) {base = 0} // checks if input is empty
        if (isNaN(base)) { // checks if input is an actual number
            base = 0
            document.getElementById('base-number').value = '-'
        }
        root = Math.sqrt(base) // roots the base

        if (Number.isInteger(root) == false) { // If root isn't a whole number 

            newNumber = Math.trunc(base ** 0.5)

            for (i = 1; i <= newNumber; i++) { // Finds the biggest perfect square 
                q = Math.floor(base/i)
                r = base % i
                if (r == 0) {
                    if (Number.isInteger(Math.sqrt(i))) {
                        biggestPerfectSquare = i
                    } else if (Number.isInteger(Math.sqrt(q))) {
                        biggestPerfectSquare = q
                    } else {
                        continue
                    }
                }
                console.log(biggestPerfectSquare)
            }

            numInRoot = base / biggestPerfectSquare // Gets the number thats in the root symbol
            root = `${Math.sqrt(biggestPerfectSquare)}√${numInRoot}` // Creates the radical
            root = root.replace('1','') // removes a leading 1
        }
        square = base ** 2
        cube = base ** 3


        document.getElementsByTagName("h3")[0].innerHTML= root
        document.getElementsByTagName("h3")[1].innerHTML= square
        document.getElementsByTagName("h3")[2].innerHTML= cube
    })
  })
  