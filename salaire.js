let salaires = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let personne in salaires) {
    sum += salaires[personne]
}

console.log("Sum: "+sum)
