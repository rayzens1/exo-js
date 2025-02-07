const prompt = require('prompt-sync')();

const entréeUtilisateur = prompt("Entrer la largeur de la pièce: ");

const taillePièce = entréeUtilisateur * entréeUtilisateur;

console.log("Votre pièce fait: " + taillePièce + " m²");