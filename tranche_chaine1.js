const prompt = require('prompt-sync') ();

const str = prompt('Entrer une chaine de caractere');
const amount = prompt('Entrer une chaine de caractere');

const chars = str.split('');

console.log(`La chaine de caractere char par char: `);
chars.forEach(element => {
    console.log(element);
});