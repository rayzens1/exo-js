const prompt = require('prompt-sync') ();

const userFirstname = prompt('Entrer votre nom');
const userEntry = prompt('Entrer votre âge');

const userAge = parseInt(userEntry);

console.log(`Hello ${userFirstname}, vous avez ${userAge} ans`);
