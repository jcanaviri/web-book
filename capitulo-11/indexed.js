'use strict';

let db;

function iniciar() {
  const cajadatos = document.getElementById('cajadatos');
  const btn = document.getElementById('grabar');

  btn.addEventListener('click', agregarobjeto, false);

  let solicitud = indexedDB.open('mydb2');
  solicitud.addEventListener('error', errores, false);
  solicitud.addEventListener('success', crear, false);

  solicitud.addEventListener('upgradeneeded', crearDB, false);
}

function errores(e) {
  alert(`Error: ${e.code} ${e.message}`);
}
function crear(e) {
  db = e.result || e.target.result;
}
function crearDB(e) {
  db = e.result || e.target.result;
  db.createObjectStore('peliculas', { keyPath: 'id' });
}

function agregarobjeto() {
  let clave = document.getElementById('clave').value;
  let titulo = document.getElementById('texto').value;
  let fecha = document.getElementById('fecha').value;

  let transaccion = db.transaction(['peliculas'], 'readwrite');
  let almacen = transaccion.objectStore('peliculas');

  almacen.add({ id: clave, titulo: titulo, fecha: fecha });

  document.getElementById('clave').value = '';
  document.getElementById('texto').value = '';
  document.getElementById('fecha').value = '';
  mostrar(clave);
}

function mostrar(clave) {
  let transaccion = db.transaction(['peliculas']);
  let almacen = transaccion.objectStore('peliculas');
  let solicitud = almacen.get(clave);
  solicitud.addEventListener('success', mostrarlista, false);
}
function mostrarlista(e) {
  let result = e.result || e.target.result;
  cajadatos.innerHTML = `<div>${result.id} - ${result.titulo} - ${result.fecha}</div>`;
}

window.addEventListener('load', iniciar, false);
