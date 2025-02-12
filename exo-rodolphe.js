const prompt = require('prompt-sync') ();

const age = parseInt(prompt('Entrer votre âge: '));
const nom = prompt('Entrer une phrase: ');
const estMajeur = Boolean(prompt('Êtes vous majeur Entrer un booléen (true/false): '));

console.log(`Type de âge : ${typeof age}, valeur : ${age}`);
console.log(`Type de nom : ${typeof nom}, valeur : ${nom}`);
console.log(`Type de estMajeur : ${typeof estMajeur}, valeur : ${estMajeur}`);