// Your code goes here
let navButton = document.querySelectorAll('.nav .nav-link')
let headerImg = document.querySelector(".intro img")
let destinationBtn = document.querySelectorAll('.destination .btn')
let sectionImg = document.querySelector(".content-destination img")
let adventureContent = document.querySelector(".text-content p")
let headingH2 = document.querySelector(".logo-heading")
let footerP = document.querySelector(".footer p")
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
    event.preventDefault()

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

sectionImg.style.cursor = "pointer"
sectionImg.addEventListener('drop', function() {
  sectionImg.style.display = "none"
})

window.addEventListener("scroll", event => {
  if(scrollX < 400) {
    window.scroll(0, scrollX += 6)
  }
})

window.addEventListener("wheel", event => {
  footerP.style.fontSize = "60px"
})

adventureContent.addEventListener("mousemove", event => {
  adventureContent.style.marginLeft = "45px"
})

headingH2.style.cursor = "pointer"
headingH2.addEventListener("dblclick", event => {
  headingH2.style.color = "pink"
  headingH2.style.fontSize = "80px"
})

let destinationH2 = document.querySelector(".content-destination h2")
destinationH2.style.cursor = "pointer"
window.addEventListener('keyup', event => {
  let x = event.key
  destinationH2.textContent = `key went up ${x}`
})

window.addEventListener('keydown', event => {
  let y = event.key
  destinationH2.textContent = `key went down ${y}`
})
