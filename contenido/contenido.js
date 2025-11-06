'use strict';

// 🌱 Fade-in suau de les seccions
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});

// ⬆️ Mostra/amaga el botó “Tornar amunt”
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backTop.style.opacity = '1';
    backTop.style.pointerEvents = 'auto';
  } else {
    backTop.style.opacity = '0';
    backTop.style.pointerEvents = 'none';
  }
});

// 💻 Fons Matrix animat
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 255, 153, 0.6)';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(text, x, y);
    if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 45);
window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});