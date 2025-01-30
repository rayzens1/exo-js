const prompt = require('prompt-sync') ();

const height = prompt('Entrer la hauteur');
const base = prompt('Entrer la base');

console.log(`Aire du triangle: ${(base*height)/2}`);