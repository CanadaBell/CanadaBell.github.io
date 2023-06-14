let km = 0
let m = 0

let mi = 0
let ft = 0
let inch = 0

window.onload = function() {
    document.getElementById("kilometers").value = 0
    document.getElementById("meters").value = 0

    document.getElementById("miles").value = 0
    document.getElementById("feet").value = 0
    document.getElementById("inches").value = 0

    /// Metric System ///

    // Kilometers //
    document.getElementById("kilometers").addEventListener('input', () => {
        m = document.getElementById("meters").value // Beomes the inputed value
        km = document.getElementById("kilometers").value // Beomes the inputed value

        if (!km) { km = 0 } // If km is empty, km = 0
        if (isNaN(km)) {
            document.getElementById("kilometers").value = 0 // If km = string, input/km  = 0
            km = 0
        }

        if (!m) { m = 0 } // If m is empty, m = 0
        if (isNaN(m)) {
            document.getElementById("meters").value = 0 // If m = string, input/m  = 0
            m = 0
        }

        m = m * 1 // Turns m into int

        


        inch = ((km * 1000) + m) * 39.37 // ((value of km * 1000) + value of m) * 39.37

        // Checks if there are inches that can convert to ft
        if (inch >= 12) {
            ft = Math.floor(inch / 12) // ft becomes the highest multiple of 12 without going over
            inch = inch % 12 // Inches beocme the remander

            // Checks if there are ft that can convert to miles
            if (ft >= 5280) {
                mi = Math.floor(ft / 5280) // mi becomes the highest multiple of 5280 without going over
                ft = ft % 5280 // ft beocme the remander
            } else {
                mi = 0
            }

        } else {
            ft = 0
        }

        inch = Number(inch.toFixed(2)) // \
        ft = Number(ft.toFixed(2)) //      > Rounds the numbers to the nearses 100th (.01)
        mi = Number(mi.toFixed(2)) //     /

        document.getElementById("inches").value = inch // \
        document.getElementById("feet").value = ft //      > Inputs now have the calcualted value
        document.getElementById("miles").value = mi //    /
    })

    // Meters //
    document.getElementById("meters").addEventListener('input', () => {
        m = document.getElementById("meters").value // Beomes the inputed value
        km = document.getElementById("kilometers").value // Beomes the inputed value

        if (!km) { km = 0 } // If km is empty, km = 0
        if (isNaN(km)) {
            document.getElementById("kilometers").value = 0 // If km = string, input/km  = 0
            km = 0
        }

        if (!m) { m = 0 } // If m is empty, m = 0
        if (isNaN(m)) {
            document.getElementById("meters").value = 0 // If m = string, input/m  = 0
            m = 0
        }

        m = m * 1 // Turns m into int

        


        inch = ((km * 1000) + m) * 39.37 // ((value of km * 1000) + value of m) * 39.37

        // Checks if there are inches that can convert to ft
        if (inch >= 12) {
            ft = Math.floor(inch / 12) // ft becomes the highest multiple of 12 without going over
            inch = inch % 12 // Inches beocme the remander

            // Checks if there are ft that can convert to miles
            if (ft >= 5280) {
                mi = Math.floor(ft / 5280) // mi becomes the highest multiple of 5280 without going over
                ft = ft % 5280 // ft beocme the remander
            } else {
                mi = 0
            }

        } else {
            ft = 0
        }

        inch = Number(inch.toFixed(2)) // \
        ft = Number(ft.toFixed(2)) //      > Rounds the numbers to the nearses 100th (.01)
        mi = Number(mi.toFixed(2)) //     /

        document.getElementById("inches").value = inch // \
        document.getElementById("feet").value = ft //      > Inputs now have the calcualted value
        document.getElementById("miles").value = mi //    /
    })

        /// Imperial System ///

        // Miles //
        document.getElementById("miles").addEventListener('input', () => {
            mi = document.getElementById("miles").value // Beomes the inputed value
            ft = document.getElementById("feet").value // Beomes the inputed value
            inch = document.getElementById("inches").value // Beomes the inputed value
    
            if (!mi) { mi = 0 } // If mi is empty, mi = 0
            if (isNaN(mi)) {
                document.getElementById("miles").value = 0 // If mi = string, input/mi  = 0
                mi = 0
            }

            mi = mi * 1
    
            if (!ft) { ft = 0 } // If ft is empty, ft = 0
            if (isNaN(ft)) {
                document.getElementById("feet").value = 0 // If ft = string, input/ft  = 0
                ft = 0
            }

            ft = ft * 1

            if (!inch) { inch = 0 } // If inch is empty, inch = 0
            if (isNaN(inch)) {
                document.getElementById("inches").value = 0 // If inch = string, input/inch  = 0
                inch = 0
            }
    
            inch = inch * 1 // Turns inch into int
    
           m = ((((mi * 5280) + ft) * 12) + inch) / 39.37

           // 1. Takes the value of mi and * 5280 (convert to ft) then adds new value to ft
           // 2. Takes the value of ft (mi turned ft + inputed ft) and * 12 (convert to inch) then adds new value of ft to inch
           // 3. takes inch (ft turned inch + inputed inch) and / 39.37 to convert to m
    
            // Checks if there are meters that can convert to kilometers
            if (m >= 1000) {
                km = Math.floor(m / 1000) // km becomes the highest multiple of 1000 without going over
                m = m % 1000 // m beocme the remander
    
            } else {
                km = 0
            }
    
            m = Number(m.toFixed(2)) // Rounds the numbers to the nearses 100th (.01)
            km = Number(km.toFixed(2)) // Rounds the numbers to the nearses 100th (.01)
    
            document.getElementById("meters").value = m // Inputs now have the calcualted value
            document.getElementById("kilometers").value = km // Inputs now have the calcualted value
        })

        // Feet //
        document.getElementById("feet").addEventListener('input', () => {
            mi = document.getElementById("miles").value // Beomes the inputed value
            ft = document.getElementById("feet").value // Beomes the inputed value
            inch = document.getElementById("inches").value // Beomes the inputed value
    
            if (!mi) { mi = 0 } // If mi is empty, mi = 0
            if (isNaN(mi)) {
                document.getElementById("miles").value = 0 // If mi = string, input/mi  = 0
                mi = 0
            }

            mi = mi * 1
    
            if (!ft) { ft = 0 } // If ft is empty, ft = 0
            if (isNaN(ft)) {
                document.getElementById("feet").value = 0 // If ft = string, input/ft  = 0
                ft = 0
            }

            ft = ft * 1

            if (!inch) { inch = 0 } // If inch is empty, inch = 0
            if (isNaN(inch)) {
                document.getElementById("inches").value = 0 // If inch = string, input/inch  = 0
                inch = 0
            }
    
            inch = inch * 1 // Turns inch into int
    
            m = ((((mi * 5280) + ft) * 12) + inch) / 39.37

            // 1. Takes the value of mi and * 5280 (convert to ft) then adds new value to ft
            // 2. Takes the value of ft (mi turned ft + inputed ft) and * 12 (convert to inch) then adds new value of ft to inch
            // 3. takes inch (ft turned inch + inputed inch) and / 39.37 to convert to m
    
            // Checks if there are meters that can convert to kilometers
            if (m >= 1000) {
                km = Math.floor(m / 1000) // km becomes the highest multiple of 1000 without going over
                m = m % 1000 // m beocme the remander
    
            } else {
                km = 0
            }
    
            m = Number(m.toFixed(2)) // Rounds the numbers to the nearses 100th (.01)
            km = Number(km.toFixed(2)) // Rounds the numbers to the nearses 100th (.01)
    
            document.getElementById("meters").value = m // Inputs now have the calcualted value
            document.getElementById("kilometers").value = km // Inputs now have the calcualted value
        })

        // Inches //
        document.getElementById("feet").addEventListener('input', () => {
            mi = document.getElementById("miles").value // Beomes the inputed value
            ft = document.getElementById("feet").value // Beomes the inputed value
            inch = document.getElementById("inches").value // Beomes the inputed value
    
            if (!mi) { mi = 0 } // If mi is empty, mi = 0
            if (isNaN(mi)) {
                document.getElementById("miles").value = 0 // If mi = string, input/mi  = 0
                mi = 0
            }

            mi = mi * 1
    
            if (!ft) { ft = 0 } // If ft is empty, ft = 0
            if (isNaN(ft)) {
                document.getElementById("feet").value = 0 // If ft = string, input/ft  = 0
                ft = 0
            }

            ft = ft * 1

            if (!inch) { inch = 0 } // If inch is empty, inch = 0
            if (isNaN(inch)) {
                document.getElementById("inches").value = 0 // If inch = string, input/inch  = 0
                inch = 0
            }
    
            inch = inch * 1 // Turns inch into int
    
            m = ((((mi * 5280) + ft) * 12) + inch) / 39.37

            // 1. Takes the value of mi and * 5280 (convert to ft) then adds new value to ft
            // 2. Takes the value of ft (mi turned ft + inputed ft) and * 12 (convert to inch) then adds new value of ft to inch
            // 3. takes inch (ft turned inch + inputed inch) and / 39.37 to convert to m
    
            // Checks if there are meters that can convert to kilometers
            if (m >= 1000) {
                km = Math.floor(m / 1000) // km becomes the highest multiple of 1000 without going over
                m = m % 1000 // m beocme the remander
    
            } else {
                km = 0
            }
    
            m = Number(m.toFixed(2)) // Rounds the numbers to the nearses 100th (.01)
            km = Number(km.toFixed(2)) // Rounds the numbers to the nearses 100th (.01)
    
            document.getElementById("meters").value = m // Inputs now have the calcualted value
            document.getElementById("kilometers").value = km // Inputs now have the calcualted value
        })
}