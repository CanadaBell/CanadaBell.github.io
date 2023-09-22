// *** Variables ***

// ** Line **

// * Point 1 *
let x1 = 300
let y1 = 300

// * Point 2 *
let x2 = 300
let y2 = 300

// * Slope *
let slope = 0
let rise = 0
let run = 0 


// ** Canavs **
const canvasWidth = 600
const canvasHeight = 600


// Clears inputs after the inputs load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slope').value = '' // * Left Input *
    document.getElementById('px').value = '' // * Top Right Input *
    document.getElementById('py').value = '' // * Bottom Right Input*
})


// *** Reading Inputs ***

document.addEventListener('DOMContentLoaded', function() {

    const allInputs = document.querySelectorAll('input')
    allInputs.forEach(input => {
        input.addEventListener('input', () => { 
            
            // *** Slope ***
            slope = document.getElementById('slope').value // * value from left input *
            x1 = document.getElementById('px').value // * value from top right input *
            y1 = document.getElementById('py').value // * value from bottom right input *


            // ** Checks **

            if (!slope) { slope = '0' } // * If input is empty, value of slope = 0 *
            if (!x1) { x1 = 0} // If x1 is empty, x1 = 0
            if (!y1) { y1 = 0} // If y1 is empty, y1 = 0


            // * Checks if x1 is NaN *
            if (isNaN(x1)) {
                // * If x1 is NaN, but is a - exit *
                if (x1 === "-") { return }
                // * If exit has not occured make the input be nothing an x1 be 0 *
                document.getElementById("px").value = ''
                x1 = 0
            }

            // * Same for y1 as x1 *
            if (isNaN(y1)) {
                if (y1 === "-") { return }
                document.getElementById("py").value = ''
                y1 = 0
            }

            x1 *= 1; y1 *= 1

            // * If x1 is less than -25 or greater than 25, check if x1 is les than -25, if yes, the value becomes -25 other than that it becomes 25
            if (x1 < -25 || x1 > 25) {
                overOrUnder = (x1 <-25 ? -25 : 25)
                document.getElementById("px").value = overOrUnder  
                x1 = overOrUnder
            }

            // * Same for y1 as x1 *
            if (y1 < -25 || y1 > 25) { 
                overOrUnder = (y1 <-25 ? -25 : 25)
                document.getElementById("py").value = overOrUnder
                y1 = overOrUnder 
            }

            // ** Splitting Slope / Checks **

            // * If slope is 0 then slash is -1, otherwise slash is index of / (gives error that might fuck up code later if not here) *
            if (slope == 0) {
                slash = -1
            } else {
            slash = slope.indexOf("/") 
            }

            // * If / is not in the input, rise becomes the inputed value and run becomes 1, otherwise split the inpued value at the /
            if (slash == -1) {
                rise = slope
                run = '1'
            } else {
                rise = slope.slice(0, slash)
                run = slope.slice(slash + 1)
            }

            if (isNaN(rise) || isNaN(run)) {
                document.getElementById("error").innerHTML = "Rise or run is not a valid value"
                if (isNaN(rise)) {
                    rise = '1'
                } else {
                    run = '1'
                }
            } else {
                document.getElementById("error").innerHTML = '' 
            }

            if (!rise || !run) {
                if (!rise) {
                    rise = '1'
                } else {
                    run = '1'
                }
            }


            rise = rise * 1; run = run * 1

            if (run < 0) {
                rise *= -1; run *= -1
            }


            // *** Place I Will kms ***


            if (rise == 0 && run == 0) {
                document.getElementById("error").innerHTML = "undiefined"
                x2 = x1
                y2 = y1

            } else if (rise != 0 && run == 0) {
                document.getElementById("error").innerHTML = "undiefined"
                x2 = x1
                y1 = 25
                y2 = -25

            } else if (rise == 0 && run != 0) {
                document.getElementById("error").innerHTML = ''
                y2 = y1
                x1 = 25
                x2 = -25

            } else {
                yInt = y1 - ((rise/run) * x1)
                y1 = yInt
                y2 = yInt
                x1 = 0
                x2 = 0

                while (true) {
                    if (y1 > 25) { break }
                    if (y1 < -25) { break }
                    if (y2 > 25) {break }
                    if (y2 < -25) {break}
                    y1 = y1 + rise
                    y2 = y2 - rise
                    x1 = x1 + run
                    x2 = x2 - run
                }
            }

            x1 = (canvasWidth / 2) + (x1 * 12)
            y1 = (canvasHeight / 2) - (y1 * 12)
            x2 = (canvasWidth / 2) + (x2 * 12)
            y2 = (canvasHeight / 2) - (y2 * 12)

        })
    })
})

function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-holder');
}
  
function draw() {
    // Creating The Lines on the graph
    background(31)

    stroke(255, 0, 255)
    strokeWeight(3)

    for (let x = 12 ; x < canvasWidth; x+=12) {
        line (x, (canvasWidth / 2) - 3, x, (canvasWidth / 2) + 3) // Loop that creates dashes for horizontal line
    }

    for (let x = 12 ; x < canvasHeight; x+=12) {
        line((canvasHeight / 2) - 3, x, (canvasHeight / 2) + 3, x) // Loop that creates dashes for vertical line
    }

    stroke(176, 0, 230)
    strokeWeight(4)

    line(canvasHeight / 2, 0, canvasHeight / 2, canvasHeight) // Vertical Line 
    line(0, canvasWidth / 2, canvasWidth, canvasWidth / 2) // Horizontal Line


    // Drawing the line from 2 points
    stroke(0, 0, 255)
    line(x1, y1, x2, y2)
    
}