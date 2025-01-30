const prompt = require('prompt-sync') ();

const triangleA = prompt('Entrer A');
const triangleB = prompt('Entrer B');

console.log(`Hypoténuse des 2 2 côtés adjacents: ${Math.hypot(triangleA, triangleB)}`);