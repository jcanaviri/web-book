'use strict';

function iniciar() {
  let btn = document.getElementById('grabar');
  btn.addEventListener('click', nuevoitem, false);
  window.addEventListener('storage', mostrar, false);
  mostrar();
}
function nuevoitem() {
  let clave = document.getElementById('clave').value;
  let valor = document.getElementById('texto').value;

  localStorage.setItem(clave, valor);

  mostrar();
  document.getElementById('clave').value = '';
  document.getElementById('texto').value = '';
}
function mostrar() {
  let cajadatos = document.getElementById('cajadatos');
  cajadatos.innerHTML =
    '<div><button onclick="eliminarTodo();">Eliminar Todo</button></div>';
  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    cajadatos.innerHTML += `<div>${clave} - ${valor}<br><button onclick="eliminar('${clave}');">Eliminar</button></div>`;
  }
}

function eliminar(clave) {
  if (confirm('Estas seguro?')) {
    localStorage.removeItem(clave);
    mostrar();
  }
}
function eliminarTodo() {
  if (confirm('Estas seguro?')) {
    localStorage.clear();
    mostrar();
  }
}

window.addEventListener('load', iniciar, false);
