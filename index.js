var listOfLinks = {}
var autoCompleteLinks = []
var pages = []
document.addEventListener('DOMContentLoaded', function() { 
    pages = []
    autoCompleteLinks = document.getElementById("auto-complete").children
    for (let i = 0; i < autoCompleteLinks.length; i++) {
        listOfLinks[autoCompleteLinks[i].innerHTML.toLowerCase()] = [autoCompleteLinks[i].href, i]
        pages.push(autoCompleteLinks[i].innerHTML.toLowerCase())
    }
})

function searchBar() {
    var inputArea = document.getElementById("search-bar")
    var userInput = inputArea.value.toLowerCase()

    if (userInput in listOfLinks) {
        inputArea.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            window.location.href = listOfLinks[userInput][0];
          }
        });
    }
    for (let i = 0; i < pages.length; i++) {
        checkPage = pages[i]
        if (checkPage.includes(userInput)) {
            pageINeed = listOfLinks[pages[i]][1]
            autoCompleteLinks[pageINeed].classList.add("shown")
        } else {
            pageINeed = listOfLinks[pages[i]][1]
            autoCompleteLinks[pageINeed].classList.remove("shown")
        }
    }
}

function checkFocus() {
    input = document.querySelector("input")
    var isFocused = (document.activeElement === input)
    if (isFocused == false) {
        // var elements = document.getElementById("auto-complete").children
        // elements.forEach((element) => {
        //     
        // });
        Array.from(document.getElementById("auto-complete").children).forEach(child => {
            child.classList.remove("shown")
        });
        
    }
}

setInterval(checkFocus, 300)