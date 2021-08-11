function showAlert() {
  alert('Hiciste click!!!');
}

function makeClick() {
  let list = document.querySelectorAll('p');
  list.forEach(item => {
    item.addEventListener('click', showAlert, false);
  });
}

window.addEventListener('load', makeClick);
