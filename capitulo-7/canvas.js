function iniciar() {
  let elemento = document.getElementById('lienzo');
  let lienzo = elemento.getContext('2d');

  let gradiente = lienzo.createRadialGradient(0, 0, 30, 0, 0, 300);
  gradiente.addColorStop(0.5, '#0000ff');
  gradiente.addColorStop(1, '#000000');
  lienzo.fillStyle = gradiente;

  lienzo.fillRect(10, 10, 100, 100);
  lienzo.fillRect(150, 10, 200, 100);
}

window.addEventListener('load', iniciar, false);
