const prompt = require('prompt-sync') ();

const liste = [1, 4, 678, 98, -12, 49, 9];

let maxLength = parseInt(prompt('Entrer la valeur maximum: '));

if(!isNaN(maxLength)) {
    let isExceedingMax = false;
    for(let i =0; i<liste.length; i++) {
        if(liste[i]>maxLength) {
            isExceedingMax = true;
        }
    }
    if(isExceedingMax) {
        console.log("Dépassement.");
    } else {
        console.log("Pas de dépassement.")
    }
}

