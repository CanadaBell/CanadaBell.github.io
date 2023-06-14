// Declare the needed variables 
let x1 = 300
let y1 = 300
let x2 = 300
let y2 = 300

// canvas w and H
const canvasW = 600
const canvasH = 600

// Clears the inputs after each page reloads
window.onload = function() {
  document.getElementById('point1x').value = ''
  document.getElementById('point1y').value = ''
  document.getElementById('point2x').value = ''
  document.getElementById('point2y').value = ''
}

// Inputs
document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("point1x").addEventListener('input', () => {
    x1 = document.getElementById('point1x').value // x1 becomes what the value of the input is
    if (!x1) { x1 = 0 }// If x1 is an empty string x1 becomes 0

    testForstring: if (isNaN(x1)) {

      if (x1 === '-') { break testForstring }

      document.getElementById('point1x').value = ''
    } // If x1 isn't a number or a dash, remove it

    if (x1 > 25) { 
      document.getElementById('point1x').value = 25 
      x1 = 25
    }// If x1 is bigger than 25, make x1 25

    if (x1 < -25) { 
      document.getElementById('point1x').value = -25 
      x1 = -25
    }// If x1 is smaller than 25, make x1 -25

    x1 = (canvasW / 2) + (x1 * 12) // multiply x1 by 12 and add it to half the canvas width
  })

  document.getElementById("point1y").addEventListener('input', () => {
    y1 = document.getElementById('point1y').value // y1 becomes what the value of the input is
    if (!y1) { y1 = 0 }// If y1 is an empty string y1 becomes 0

    testForstring: if (isNaN(y1)) {

      if (y1 === '-') { break testForstring }
  
      document.getElementById('point1y').value = ''
    } // If x1 isn't a number or a dash, remove it

    if (y1 > 25) { 
      document.getElementById('point1y').value = 25 
      y1 = 25 
    }// If y1 is bigger than 25, make y1 25

    if (y1 < -25) { 
      document.getElementById('point1y').value = -25 
      y1 = -25
    }// If y1 is smaller than 25, make y1 -25

    y1 = (canvasH / 2) - (y1 * 12) // multiply y1 by 12 and subtract it to half the canvas height
  })

  document.getElementById("point2x").addEventListener('input', () => {
    x2 = document.getElementById('point2x').value // x2 becomes what the value of the input is
    if (!x2) { x2 = 0 }// If x2 is an empty string x2 becomes 0

    // If x2 isn't a number or a dash, remove it
    testForstring: if (isNaN(x2)) { 

      if (x2 === '-') { break testForstring }

      document.getElementById('point2x').value = ''

    } 

    // If x2 is bigger than 25, make x2 25
    if (x2 > 25) { 
      document.getElementById('point2x').value = 25 
      x2 = 25
    }

    // If x2 is smaller than 25, make x2 -25
    if (x2 < -25) { 
      document.getElementById('point2x').value = -25
      x2 = -25 
    }
    x2 = (canvasW / 2) + (x2 * 12) // multiply x2 by 12 and add it to half the canvas width
  })

  document.getElementById("point2y").addEventListener('input', () => {
    y2 = document.getElementById('point2y').value // y2 becomes what the value of the input is
    if (!y2) { y2 = 0 }// If y2 is an empty string y2 becomes 0

    // If x2 isn't a number or a dash, remove it
    testForstring: if (isNaN(y2)) {

      if (y2 === '-') { break testForstring }

      document.getElementById('point2y').value = ''

    }

    // If y2 is bigger than 25, make y2 25
    if (y2 > 25) {
      document.getElementById('point2y').value = 25 
      y2 = 25
    }

    // If y2 is smaller than 25, make y2 -25
    if (y2 < -25) { 
      document.getElementById('point2y').value = -25 
      y2 = -25
    }

    y2 = (canvasH / 2) - (y2 * 12) // multiply y2 by 12 and subtract it to half the canvas height
  })

});

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

  strokeWeight(7)

  stroke(0, 255, 0)
  point(x1, y1)

  stroke(255, 255, 0)
  point(x2, y2)
  console.log(x1, y1, x2, y2)
}