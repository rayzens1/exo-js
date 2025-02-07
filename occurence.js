const prompt = require('prompt-sync') ();

const phrase = "Ceci est une phrase."

const searchedChar = prompt('Entrer le caractère a chercher: ');

let amountSearchedChar = 0;

for(let char of phrase) {
    if(char==searchedChar) {
        amountSearchedChar++;
    }
}

console.log("Le caractère est présent: "+amountSearchedChar+" fois.")