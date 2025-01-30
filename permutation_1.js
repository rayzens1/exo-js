const prompt = require('prompt-sync') ();

const userLastname = prompt('Entrer votre nom');
const userFirstname = prompt('Entrer votre prénom');

console.log(`${userFirstname} ${userLastname}`);