const prompt = require('prompt-sync') ();

const userEntry1 = prompt('Entrer un entier');
const userEntry2 = prompt('Entrer une autre entier');

console.log(`Somme: ${userEntry1+userEntry2}`)