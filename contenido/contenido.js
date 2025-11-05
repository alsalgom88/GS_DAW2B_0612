'use strict';

// 👀 Fade-in en fer scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));

  // ⬆️ Botó per tornar a dalt
  const topButton = document.querySelector('.back-top');
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
