var listOfLinks = {}
var autoCompleteLinks = []

document.addEventListener('DOMContentLoaded', function() {
    const allPages = document.querySelectorAll('.dropdown > .dropdown-content > a')
    allPages.forEach(page => {
        if (page.getAttribute("href") == null) {
            return
        }
        pageHref = page.getAttribute("href")
        pageName = page.innerHTML
        newLink = document.createElement('a')
        newLink.href = pageHref
        newLink.innerHTML = pageName

        newLink.classList.add('result')

        document.getElementById('auto-complete').appendChild(newLink)
        newLink.classList.add('hidden')
    });
})


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
        Array.from(document.getElementById("auto-complete").children).forEach(child => {
            child.classList.remove("shown")
        });
        
    }
}

setInterval(checkFocus, 300)