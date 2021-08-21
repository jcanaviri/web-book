'use strict';

let imagenes = document.querySelectorAll('#cajaimagenes > img');
let soltar = document.getElementById('lienzo');
let ctx = soltar.getContext('2d');

function iniciar() {
  imagenes.forEach((img) => {
    img.addEventListener('dragstart', arrastrado, false);
    img.addEventListener('dragend', finalizado, false);
  });

  soltar.addEventListener('dragenter', function(e) {e.preventDefault();}, false);
  soltar.addEventListener('dragover', function(e) {e.preventDefault();}, false);
  
  soltar.addEventListener('drop', soltado, false);
}

function finalizado(e) {
  let elemento = e.target;
  elemento.style.visibility = 'hidden';
}

function arrastrado(e) {
  e.dataTransfer.effectAllowed = 'move';
  let elemento = e.target;
  e.dataTransfer.setData('text', elemento.getAttribute('id'));
  
  let img = new Image();
  img.src = e.target.src;
  e.dataTransfer.setDragImage(img, 0, 0);
}

function soltado(e) {
  e.preventDefault();
  let id = e.dataTransfer.getData('text');
  let elemento = document.getElementById(id);

  let posx = e.pageX;
  let posy = e.pageY;

  ctx.drawImage(elemento, posx, posy);
}

window.addEventListener('load', iniciar, false);
