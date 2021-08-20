function iniciar() {
  let canvas = document.getElementById('lienzo');
  let ctx = canvas.getContext('2d');

  ctx.beginPath();
  // fillRect()
  ctx.fillStyle = 'red';
  ctx.fillRect(20, 20, 100, 100);
  ctx.fillStyle = 'blue';
  ctx.fillRect(200, 20, 100, 100);

  // strokeRect()
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 5;
  ctx.strokeRect(100, 200, 150, 100);
  ctx.stroke();

  // clearRect
  ctx.clearRect(25, 25, 90, 90);

  // fillText()
  ctx.font = '40px Arial';
  ctx.fillStyle = 'purple';
  ctx.fillText('Hello World', 400, 50);

  // strokeText
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'orange';
  ctx.strokeText('Hello World', 400, 100);
}

window.addEventListener('load', iniciar, false);
