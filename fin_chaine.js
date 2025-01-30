const prompt = require('prompt-sync') ();

const str = prompt('Entrer une chaine de caractere');
const amount = prompt('Entrer une chaine de caractere');

console.log(`Les ${amount} derniers caractères de la chaîne: ${str.slice(amount, str.length)}`);