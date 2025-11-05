'use strict';

/* ============================================================
   Navegació entre seccions (pantalles)
   ============================================================ */

let current = 1;

// Mostra només la secció actual
function showPage(num) {
  document.querySelectorAll('section.card').forEach((sec, i) => {
    sec.classList.toggle('hidden', i + 1 !== num);
  });
}

// Botons següent / anterior
function nextPage() {
  const total = document.querySelectorAll('section.card').length;
  if (current < total) current++;
  showPage(current);
}

function prevPage() {
  if (current > 1) current--;
  showPage(current);
}

// Inicialitza la primera pàgina
document.addEventListener('DOMContentLoaded', () => {
  showPage(current);
});
