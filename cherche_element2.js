const prompt = require('prompt-sync') ();

const numbers = [ 386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 399,
    162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 815, 67, 104, 58, 512,
    24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717, 958,743, 527 ];

const numberToSearch = parseInt(prompt('Merci de rentrer le nombre a trouver: '))

for(let i = 0; i<numbers.length; i++) { //On boucle tout le tableau élément par élément
    if(numbers[i]==numberToSearch) {
        console.log("L'index du chiffre est: "+i)
        break;
    }
    if(i==(numbers.length-1)) {
        console.log(`Le nombre n'est pas dans le tableau.`)
        break;
    }
}
