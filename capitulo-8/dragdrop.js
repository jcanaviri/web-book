'use strict';

let origen1 = document.getElementById('img');
let soltar = document.getElementById('cajasoltar');

function iniciar() {
  origen1.addEventListener('dragstart', arrastrado, false);
  origen1.addEventListener('dragend', finalizado, false);

  soltar.addEventListener('dragenter', entrando, false);
  soltar.addEventListener('dragleave', saliendo, false);
  soltar.addEventListener(
    'dragover',
    function (e) {
      e.preventDefault();
    },
    false
  );

  soltar.addEventListener('drop', soltado, false);
}

function entrando(e) {
  e.preventDefault();
  soltar.style.background = 'rgba(0, 150, 0,.2)';
}
function saliendo(e) {
  e.preventDefault();
  soltar.style.background = '#fff';
}
function finalizado(e) {
  let elemento = e.target;
  elemento.parentNode.style.display = 'none';
}

function arrastrado(e) {
  e.dataTransfer.effectAllowed = 'move';

  let codigo = `<img src="${origen1.getAttribute('src')}">`;
  e.dataTransfer.setData('text', codigo);
}

function soltado(e) {
  e.preventDefault();
  soltar.style.background = '#fff';
  soltar.innerHTML = e.dataTransfer.getData('text');
}

window.addEventListener('load', iniciar, false);
