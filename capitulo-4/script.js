window.addEventListener('load', () => {
  let list = document.querySelectorAll('p');
  list.forEach((item) => {
    item.addEventListener(
      'click',
      () => {
        alert('Hiciste click!!!');
      },
      false
    );
  });
});
