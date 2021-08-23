'use strict';

let bd;

function iniciar() {
  let cajadatos = document.getElementById('cajadatos');
  let boton = document.getElementById('buscar');
  boton.addEventListener('click', buscarobjetos, false);

  let solicitud = indexedDB.open('mydb2');
  solicitud.addEventListener('error', errores, false);
  solicitud.addEventListener('success', crear, false);
}

function errores(e) {
  alert('Error: ' + e.code + ' ' + e.message);
}
function crear(e) {
  bd = e.result || e.target.result;
  if (bd.version == '') {
    let solicitud = bd.setVersion('1.0');
    solicitud.addEventListener('error', errores, false);
    solicitud.addEventListener('success', crearbd, false);
  }
}
function crearbd() {
  let almacen = bd.createObjectStore('peliculas', { keyPath: 'id' });
  almacen.createIndex('BuscarFecha', 'fecha', { unique: false });
}
function buscarobjetos() {
  cajadatos.innerHTML = '';
  let buscar = document.getElementById('fecha').value;

  let transaccion = bd.transaction(['peliculas']);
  let almacen = transaccion.objectStore('peliculas');
  let indice = almacen.index('BuscarFecha');

  let rango = IDBKeyRange.only(buscar);
  let cursor = indice.openCursor(rango);
  cursor.addEventListener('success', mostrarlista, false);
}
function mostrarlista(e) {
  let cursor = e.result || e.target.result;
  if (cursor) {
    cajadatos.innerHTML +=
      '<div>' +
      cursor.value.id +
      ' - ' +
      cursor.value.titulo +
      ' - ' +
      cursor.value.fecha +
      '</div>';
    cursor.continue();
  }
}
window.addEventListener('load', iniciar, false);
