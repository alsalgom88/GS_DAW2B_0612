'use strict';

/*
  🧩 Fase 2 — Aplicació amb HTML + DOM
  Objectiu: fer servir inputs i botons per afegir venedors i mostrar un resum.
*/

// Shortcut per seleccionar elements
const $ = (sel) => document.querySelector(sel);

// TODO: 1️⃣ Declara la constant COMISSIO i l’array venedors
// const COMISSIO = ...;
// const venedors = [];

// TODO: 2️⃣ Afegeix listeners als botons
// $('#btnAfegir').addEventListener('click', afegirVenedor);
// $('#btnResum').addEventListener('click', mostrarResum);

// TODO: 3️⃣ Funció per mostrar missatges al DOM
function mostrarMissatge(text, esError = false) {
  const box = $('#missatge');
  box.textContent = text;
  if (esError) box.classList.add('error');
  else box.classList.remove('error');
}

// TODO: 4️⃣ Implementa la funció afegirVenedor()
// - Llegeix els valors dels inputs
// - Valida que no estiguin buits ni siguin negatius
// - Calcula la comissió i guarda el venedor a l’array
// - Mostra un missatge d’èxit o error al DOM

function afegirVenedor() {
  // const nom = ...
  // const vendes = ...
  // const objectiu = ...
  // if (...) { mostrarMissatge("❌ Dades incorrectes!", true); return; }
  // const totalComissio = ...
  // const supera = ...
  // venedors.push({ nom, vendes, objectiu, totalComissio, supera });
  // mostrarMissatge(`✅ ${nom} afegit correctament.`);
}

// TODO: 5️⃣ Implementa la funció mostrarResum()
// - Si no hi ha venedors, mostra error
// - Calcula totals i mitjanes
// - Mostra el resum dins de #sortida

function mostrarResum() {
  // if (venedors.length === 0) { mostrarMissatge("No hi ha venedors!", true); return; }
  // let totalVendes = 0;
  // let totalComissio = 0;
  // let superats = 0;
  // let text = "📋 Resum:\n";
  // for (...) { ... }
  // $('#sortida').textContent = text;
}
