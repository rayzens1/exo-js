
const prompt = require('prompt-sync') ();

let userEntry = parseInt(prompt('Entrer un nombre: '));

let total = 0;

while(userEntry) {
    total += userEntry;
    userEntry = parseInt(prompt('Entrer un nombre: '));
}

console.log("Somme: "+total);
