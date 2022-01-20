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

/* Cronometro */
function startTimer(duration, nday, nhour, nminute, nsecond) {
  var timer = duration,
    hours,
    minutes,
    seconds
  setInterval(function () {
    days = parseInt(timer / 60 / 60 / 24, 10)
    hours = parseInt((timer / 60 / 60) % 24, 10)
    minutes = parseInt((timer / 60) % 60, 10)
    seconds = parseInt(timer % 60, 10)
    days = days < 10 ? '0' + days : days
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    nday.textContent = days
    nhour.textContent = hours
    nminute.textContent = minutes
    nsecond.textContent = seconds

    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}
window.onload = function () {
  var duration = 60 * 58 * 25 * 88.3 // Converter para segundos
  nDay = document.querySelector('#day .numero')
  nHour = document.querySelector('#hour .numero')
  nMinute = document.querySelector('#minute .numero')
  nSecond = document.querySelector('#second .numero')

  startTimer(duration, nDay, nHour, nMinute, nSecond) // iniciando o timer
}
