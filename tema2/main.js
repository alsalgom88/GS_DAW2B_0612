// =========================================================
// 💻 Tema 2 — Desenvolupament Web en Entorn Client
// Animació Matrix + Scroll suau + Botó "Tornar amunt"
// =========================================================

// 🌌 Efecte Matrix
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

const letters = "01";
const fontSize = 14;
let columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(10, 15, 13, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff9d";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 35);
window.addEventListener('resize', resizeCanvas);

// ✨ Animació d’aparició d’elements
const elements = document.querySelectorAll('section, .card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
elements.forEach(el => observer.observe(el));

// 🆙 Botó “Tornar amunt”
const backTop = document.createElement('button');
backTop.classList.add('back-top');
backTop.textContent = "↑";
document.body.appendChild(backTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backTop.classList.add('visible');
  else backTop.classList.remove('visible');
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});