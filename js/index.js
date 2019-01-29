// Your code goes here
let navButton = document.querySelectorAll('.nav .nav-link')
navButton.forEach(element => {
  element.addEventListener('mouseover', event => {
    event.target.style.color = "blue"
    console.log(`This is my target: ${event.target}`)
    setTimeout(function () {
      event.target.style.color = ""
    }, 500)
  }, false)

})
