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

function checkInput(inputValue, inputField) {
  if (inputValue == '' ) { inputValue = '0' }
  if (isNaN(inputValue)) {
    if (inputValue === "-") { 
      inputValue = '-1'
    } else if (inputValue.includes('/')) {

      slash = inputValue.indexOf('/')
      left = inputValue.slice(0, slash)
      right = inputValue.slice(slash + 1)

      
      if (left === '') { left = '1' }
      if (left == '-') { left = '-1'}
      if (isNaN(left)) {
        left = left.slice(0, -1)
        inputText = left + "/" + right
      }


      if (right === '') { right = '1' }
      if (right == '-') { right = '-1'}
      if (isNaN(right)) {
        right = right.slice(0, -1)
        inputField.value = left + "/" + right
      }

      // console.log(left, right)

      inputValue = left/right
      

    } else {
      inputField.value = inputValue.slice(0, -1)
      inputValue = inputValue.slice(0, -1)
    }
  }
  console.log(inputValue)
  return Number(inputValue)
}




document.addEventListener('DOMContentLoaded', function() { 
    // Clears input each time page loads
    document.getElementById('vertexX').value = ''
    document.getElementById('vertexY').value = ''
    document.getElementById('pointX').value = ''
    document.getElementById('pointY').value = ''
})


document.addEventListener('DOMContentLoaded', () => { // Code that reads inputs
  
    const allInputs = document.querySelectorAll('input') // Variable that creates a list of all inputs  
    allInputs.forEach(input => { // Itterates between all inputs 
      input.addEventListener('input', () => { // Checks for update
        listOfXYCoords = []
        vtxX = document.getElementById('vertexX').value
        vtxY = document.getElementById('vertexY').value
        // Value of left inputs 
  
        ptX = document.getElementById('pointX').value
        ptY = document.getElementById('pointY').value
        // Value of right inputs

        vtxX = checkInput(vtxX,document.getElementById('vertexX'))
        console.log(vtxX)

        vtxY = checkInput(vtxY, document.getElementById('vertexY'))
  
        ptX = checkInput(ptX, document.getElementById('pointX'))

        ptY = checkInput(ptY, document.getElementById('pointY'))
  
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

        exuationText = `y = ${parabolaDirection}(x - ${vtxX})^2 + ${vtxY}`
        exuationNum = parabolaDirection * (ptX - vtxX) ** 2 + vtxY // this should equal ptY

        for (xValue = -25; xValue <= 25; xValue += (xValue / (xValue * 10))) {

          yValue = parabolaDirection * (xValue - vtxX) ** 2 + vtxY
          if (yValue < -30 || yValue > 30) {
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