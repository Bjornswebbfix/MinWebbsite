const canvas = document.getElementById('wave');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 150;

let t = 0;

function drawWave() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0,240,255,0.3)';
  ctx.beginPath();
  for(let x = 0; x < canvas.width; x++) {
    let y = 20 * Math.sin((x+t)/50) + 40 * Math.sin((x+t)/100);
    ctx.lineTo(x, y);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
  t += 2;
  requestAnimationFrame(drawWave);
}

drawWave();
