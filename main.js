menu = document.querySelector('.menu')
menu_toggler = document.querySelector('.menu-toggler')
top_nav = document.querySelector('.top-nav')
nav_links = Array.from(document.querySelectorAll('.nav-link'))
id_sections = Array.from(document.querySelectorAll('nav a[href*="#"]'))
up = document.querySelector('#up')

function removeOpen () {
  if (
    top_nav.classList.contains('open') &&
    menu_toggler.classList.contains('open')
  ) {
    menu_toggler.classList.remove('open')
    top_nav.classList.remove('open')
  }
}

menu.addEventListener('click', () => {
  menu_toggler.classList.toggle('open')
  top_nav.classList.toggle('open')
})

top_nav.addEventListener('click', removeOpen)

nav_links.forEach(nav_link => nav_link.addEventListener('click', removeOpen))

id_sections.forEach(id_section =>
  id_section.addEventListener('click', () => {
    section = document.querySelector(`${id_section.hash}`)
    section.scrollIntoView()
  })
)

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
