function iniciar() {
  let elemento = document.getElementById('lienzo');
  let lienzo = elemento.getContext('2d');

  lienzo.beginPath();
  lienzo.moveTo(100, 100);
  lienzo.lineTo(200, 200);
  lienzo.lineTo(100, 200);
  lienzo.fill();
  lienzo.stroke();
}

window.addEventListener('load', iniciar, false);
