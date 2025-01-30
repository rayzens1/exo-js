const prompt = require('prompt-sync') ();

const userEntry1 = prompt('Entrer une valeur');
const userEntry2 = prompt('Entrer une autre valeur');

let userValue1 = userEntry1;
let userValue2 = userEntry2;

userValue1 = userEntry2;
userValue2 = userEntry1;

console.log(`${userValue1} ${userValue2}`);
