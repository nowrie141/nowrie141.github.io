const menu = document.querySelector('.menu')
const menu_toggler = document.querySelector('.menu-toggler')
const top_nav = document.querySelector('.top-nav')
const nav_links = Array.from(document.querySelectorAll('.nav-link'))
const id_sections = Array.from(document.querySelectorAll('nav a[href*="#"]'))
const up = document.querySelector('#up')

// Fix button to go up
function fixUp () {
  if (window.scrollY >= top_nav.offsetHeight) {
    document.body.classList.add('fixed-menu')
  } else {
    document.body.classList.remove('fixed-menu')
  }
}

window.addEventListener('scroll', fixUp)

let disabledScroll = false

function disableScroll () {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop)
  }
  disabledScroll = true
}

function enableScroll () {
  window.onscroll = function () {}
  disabledScroll = false
}

// Open and close the menu adding the class open
function removeOpen () {
  if (
    top_nav.classList.contains('open') &&
    menu_toggler.classList.contains('open')
  ) {
    menu_toggler.classList.remove('open')
    top_nav.classList.remove('open')
  }
  enableScroll()
}

menu.addEventListener('click', () => {
  menu_toggler.classList.toggle('open')
  top_nav.classList.toggle('open')
  if (disabledScroll == true) {
    enableScroll()
  } else {
    disableScroll()
  }
})

top_nav.addEventListener('click', removeOpen)

nav_links.forEach(nav_link => nav_link.addEventListener('click', removeOpen))

// Scroll into each section
id_sections.forEach(id_section =>
  id_section.addEventListener('click', () => {
    section = document.querySelector(`${id_section.hash}`)
    section.scrollIntoView()
  })
)

// Make the scroll smooth
up.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

AOS.init({
  easing: 'ease',
  duration: 1800
})
