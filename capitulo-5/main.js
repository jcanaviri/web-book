let maximo = 600;
let medio = document.getElementById('medio');
let reproducir = document.getElementById('reproducir');
let barra = document.getElementById('barra');
let progreso = document.getElementById('progreso');
let bucle = undefined;

reproducir.addEventListener('click', presionar, false);
barra.addEventListener('click', mover, false);

function presionar() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    reproducir.innerHTML = 'Reproducir';
    window.clearInterval(bucle);
  } else {
    medio.play();
    reproducir.innerHTML = 'Pausar';
    bucle = setInterval(estado, 1000);
  }
}

function estado() {
  if (!medio.ended) {
    let total = parseInt((medio.currentTime * maximo) / medio.duration);
    progreso.style.width = `${total}px`;
  } else {
    progreso.style.width = 0;
    reproducir.innerHTML = 'Reproducir';
    window.clearInterval(bucle);
  }
}

function mover(event) {
  if (!medio.paused && !medio.ended) {
    let ratonX = event.pageX - barra.offsetLeft;
    let nuevoTiempo = (ratonX * medio.duration) / maximo;

    medio.currentTime = nuevoTiempo;
    progreso.style.width = ratonX + 'px';
  }
}
