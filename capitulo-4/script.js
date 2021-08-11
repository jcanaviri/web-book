function showAlert() {
  alert('Hiciste click!!!');
}

function makeClick() {
  document.querySelector('p').onclick = showAlert;
}

window.onload = makeClick;
