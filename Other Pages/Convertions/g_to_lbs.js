let g = 0
let lbs = 0
let oz = 0

window.onload = function() {
    document.getElementById("grams").value = 0
    document.getElementById("pounds").value = 0
    document.getElementById("ounces").value = 0

    document.getElementById("grams").addEventListener('input', () => {
        g = document.getElementById("grams").value
        if (!g) { g = 0 }
        if (isNaN(g)) { 
            document.getElementById("grams").value = '' 
            g = 0
        }
    
        oz = g / 28.35
        

        if (oz >= 16) {
          lbs = Math.floor(oz / 16)
          oz = oz % 16 
        } else {
            lbs = 0
        }
        
        oz = Number(oz.toFixed(2))
    
        document.getElementById("pounds").value = lbs
        document.getElementById("ounces").value = oz
    })

    document.getElementById("ounces").addEventListener('input', () => {
        oz = document.getElementById("ounces").value
        lbs = document.getElementById("pounds").value

       

        if (!oz) { oz = 0 }
        if (isNaN(oz)) { 
            document.getElementById("ounces").value = 0 
            oz = 0
        }

        oz = oz * 1

        

        if (!lbs) { lbs = 0 }
        if (isNaN(lbs)) { 
            document.getElementById("pounds").value = 0 
            lbs = 0
        }

        g = ((lbs * 16) + oz) * 28.35


        g = Number(g.toFixed(2))
    
        document.getElementById("grams").value = g

    })

    document.getElementById("pounds").addEventListener('input', () => {
        oz = document.getElementById("ounces").value
        lbs = document.getElementById("pounds").value

       

        if (!oz) { oz = 0 }
        if (isNaN(oz)) { 
            document.getElementById("ounces").value = 0
            oz = 0
        }

        oz = oz * 1

        

        if (!lbs) { lbs = 0 }
        if (isNaN(lbs)) { 
            document.getElementById("pounds").value =  
            lbs = 0
        }

        g = ((lbs * 16) + oz) * 28.35


        g = Number(g.toFixed(2))
    
        document.getElementById("grams").value = g

    })
}

