'use strict';

let imagenes = document.querySelectorAll('#cajaimagenes > img');
let soltar = document.getElementById('cajasoltar');

function iniciar() {
  imagenes.forEach((img) => {
    img.addEventListener('dragstart', arrastrado, false);
  });


  soltar.addEventListener('dragenter', function(e) {e.preventDefault();}, false);
  soltar.addEventListener('dragover', function(e) {e.preventDefault();}, false);
  
  soltar.addEventListener('drop', soltado, false);
}

function arrastrado(e) {
  e.dataTransfer.effectAllowed = 'move';
  let elemento = e.target;
  let codigo = elemento.getAttribute('id');
  e.dataTransfer.setData('text', codigo);
}

function soltado(e) {
  e.preventDefault();
  let id = e.dataTransfer.getData('text');
  if (id != 'img4') {
    let src = document.getElementById(id).src;
    soltar.innerHTML = `<img src="${src}">`;
  } else {
    soltar.innerHTML = 'La imagen no es valida';
  }

}

window.addEventListener('load', iniciar, false);
