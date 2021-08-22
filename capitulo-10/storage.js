'use strict';

function iniciar() {
  let btn = document.getElementById('grabar');
  btn.addEventListener('click', nuevoitem, false);
  mostrar();
}
function nuevoitem() {
  let clave = document.getElementById('clave').value;
  let valor = document.getElementById('texto').value;

  sessionStorage.setItem(clave, valor);

  mostrar();
  document.getElementById('clave').value = '';
  document.getElementById('texto').value = '';
}
function mostrar() {
  let cajadatos = document.getElementById('cajadatos');
  cajadatos.innerHTML =
    '<div><button onclick="eliminarTodo();">Eliminar Todo</button></div>';
  for (let i = 0; i < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    let valor = sessionStorage.getItem(clave);
    cajadatos.innerHTML += `<div>${clave} - ${valor}<br><button onclick="eliminar('${clave}');">Eliminar</button></div>`;
  }
}

function eliminar(clave) {
  if (confirm('Estas seguro?')) {
    sessionStorage.removeItem(clave);
    mostrar();
  }
}
function eliminarTodo() {
  if (confirm('Estas seguro?')) {
    sessionStorage.clear();
    mostrar();
  }
}

window.addEventListener('load', iniciar, false);
