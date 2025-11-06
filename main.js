'use strict';

// 🎬 Efecte Matrix verd
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ff99';
  ctx.font = fontSize + 'px monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 60);

// 👁️ Fade-in seccions
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('section').forEach(el => observer.observe(el));

// 🧠 Easter Egg
console.log('%c💾 Benvingut al Mòdul 0612!', 'color:#00ff99; font-size:16px;');
console.log('%c🧠 Consell: el millor codi és el que pots explicar amb un somriure.', 'color:#a7f3d0;');

// 🔝 Botó Tornar Amunt
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

// 🌀 Efecte d’entrada del logo
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo');
  logo.style.opacity = '0';
  logo.style.transform = 'scale(0.8)';
  setTimeout(() => {
    logo.style.transition = 'all 1s ease';
    logo.style.opacity = '1';
    logo.style.transform = 'scale(1)';
  }, 300);
});