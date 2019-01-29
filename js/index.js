// Your code goes here
let navButton = document.querySelectorAll('.nav .nav-link')
let headerImg = document.querySelector(".intro img")
let destinationBtn = document.querySelectorAll('.destination .btn')
navButton.forEach(element => {
  element.addEventListener('mouseover', event => {
    event.target.style.color = "blue"
    console.log(`This is my target: ${event.target}`)

    setTimeout(function () {
      event.target.style.color = ""
    }, 500)
  }, false)

})

destinationBtn.forEach(element => {
  element.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = "green"
    //event.preventDefault()

    setTimeout(function() {
      event.target.style.backgroundColor = ""
    }, 300)
  }, false)

  element.addEventListener('click', event => {
    console.log(`Button fired off of click event!`)
    event.stopPropagation() //example from codePen
  })
})

headerImg.style.cursor = "pointer"
headerImg.addEventListener('drag', function() {
  headerImg.style.display = "flex"
})

// window.addEventListener("scroll", event => {
//
// })
