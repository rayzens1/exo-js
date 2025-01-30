const prompt = require('prompt-sync') ();

const radius = prompt('Entrer rayon');

console.log(`Aire du triangle: ${Math.PI*(radius^2)}`);