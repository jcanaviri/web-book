'use strict';

function start() {
  let canvas = document.querySelector('#lienzo');
  let ctx = canvas.getContext('2d');

  // Paths
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(150, 50);
  ctx.lineTo(100, 200);
  ctx.closePath();
  // ctx.stroke();
  ctx.fillStyle = 'coral';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(200, 50);
  ctx.lineTo(150, 200);
  ctx.lineTo(250, 200);
  ctx.closePath();
  ctx.stroke();

  // Rectangle
  ctx.beginPath();
  ctx.fillStyle = 'teal';
  ctx.rect(300, 50, 150, 100);
  ctx.fill();

  // Arc circle
  let xAxis = canvas.width / 2;
  let yAxis = canvas.height / 2;
  ctx.beginPath();
  ctx.arc(xAxis, yAxis, 200, 0, Math.PI * 2);
  // Move the mounth
  ctx.moveTo(xAxis + 100, yAxis);
  ctx.arc(xAxis, yAxis, 100, 0, Math.PI);

  // Move to the left eye
  ctx.moveTo(xAxis - 60, yAxis - 80);

  ctx.arc(xAxis - 80, yAxis - 80, 20, 0, Math.PI * 2);

  // Move to the right eye
  ctx.moveTo(xAxis + 100, yAxis - 80, 20, 0, Math.PI * 2);
  ctx.arc(xAxis + 80, yAxis - 80, 20, 0, Math.PI * 2);

  ctx.stroke();
}

window.addEventListener('load', start, false);
