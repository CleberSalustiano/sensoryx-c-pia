function startTimer(duration, display) {
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
    display.textContent = days + ':' + hours + ':' + minutes + ':' + seconds
    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}
window.onload = function () {
  var duration = 60 * 59 * 5 // Converter para segundos
  display = document.querySelector('#timer') // selecionando o timer
  startTimer(duration, display) // iniciando o timer
}
