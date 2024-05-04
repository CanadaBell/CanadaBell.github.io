// Variables

var canvasWidth = 600 
var canvasHeight = 600
// Base canvas dimentions

var canvasChangeAmount = (600 /(Math.round(screen.width / 50) * 55)).toFixed(2)
// divides 600 by the width of the user's screen -> rounds number to nearest hundreth (0.0?)

if (screen.width < 576) { // Checks if user is on phone
  canvasWidth = (Math.floor(canvasWidth / canvasChangeAmount)) - 70
  canvasHeight = (Math.floor(canvasHeight / canvasChangeAmount)) - 70
  // canvas dimentions change depending on the size of the phone screen
  if (canvasWidth >= screen.width) {
    biggerThanAmount = Math.floor(canvasWidth / screen.width)
    canvasWidth = (canvasWidth - (60 * biggerThanAmount))
    canvasHeight = (canvasHeight - (60 * biggerThanAmount))
  }
}

const halfOfCanvasW = canvasWidth / 2
const halfOfCanvasH = canvasHeight / 2
// gets what half of the canvas width / height 


let x1 = halfOfCanvasW, x2 = halfOfCanvasW
let y1 = halfOfCanvasH, y2 = halfOfCanvasH
// sets x1 and x2 to be half of the canvas width | sets y1 and y2 to be half of the canvas width


document.addEventListener('DOMContentLoaded', function() { // Clears input each time page loads
  document.getElementById('point1x').value = ''
  document.getElementById('point1y').value = ''
  document.getElementById('point2x').value = ''
  document.getElementById('point2y').value = ''
})

document.addEventListener('DOMContentLoaded', () => { // Code that reads inputs
  
  const allInputs = document.querySelectorAll('input'); // Variable that creates a list of all inputs  
  allInputs.forEach(input => { // Itterates between all inputs 
    input.addEventListener('input', () => { // Checks for update
      x1 = document.getElementById('point1x').value 
      y1 = document.getElementById('point1y').value 
      // Value of left inputs 

      x2 = document.getElementById('point2x').value
      y2 = document.getElementById('point2y').value 
      // Value of right inputs

      if (!x1) { x1 = 0 } 
      if (!y1) { y1 = 0 }
      if (!x2) { x2 = 0 }
      if (!y2) { y2 = 0 } 
      // Any empty inputs gets assigned the value 0


  
      // Checks if inputed value is an NaN (Not a number), if yes BUT it is a - then programs skips the rest of the code, otherwise the input becomes 0 along with the variable to go with the input (same for all)
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

      x1 *= 1; y1 *= 1; y1 *= 1; y2 *= 1 
      // Turns each string to int 

      // Checks if inputed value is less than -25 or greater than 25, if yes, it check whether or not the number is negative or positive and changes the number (for all inputs)
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

      // takes small number (positive or negative) and turns it into a positive number that p5 can use as points on a plane where the orgin is top left
      // anything less than half of the dimentions is negative, while anything more is positive
      x1 = (halfOfCanvasW) + (x1 * (halfOfCanvasW / 25))
      y1 = (halfOfCanvasH) - (y1 * (halfOfCanvasH / 25))

      x2 = (halfOfCanvasW) + (x2 * (halfOfCanvasW / 25))
      y2 = (halfOfCanvasH) - (y2 * (halfOfCanvasH / 25)) 

    });

  });

});

// Actual code for drawing some lines
function setup() { 
  var canvas = createCanvas(canvasWidth, canvasHeight); // creates the canvas itself
  canvas.parent('sketch-holder'); // makes it be able to have css
}

function draw() {

  background(31) // sets background to be rgb(31, 31, 31)

  stroke(255, 0, 255) // sets line to be rgb(255, 0, 255)
  strokeWeight(3) // line thickness of 3

  for (let x = halfOfCanvasW / 25; x < canvasWidth; x+= halfOfCanvasW / 25) {
    line (x, (halfOfCanvasW) - 3, x, (halfOfCanvasW) + 3) // Loop that creates dashes for horizontal line
  }

  for (let x = halfOfCanvasH / 25; x < canvasHeight; x+= halfOfCanvasH / 25) {
    line((halfOfCanvasH) - 3, x, (halfOfCanvasH) + 3, x) // Loop that creates dashes for vertical line
  }

  stroke(176, 0, 230)
  strokeWeight(4)

  line(halfOfCanvasH, 0, halfOfCanvasH, canvasHeight) // Vertical Line 
  line(0, halfOfCanvasW, canvasWidth, halfOfCanvasW) // Horizontal Line

  // Drawing the line from 2 points
  stroke(0, 0, 255)
  line(x1, y1, x2, y2)

  if (screen.width < 576) {
    strokeWeight(6)
  } else {
    strokeWeight(7)
  }
  

  stroke(0, 255, 0)
  point(x1, y1)

  stroke(255, 255, 0)
  point(x2, y2)
}

// function windowResized() {
//   canvasHeight = 600
//   canvasWidth = 600
//   if (screen.width < 567) {
//     canvasWidth = (Math.floor(canvasWidth / canvasChangeAmount)) - 70
//     canvasHeight = (Math.floor(canvasHeight / canvasChangeAmount)) - 70
//     // canvas dimentions change depending on the size of the phone screen
//     if (canvasWidth >= screen.width) {
//       biggerThanAmount = Math.floor(canvasWidth / screen.width)
//       canvasWidth = (canvasWidth - (60 * biggerThanAmount))
//       canvasHeight = (canvasHeight - (60 * biggerThanAmount))
//     }
//     resizeCanvas(canvasWidth, canvasHeight)
//   } else {
//     resizeCanvas(600, 600)
//   }
// }