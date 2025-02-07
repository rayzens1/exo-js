const prompt = require('prompt-sync') ();

let lineAmount = parseInt(prompt("Saisissez le nombre de lignes (<20): "));

while(isNaN(lineAmount) || lineAmount>20) {
    lineAmount = parseInt(prompt("Saisissez le nombre de lignes (<20): "));
}

for(let i = 0; i<lineAmount; i++) {
    if(i%2==0) {
        console.log("X0X0X0X0X0")
    } else {
        console.log("0X0X0X0X0X")
    }
}