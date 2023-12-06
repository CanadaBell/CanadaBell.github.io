const canvasWidth = 600
const canvasHeight = 600

const halfOfCanvasW = canvasWidth / 2
const halfOfCanvasH = canvasHeight / 2
// gets what half of the canvas width / height 

let vtxX = halfOfCanvasW, vtxY = vtxX
let ptX = halfOfCanvasH, ptY = ptX

let parabolaDirection = 0

let x = 0
let y = 0

let leftRoot = 0
let rightRoot = 0

let xyCoord = [0, 0]
let listOfXYCoords = []




document.addEventListener('DOMContentLoaded', function() { 
    // Clears input each time page loads
    document.getElementById('vertexX').value = ''
    document.getElementById('vertexY').value = ''
    document.getElementById('pointX').value = ''
    document.getElementById('pointY').value = ''
})


document.addEventListener('DOMContentLoaded', () => { // Code that reads inputs
  
    const allInputs = document.querySelectorAll('input'); // Variable that creates a list of all inputs  
    allInputs.forEach(input => { // Itterates between all inputs 
      input.addEventListener('input', () => { // Checks for update
        listOfXYCoords = []
        vtxX = document.getElementById('vertexX').value
        vtxY = document.getElementById('vertexY').value
        // Value of left inputs 
  
        ptX = document.getElementById('pointX').value
        ptY = document.getElementById('pointY').value
        // Value of right inputs
  
        if (!vtxX) { vtxX = 0 } 
        if (!vtxY) { vtxY = 0 }
        if (!ptX) { ptY = 0 }
        if (!ptY) { ptY = 0 } 
        // Any empty inputs gets assigned the value 0
  
  
    
        // Checks if inputed value is an NaN (Not a number), if yes BUT it is a - then programs skips the rest of the code, otherwise the input becomes 0 along with the variable to go with the input (same for all)
        if (isNaN(vtxX)) {
          if (vtxX === "-") { return }
          // if (vtxX.includes('/')) {

          //   slash = vtxX.indexOf('/')
          //   left = vtxX.slice(0, slash)
          //   right = vtxX.slice(slash + 1)

          //   console.log(left, right)

          //   if (left == 0 || isNaN(left) || right == '') { left = '1' }
          //   if (left == '-') { left = '-1'}

          //   if (right == 0 || isNaN(right) || right == '') { right = '1' }
          //   if (right == '-') { right = '-1'}
          //   if (right.includes('/')) { right.replaceAll('/', '') }

          //   vtxX = left/right
          // } 
          else {
            document.getElementById("vertexX").value = ''
            vtxX = 0
          }
        }

        if (isNaN(vtxY)) {
          if (vtxY === "-") { return }
          document.getElementById("vertexY").value = ''
          vtxY = 0
        }
  
        if (isNaN(ptX)) {
          if (ptX === "-") { return }
          document.getElementById("pointX").value = ''
          ptX = 0
        }

        if (isNaN(ptY)) {
          if (ptY === "-") { return }
          document.getElementById("pointY").value = ''
          ptY = 0
        }
  
        vtxX *= 1; vtxY *= 1; ptX *= 1; ptY *= 1
        // Turns each string to int 
  
        // Checks if inputed value is less than -25 or greater than 25, if yes, it check whether or not the number is negative or positive and changes the number (for all inputs)
        if (vtxX < -25 || vtxX > 25) {
          overOrUnder =  (vtxX <-25 ? -25 : 25)
          document.getElementById("vertexX").value = overOrUnder
          vtxX = overOrUnder
        }
        if (vtxY < -25 || vtxY > 25) { 
          overOrUnder = (vtxY <-25 ? -25 : 25)
          document.getElementById("vertexY").value = overOrUnder
          vtxY = overOrUnder
        }
        if (ptX < -25 || ptX > 25) { 
          overOrUnder = (ptX <-25 ? -25 : 25)
          document.getElementById("pointX").value = overOrUnder
          ptX = overOrUnder
        }
        if (ptY < -25 || ptY > 25) {
          overOrUnder = (ptY <-25 ? -25 : 25)
          document.getElementById("pointY").value = overOrUnder
          ptY = overOrUnder
        }

        parabolaDirection = (ptY - vtxY) / ((ptX - vtxX) ** 2)
        if (isFinite(parabolaDirection) == false) {
          parabolaDirection = 'undifined'
        }

        exuationText = `y = ${parabolaDirection}(x - ${vtxX}) + ${vtxY}`
        exuationNum = parabolaDirection * (ptX - vtxX) ** 2 + vtxY // this should equal ptY

        for (xValue = -25; xValue <= 25; xValue++) {

          yValue = parabolaDirection * (xValue - vtxX) ** 2 + vtxY
          if (yValue < -25 || yValue > 25) {
            continue
          }
          xyCoord = [xValue, yValue]

          listOfXYCoords.push(xyCoord)
        }

        // console.log(listOfXYCoords)

        for (let coord = 0; coord < listOfXYCoords.length; coord ++) {
          xValue = listOfXYCoords[coord][0]
          yValue = listOfXYCoords[coord][1]

          xValue = (canvasWidth / 2) + (xValue * 12)
          yValue = (canvasHeight / 2) - (yValue * 12)

          listOfXYCoords[coord] = [xValue, yValue]
        }

        // console.log(listOfXYCoords)
        document.getElementById('formula').innerHTML = exuationText
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

  for (let coord = 1; coord < listOfXYCoords.length; coord ++) {
    x1 = listOfXYCoords[coord - 1][0]
    y1 = listOfXYCoords[coord - 1][1]

    x2 = listOfXYCoords[coord][0]
    y2 = listOfXYCoords[coord][1]

    line(x1, y1, x2, y2)
  } 
}