// Abrindo menu lateral
const body = document.querySelector('body')
const nav = document.querySelector('#nav')
const openMenu = document.querySelector('.icon-menu')
const closeMenu = document.querySelector('.icon-close')

openMenu.addEventListener('click', function () {
  nav.classList.add('show')
  body.classList.add('show')
})

closeMenu.addEventListener('click', function () {
  nav.classList.remove('show')
  body.classList.remove('show')
})

const links = document.querySelectorAll('nav#nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    body.classList.remove('show')
  })
}
