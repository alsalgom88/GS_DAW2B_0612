'use strict';

/* ======================================================
   🎬 Efecte Matrix (Canvas)
   ====================================================== */
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 180;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 14;
let columns, drops;

function initDrops() {
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
}
initDrops();

function drawMatrix() {
  ctx.fillStyle = 'rgba(10, 15, 30, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ff99';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);

/* ======================================================
   ⬆ Botó per tornar a dalt
   ====================================================== */
document.getElementById('backTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});