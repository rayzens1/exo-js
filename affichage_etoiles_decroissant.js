const prompt = require('prompt-sync') ();

const startAmount = parseInt(prompt("Entrer le nombre d'étoile: "));

if(!isNaN(startAmount) && startAmount>=0) {
    let currentAmount = startAmount;
    for(let i = 0; i<startAmount; i++) {
        let finalString = "";
        for(let i = 0; i<currentAmount; i++) {
            finalString = finalString+"*";
        }
        currentAmount--;
        console.log(finalString);
    }
}