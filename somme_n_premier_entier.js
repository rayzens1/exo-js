const prompt = require('prompt-sync') ();

const n = parseInt(prompt('Entrer N: '));

if(!isNaN(n) && n>=0 ) { // vérification non négatif et un entier
    console.log((n*(n+1))/2);
} else {
   console.log("Vous n'avez pas rentré un nombre entier positif.") 
}