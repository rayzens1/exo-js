const prompt = require('prompt-sync') ();

const str = prompt('Entrer une chaine de caractere');

console.log(`Longueur de la chaine: ${str.length}`);