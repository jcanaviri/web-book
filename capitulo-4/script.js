function showAlert() {
  alert('Hiciste click!!!');
}

function makeClick() {
  let list = document.querySelectorAll('p');
  list.forEach(item => {
    item.onclick = showAlert;
  });
}

window.onload = makeClick;
