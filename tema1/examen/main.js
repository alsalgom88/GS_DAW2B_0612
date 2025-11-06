'use strict';

// --- Navegació entre pàgines ---
let current = 1;
const totalPages = 7;

const pages = document.querySelectorAll('section.card');
function showPage(num) {
  pages.forEach((page, index) => {
    if (index + 1 === num) {
      page.style.display = 'block';
      setTimeout(() => page.classList.add('visible'), 50);
    } else {
      page.classList.remove('visible');
      setTimeout(() => (page.style.display = 'none'), 400);
    }
  });
}
function nextPage() {
  if (current < totalPages) current++;
  showPage(current);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function prevPage() {
  if (current > 1) current--;
  showPage(current);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inici
document.addEventListener('DOMContentLoaded', () => showPage(current));
