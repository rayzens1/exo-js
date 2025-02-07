const prompt = require('prompt-sync') ();

const lineAmount = parseInt(prompt("Saisissez le nombre de lignes: "));

for(let i = 0; i<lineAmount; i++) {
    let spaceAmount = (lineAmount)-i;
    let starAmount = 1+(i*2);
    let str = "";
    let strSpace = "";
    for(let i = 0; i<starAmount; i++) {
        str = str+"*";
    }
    for(let i = 0; i<spaceAmount; i++) {
        strSpace = strSpace+" ";
    }
    console.log(strSpace+str);
}