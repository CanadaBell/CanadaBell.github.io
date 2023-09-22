// *** Variables ***

// ** Line **

// * Point 1 *
let x1 = 300
let y1 = 300

// * Point 2 *
let x2 = 300
let y2 = 300

// ** Canvas **
const canvasWidth = 600
const canvasHeight = 600



// Clears input each time page loads
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('point1x').value = ''
  document.getElementById('point1y').value = ''
  document.getElementById('point2x').value = ''
  document.getElementById('point2y').value = ''
})

// *** Reading Inputs ***
document.addEventListener('DOMContentLoaded', () => {

  const allInputs = document.querySelectorAll('input'); // * Variable that creates a list of all inputs  
  allInputs.forEach(input => { // * Itterates between all inputs *
    input.addEventListener('input', () => { // * Checks for update
      x1 = document.getElementById('point1x').value; y1 = document.getElementById('point1y').value // * Value of left inputs *
      x2 = document.getElementById('point2x').value; y2 = document.getElementById('point2y').value // Value of right inputs

      if (!x1) { x1 = 0 }; if (!y1) { y1 = 0 }; if (!x2) { x2 = 0 }; if (!y2) { y2 = 0 } // * Any empty inputs gets assigned the value 0


      // FOR ALL INPUTS //
      // * Checks if inputed value is an NaN (Not a number), if yes BUT it is a - then programs skips the rest of the code, otherwise the input becomes 0 along with the variable to go with the input
      if (isNaN(x1)) {
        if (x1 === "-") { return }
        document.getElementById("point1x").value = ''
        x1 = 0
      }
      if (isNaN(y1)) {
        if (y1 === "-") { return }
        document.getElementById("point1y").value = ''
        y1 = 0
      }

      if (isNaN(x2)) {
        if (x2 === "-") { return }
        document.getElementById("point2x").value = ''
        x2 = 0
      }
      if (isNaN(y2)) {
        if (y2 === "-") { return }
        document.getElementById("point2y").value = ''
        y2 = 0
      }

      x1 *= 1; y1 *= 1; y1 *= 1; y2 *= 1 // * Turns each string to int *


      // FOR ALL INPUTS //
      // * Checks if inputed value is less than -25 or greater than 25, if yes, it check whether or not the number is negative or positive and changes the number
      if (x1 < -25 || x1 > 25) {
        overOrUnder =  (x1 <-25 ? -25 : 25)
        document.getElementById("point1x").value = overOrUnder
        x1 = overOrUnder
      }
      if (y1 < -25 || y1 > 25) { 
        overOrUnder = (y1 <-25 ? -25 : 25)
        document.getElementById("point1y").value = overOrUnder
        y1 = overOrUnder
      }
      if (x2 < -25 || x2 > 25) { 
        overOrUnder = (x2 <-25 ? -25 : 25)
        document.getElementById("point2x").value = overOrUnder
        x2 = overOrUnder
      }
      if (y2 < -25 || y2 > 25) {
        overOrUnder = (y2 <-25 ? -25 : 25)
        document.getElementById("point2y").value = overOrUnder
        y2 = overOrUnder
      }

      // * After all the checks it turns the inputed value into a useable number, by multiplying all numbers by 12 and adding half the canvas width to the x values and subtracting half the height from the y values *
      x1 = (canvasWidth / 2) + (x1 * 12); y1 = (canvasHeight / 2) - (y1 * 12) 
      x2 = (canvasWidth / 2) + (x2 * 12); y2 = (canvasHeight / 2) - (y2 * 12) 

    });

  });

});
// *** Drawing ***

function setup() { 
  var canvas = createCanvas(canvasWidth, canvasHeight); // * ceating a variable with the data for a canvas*
  canvas.parent('sketch-holder'); // * Set the parent to the canvas be the div *
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

  strokeWeight(7)

  stroke(0, 255, 0)
  point(x1, y1)

  stroke(255, 255, 0)
  point(x2, y2)
}