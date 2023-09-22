let base = 0
let root = 0
let square = 0
let cube = 0

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('base-number').value = ''

    document.getElementById("base-number").addEventListener('input', () => { 
        base = document.getElementById("base-number").value

        if (!base) {base = 0}
        if (isNaN(base)) {
            base = 0
            document.getElementById('base-number').value = ''
        }
        root = Math.sqrt(base)
        square = base * base
        cube = base * base * base


        document.getElementsByTagName("h3")[0].innerHTML= root
        document.getElementsByTagName("h3")[1].innerHTML= square
        document.getElementsByTagName("h3")[2].innerHTML= cube
    })
  })
  