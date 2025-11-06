'use strict';

/*
  🧩 Fase 1.5 — Diversos venedors
  Objectiu: repetir el procés de la fase 1 però per diversos venedors, utilitzant arrays i bucles.
*/

// TODO: 1️⃣ Declara la constant COMISSIO = 0.1
// const COMISSIO = ...;

// TODO: 2️⃣ Crea un array buit per guardar els venedors
// const venedors = [];

// TODO: 3️⃣ Demana amb prompt() quants venedors vols introduir
// const total = Number(prompt("Quants venedors vols afegir?"));

// TODO: 4️⃣ Fes un bucle for que es repeteixi “total” vegades
/*
for (let i = 0; i < total; i++) {
  // Demanar dades del venedor
  // const nom = prompt(...);
  // const vendes = Number(prompt(...));
  // const objectiu = Number(prompt(...));

  // Validació de dades (com abans)
  // if (...) { alert("Dades incorrectes!"); continue; }

  // Càlcul de comissió i objecte venedor
  // const totalComissio = vendes * COMISSIO;
  // const supera = vendes >= objectiu;
  // const venedor = { nom, vendes, objectiu, totalComissio, supera };

  // Afegir al array
  // venedors.push(venedor);
}
*/

// TODO: 5️⃣ Recorre l’array amb for...of i mostra el resum amb console.log()
/*
for (const v of venedors) {
  console.log(`${v.nom}: ${v.vendes}€ — Comissió: ${v.totalComissio.toFixed(2)}€`);
}
*/

// TODO: 6️⃣ Calcula i mostra la mitjana de vendes i de comissions
/*
let sumaVendes = 0;
let sumaComissio = 0;
for (const v of venedors) {
  sumaVendes += v.vendes;
  sumaComissio += v.totalComissio;
}
const mitjanaVendes = sumaVendes / venedors.length;
const mitjanaComissio = sumaComissio / venedors.length;
console.log(`Mitjana de vendes: ${mitjanaVendes.toFixed(2)}€`);
console.log(`Mitjana de comissions: ${mitjanaComissio.toFixed(2)}€`);
*/
