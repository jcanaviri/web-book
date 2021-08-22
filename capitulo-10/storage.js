'use strict';

function iniciar() {
  let btn = document.getElementById('grabar');
  btn.addEventListener('click', nuevoitem, false);
}
function nuevoitem() {
  let clave = document.getElementById('clave').value;
  let valor = document.getElementById('texto').value;

  sessionStorage[clave] = valor;

  mostrar(clave);
}
function mostrar(clave) {
  let cajadatos = document.getElementById('cajadatos');
  let valor = sessionStorage[clave];
  cajadatos.innerHTML = `<div>${clave} - ${valor}</div>`
}

window.addEventListener('load', iniciar, false);
