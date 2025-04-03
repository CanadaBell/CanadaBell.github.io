let lineY = ''
let lineX = ''
let lineB = ''
let solutions = ''


document.addEventListener('DOMContentLoaded', function() { 
    // Clears input each time page loads
    document.getElementById('line').value = ''
    document.getElementById('parabola').value = ''
})

// v from stack overflow v
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
            costs[j] = j;
        else {
            if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
            }
        }
        }
        if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  }
// ^ from stack overflow ^

document.addEventListener('DOMContentLoaded', () => { // Code that reads inputs
  
    const allInputs = document.querySelectorAll('input'); // Variable that creates a list of all inputs  
    allInputs.forEach(input => { // Itterates between all inputs 
      input.addEventListener('input', () => { // Checks for update
        let lineFormula = document.getElementById('line').value
        let parabolaFormula = document.getElementById('parabola').value
        const solutionField = document.getElementById('solution')
        solutions = 'No Solutions'
        // Value of inputs
        if (!lineFormula) { lineFormula = 'y = x' } 
        if (!parabolaFormula) { parabolaFormula = 'y = x^2' }
        // Any empty inputs gets assigned the value 0

        // Finds the % that the inpputed line formula matches the base formula (uses code from stack overflow)
        matchSlopeIntercept = similarity(lineFormula, 'y = mx + b')
        matchLineGeneral = similarity(lineFormula, 'ax + by + c = 0')
        matchLineStandard  = similarity(lineFormula, 'ax + by = c')

        mostInCommon = Math.max(matchSlopeIntercept, matchLineGeneral, matchLineStandard) // Finds the biggest number

        // Uses a switch case to see which number the mostInCommon actually is 
        switch (mostInCommon > 0) {

          case mostInCommon == matchSlopeIntercept: // y = mx + b

            lineFormula = lineFormula.replaceAll(' ', '') // Gets rid of spaces
            equalSignLocation = lineFormula.indexOf('=') // Finds =
            plusSignLocation = lineFormula.indexOf('+') // Finds + 
            if (plusSignLocation == '') { plusSignLocation = lineFormula.indexOf('-') } // Finds - if no +

            lineY = lineFormula.slice(0, equalSignLocation) // gets everything before the = 
             // finds everything between the = and +/-
            lineX = lineFormula.slice(equalSignLocation + 1, plusSignLocation)
            lineB = lineFormula.slice(plusSignLocation) // finds everything after the +/- (includes sign)

            //console.log('y = mx + b')
            break
          case mostInCommon == matchLineGeneral: // ax + by + c = 0

            lineFormula = lineFormula.replaceAll(' ', '')
            plusSignLocation1 = lineFormula.indexOf('+') // Finds first +
            if (plusSignLocation1 == '') { plusSignLocation1 = lineFormula.indexOf('-') }
            plusSignLocation2 = lineFormula.lastIndexOf('+') // Finds second + 
            if (plusSignLocation1 == '') { plusSignLocation2 = lineFormula.lastIndexOf('-') }
            equalSignLocation = lineFormula.indexOf('=')

            lineX = lineFormula.slice(0, plusSignLocation1)
            lineY = lineFormula.slice(plusSignLocation1, plusSignLocation2)
            lineB = lineFormula.slice(plusSignLocation2, equalSignLocation)

            //console.log('ax + by + c = 0')
            break
          case mostInCommon == matchLineStandard: // ax + by = c

            lineFormula = lineFormula.replaceAll(' ', '')
            equalSignLocation = lineFormula.indexOf('=')
            plusSignLocation = lineFormula.indexOf('+')
            if (plusSignLocation == '') { plusSignLocation = lineFormula.indexOf('-') }

            lineX = lineFormula.slice(0, plusSignLocation)
            lineY = lineFormula.slice(plusSignLocation + 1, equalSignLocation)
            lineB = lineFormula.slice(equalSignLocation + 1)

            //console.log('ax + by = c')
            break
          default: // If no matching equation, run this
            solutions = 'No matching line equation'
            solutionField.innerHTML = solutions
        }
        
        //console.log(lineY, lineX, lineB)

        matchVertexForm = similarity(parabolaFormula, 'y = a(x - p)^2 + q')
        matchParabolaStandard  = similarity(parabolaFormula, 'y = ax^2 + bx + c')

        mostInCommon = Math.max(matchVertexForm, matchParabolaStandard) // Finds the biggest number

        // Uses a switch case to see which number the mostInCommon actually is 
        switch (mostInCommon > 0) {

          case mostInCommon == matchVertexForm: // y = a(x - p)^2 + q

            parabolaStandardEquation = ''

            parabolaFormula = parabolaFormula.replaceAll(' ', '') // Gets rid of spaces
            equalSignLocation = parabolaFormula.indexOf('=') // Finds =
            openBracketLocation = parabolaFormula.indexOf('(')
            closeBracketLocation = parabolaFormula.indexOf(')')
            plusSignLocation = parabolaFormula.lastIndexOf('+') // Finds + 
            if (plusSignLocation == '') { plusSignLocation = parabolaFormula.lastIndexOf('-') } // Finds - if no +

            parabolaY = parabolaFormula.slice(0, equalSignLocation)
            parabolaA = parabolaFormula.slice(equalSignLocation + 1, openBracketLocation)
            parabolaX = parabolaFormula.slice(openBracketLocation + 1, closeBracketLocation)
            parabolaQ = parabolaFormula.slice(closeBracketLocation + 1).replace('^2', '')
            if (isNaN(parabolaQ)) {parabolaQ = 1}

            p = (parabolaX.slice(parabolaX.indexOf('x') + 1)) * 1
            xNum = parseFloat(parabolaX)
            if (isNaN(xNum)) {
              xNum = 1
            }

            xNum = xNum * xNum
            bNum = (p * xNum) + (p * xNum)
            pNum = p * p

            parabolaA = parabolaA * 1

            xNum = xNum * parabolaA
            bNum = bNum * parabolaA
            pNum = (pNum * parabolaA) + (parabolaQ * 1)

            yNum = parseFloat(parabolaY)
            if (isNaN(yNum) == false) {
              xNum = xNum / yNum
              bNum = bNum / yNum
              pNum = pNum / yNum
            }

            parabolaStandardEquation = `y = ${xNum}x^2 + ${bNum}x + ${pNum}`

            parabolaFormula = parabolaStandardEquation.replaceAll(' ', '') // Gets rid of spaces
            equalSignLocation = parabolaFormula.indexOf('=')
            plusSignLocation1 = parabolaFormula.indexOf('+') // Finds first +
            if (plusSignLocation1 == '') { plusSignLocation1 = parabolaFormula.indexOf('-') }
            plusSignLocation2 = parabolaFormula.lastIndexOf('+') // Finds second + 
            if (plusSignLocation1 == '') { plusSignLocation2 = parabolaFormula.lastIndexOf('-') }

            parabolaA = parabolaFormula.slice(equalSignLocation + 1, plusSignLocation1)
            parabolaB = parabolaFormula.slice(plusSignLocation1 + 1, plusSignLocation2)
            parabolaC = parabolaFormula.slice(plusSignLocation2 + 1)


            //console.log('y = a(x - p)^2 + q')
            break
          case mostInCommon == matchParabolaStandard: // y = ax^2 = bx + c

          parabolaFormula = parabolaFormula.replaceAll(' ', '') // Gets rid of spaces
          equalSignLocation = parabolaFormula.indexOf('=')
          plusSignLocation1 = parabolaFormula.indexOf('+') // Finds first +
          if (plusSignLocation1 == '') { plusSignLocation1 = parabolaFormula.indexOf('-') }
          plusSignLocation2 = parabolaFormula.lastIndexOf('+') // Finds second + 
          if (plusSignLocation1 == '') { plusSignLocation2 = parabolaFormula.lastIndexOf('-') }

          parabolaA = parabolaFormula.slice(equalSignLocation + 1, plusSignLocation1)
          parabolaB = parabolaFormula.slice(plusSignLocation1 + 1, plusSignLocation2)
          parabolaC = parabolaFormula.slice(plusSignLocation2 + 1)
            //console.log('y = ax^2 = bx + c')
            break

          default: // If no matching equation, run this
            solutions = 'No matching parabola equation'
            solutionField.innerHTML = solutions
        }

        lineX = parseFloat(lineX)
        lineY = parseFloat(lineY)
        lineB = parseFloat(lineB)

        parabolaA = parseFloat(parabolaA)
        parabolaB = parseFloat(parabolaB)
        parabolaC = parseFloat(parabolaC)
        
        if (isNaN(lineX)) { lineX = 1 }
        if (isNaN(lineY)) { lineY = 1 }
        if (isNaN(lineB)) { lineB = 1 }

        if (isNaN(parabolaA)) { parabolaA = 1 }
        if (isNaN(parabolaB)) { parabolaB = 1 }
        if (isNaN(parabolaC)) { parabolaC = 1 }

        if (lineY > 1) {
          lineX = lineX / lineY
          lineB = lineB / lineY
        }

        a = parabolaA
        b = parabolaB - lineX
        c = parabolaC - lineB

        positiveQuadFormula = ( -b + (Math.sqrt( b ** 2 - (4*a*c) )) ) / (2*a)
        negativeQuadFormula = ( -b - (Math.sqrt( b ** 2 - (4*a*c) )) ) / (2*a)

        positiveQuadFormula = parseFloat(positiveQuadFormula.toFixed(3))
        negativeQuadFormula = parseFloat(negativeQuadFormula.toFixed(3))

        doubleCheckP = (parabolaA * positiveQuadFormula ** 2) + (parabolaB * positiveQuadFormula) + parabolaC
        doubleCheckP = parseFloat(doubleCheckP.toFixed(3))

        doubleCheckL = (lineX * positiveQuadFormula) + lineB
        if (doubleCheckL != doubleCheckP) { positiveQuadFormula = 'undifined' }

        doubleCheckP = (parabolaA * negativeQuadFormula ** 2)  + (parabolaB * negativeQuadFormula) + parabolaC
        doubleCheckP = parseFloat(doubleCheckP.toFixed(3))

        doubleCheckL = (lineX * negativeQuadFormula) + lineB
        if (doubleCheckL != doubleCheckP) { negativeQuadFormula = 'undifined' }

        switch (isNaN(positiveQuadFormula) == true || isNaN(positiveQuadFormula) == false) {

          case positiveQuadFormula != 'undifined' && negativeQuadFormula != 'undifined':
            solutions = `x = ${positiveQuadFormula}, ${negativeQuadFormula}`
            break

          case positiveQuadFormula != 'undifined' && negativeQuadFormula == 'undifined':
            solutions = `x = ${positiveQuadFormula}`
            break

          case positiveQuadFormula == 'undifined' && negativeQuadFormula != 'undifined':
            solutions = `x = ${negativeQuadFormula}`
            break
          
          default:
            solutions = 'No Solutions'
        }


        solutionField.innerHTML = solutions


      })
    })
  })