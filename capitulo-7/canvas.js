function iniciar() {
  let elemento = document.getElementById('lienzo');
  let lienzo = elemento.getContext('2d');

  lienzo.beginPath();
  // Genera un circulo con los parámetros de:
  // arc(pos_x, pos_y, radio, angulo_inicio, angulo_fin)
  // los ángulos se colocan en radianes 180° = PI
  let radian = (Math.PI / 180) * 45;
  // El valor boolean indica si el sentido de la curva
  // es de acuedo a la manecillas del reloj o no
  lienzo.arc(100, 100, 50, 0, radian, true);
  lienzo.stroke();
}

window.addEventListener('load', iniciar, false);
