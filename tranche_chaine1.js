const prompt = require('prompt-sync') ();

const str = prompt('Entrer une chaine de caractere: ');
const amount = prompt('Entrée la longueur que vous voulez affiche: ');

const chars = str.split('');

console.log(`La chaine de caractere char par char: `);
chars.forEach(element => {
    console.log(element);
});