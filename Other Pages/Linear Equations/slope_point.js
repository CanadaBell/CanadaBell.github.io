let slope = 0
let rise = 0
let run = 0
let x1 = 300
let y1 = 300
let x2 = 300
let y2 = 300

const canvasW = 600
const canvasH = 600

// Clears the inputs after each page reloads
window.onload = function() {
    document.getElementById('slope').value = ''
    document.getElementById('px').value = ''
    document.getElementById('py').value = ''
}



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("slope").addEventListener('input', () => {
        slope = document.getElementById('slope').value // slope becomes inputed value
        x1 = document.getElementById('px').value // x1 = input 1
        y1 = document.getElementById('py').value // x2 = input 2

        if (!x1) { x1 = 0} // If x1 is empty, x1 = 0

        testForstring: if (isNaN(x1)) {
            if (x1 === "-") {
                break testForstring
            }

            document.getElementById("px").value = ''
        }

        if (x1 > 25) {
            document.getElementById('px').value = 25
            x1 = 25
        }

        if (x1 < -25) {
            document.getElementById('py').value = -25
            x1 = -25
        }

        if (!y1) { y1 = 0}
        testForstring: if (isNaN(y1)) {
            if (y1 === "-") {
                break testForstring
            }
            document.getElementById("px").value = ''
        }
        if (y1 > 25) {
            document.getElementById('px').value = 25
            y1 = 25
        }

        if (y1 < -25) {
            document.getElementById('py').value = -25
            y1 = -25
        }
        
        x1 = x1 * 1
        y1 = y1 * 1 

        if (slope == false) { 
            slope = 0 
        }
 
        testForstring: if (isNaN(slope) == true) {
            if (slope.startsWith('-') || slope.includes('/')) { 
                break testForstring
            }
            document.getElementById('slope').value = ''
        }

        const regex = /[+\=_\*\&\^%\$\#@!~]/g
        slope = slope.replaceAll(regex, '')

        if (slope == '') {
            slash = -1
        } else {
            slash = slope.indexOf("/")
        }
        

        if (slash == -1) {
            rise = slope            
            if (isNaN(rise)) {
                rise = '1'
            }
            run = 1
        } else {
            rise = slope.slice(0, slash)
            run = slope.slice(slash + 1)

            if (rise == '') { rise = '1' }
            if (rise == '-') { rise = '-1'}
            if (run == '') { run = '1' }
            if (run == '-') { run = '-1'}
            
            if (typeof run === 'string' || run instanceof Array) {
                if (run.indexOf('/') !== -1) {
                    document.getElementById("error").innerHTML = "*Too Many Numbers and slashes*"
                } else {
                    document.getElementById("error").innerHTML = ''
                }
            }

            
        }

        rise = rise * 1
        run = run * 1

        if (run < 0) {
            run *= -1
            rise *= -1
        }

        x_int = (-1 * (y1 / (rise/run))) + x1
        if (isFinite(x_int) == false) {
            x_int = x1
        }
        x1 = x_int
        x2 = x_int
 
        if (rise == 0 && run == 0) {
            x2 = x1
            y2 = y1
        } else {
            if (rise == 0) {
                while (true) {
                    y2 = y1
                    if (x1 < -25) {
                        break
                    }
                    if (x1 > 25) {
                        break
                    }
                    x1 = x1 + run
                    x2 = x2 - run

                    while (x1 > 25 || x1 < -25) {
                        x1 = x1 - run
                    }
                    while (x2 > 25 || x2 < -25) {
                        x2 = x2 + run
                    }
                } 
            } else {
                y1 = 0
                y2 = 0
                while (true) {
                    if (y1 < -25) {
                        break
                    }
                    if (y1 > 25) {
                        break
                    }
                    x1 = x1 + run
                    y1 = y1 + rise
                }
        
                while (true) {
                    if (y2 < -25) {
                        break
                    }
                    if (y2 > 25) {
                        break
                    }
                    x2 = x2 - run
                    y2 = y2 - rise
                }
            }
        }
        


        x1 = (canvasW / 2) + (x1 * 12)
        y1 = (canvasH / 2) - (y1 * 12)
        x2 = (canvasW / 2) + (x2 * 12)
        y2 = (canvasH / 2) - (y2 * 12)

    })
})


function setup() {
    var canvas = createCanvas(canvasW, canvasH);
    canvas.parent('sketch-holder');
}
  
function draw() {
    // Creating The Lines on the graph
    background(31)

    stroke(255, 0, 255)
    strokeWeight(3)

    for (let x = 12 ; x < canvasW; x+=12) {
        line (x, (canvasW / 2) - 3, x, (canvasW / 2) + 3) // Loop that creates dashes for horizontal line
    }

    for (let x = 12 ; x < canvasH; x+=12) {
        line((canvasH / 2) - 3, x, (canvasH / 2) + 3, x) // Loop that creates dashes for vertical line
    }

    stroke(176, 0, 230)
    strokeWeight(4)

    line(canvasH / 2, 0, canvasH / 2, canvasH) // Vertical Line 
    line(0, canvasW / 2, canvasW, canvasW / 2) // Horizontal Line


    // Drawing the line from 2 points
    stroke(0, 0, 255)
    line(x1, y1, x2, y2)
    
}
