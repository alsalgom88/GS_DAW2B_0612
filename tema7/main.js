'use strict';
// Mostra només la secció seleccionada
const links = document.querySelectorAll('ul li a[href^="#sec"]');
const cards = document.querySelectorAll('.card');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    cards.forEach(card => card.classList.add('hidden')); // amaga totes
    target.classList.remove('hidden'); // mostra la seleccionada
    setTimeout(() => target.classList.add('visible'), 50); // animació suau
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  });
});
// 🌈 Suavitzat del desplaçament per als enllaços interns
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✨ Apareix progressiu de les seccions quan entren a la vista
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

// 🪄 Petita animació al header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 🧭 Feedback visual als enllaços actius (subtemes)
const navLinks = document.querySelectorAll('a[href^="#sec"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (window.scrollY >= offset && window.scrollY < offset + height) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// 💫 Missatge inspirador aleatori (opcional)
const frases = [
  "💪 Cada línia de codi et fa més fort!",
  "🧠 Pensa com el navegador: pas a pas.",
  "🚀 La lògica és la teva millor eina.",
  "✨ Un bon comentari val més que mil funcions sense explicar.",
  "🎯 Aprendre JS és entendre el llenguatge del web!"
];
const fraseEl = document.createElement('p');
fraseEl.className = 'frase-motivadora';
fraseEl.textContent = frases[Math.floor(Math.random() * frases.length)];
document.querySelector('footer').prepend(fraseEl);
