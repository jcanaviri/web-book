function iniciar() {
  let elemento = document.getElementById('lienzo');
  let lienzo = elemento.getContext('2d');

  lienzo.beginPath();
  // Genera un circulo con los parámetros de:
  // arc(pos_x, pos_y, radio, angulo_inicio, angulo_fin)
  // los ángulos se colocan en radianes 180° = PI
  lienzo.arc(100, 100, 50, 0, Math.PI*2, false); 
  lienzo.stroke();
}

window.addEventListener('load', iniciar, false);
