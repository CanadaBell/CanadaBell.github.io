l1 = ''
y1 = ''

b1 = ''

l2 = ''


window.onload = function() {
    document.getElementById('line1').value = ''
    document.getElementById('line2').value = ''
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("line1").addEventListener('input', () => {
        l1 = document.getElementById('line1').value
        l2 = document.getElementById('line2').value
        mx1 = ''

        if (!l1) {
            x = 0
        }

        l1 = l1.replaceAll(' ', '')

        if (x = 0) {
            equal = -1
        } else {
            equal = l1.indexOf('=') 
        }
        
        if (equal == -1) {
            document.getElementById("error").innerHTML = "*Please enter a valid equation*"
            l1l = ''
            l1r = ''
        } else {
            document.getElementById("error").innerHTML = ''
            l1l = l1.slice(0, equal)
            l1r = l1.slice(equal + 1)
        }

        if (l1r == '') {
            document.getElementById("error").innerHTML = "*Please enter a valid equation*"
        } else {
            document.getElementById("error").innerHTML = ''
        }

        if (l1.includes('x') == false || l1.includes('y') == false) {
            document.getElementById("error").innerHTML = "*Please enter a valid equation*"
        } else {
            document.getElementById("error").innerHTML = ''
        }

        plus = l1.indexOf('+')

        console.log(plus)

    })
})