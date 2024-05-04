equationOne = ''
equationTwo = ''


window.onload = function() {
    document.getElementById('line1').value = ''
    document.getElementById('line2').value = ''
}

document.addEventListener('DOMContentLoaded', function() {

    const allInputs = document.querySelectorAll('input')
    allInputs.forEach(input => {
        input.addEventListener('input', () => { 
            equationOne = document.getElementById('line1').value.toLowerCase()
            equationTwo = document.getElementById('line2').value.toLowerCase()
            
            equationOne = equationOne.split(' ')

            arrayLength = equationOne.length

            for (let index = 0; index < arrayLength; index ++ ) {
                if (equationOne[index] == '+' || equationOne[index] == '-') {
                    equationOne[index] = equationOne[index] + equationOne.splice(index + 1, 1)
                    arrayLength--
                }
                continue
            
            }

            equationOne.splice(equationOne.indexOf("="), 1)

            console.log(equationOne)



        })
    })
})
